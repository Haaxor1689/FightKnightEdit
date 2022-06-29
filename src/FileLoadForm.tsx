import ini from 'ini';

import BitmapText from 'components/layout/BitmapText';
import TextButton from 'components/layout/TextButton';
import FileInput from 'components/form/FileInput';
import AutoSubmit from 'components/AutoSubmit';
import Form from 'components/form/Form';
import { SaveFile, SaveFileSchema } from 'utils/types';
import { makeBase64File } from 'utils';
import BlankSaveFile from 'utils/data/blankSaveFile';
import EditorLogo from 'components/EditorLogo';

type Props = {
	setWorldData: (save: [string, SaveFile]) => void;
};

const FileLoadForm = ({ setWorldData }: Props) => (
	<Form
		initialValues={{ file: undefined as File | undefined }}
		onSubmit={async ({ file }) => {
			try {
				const ff = ini.parse(atob(await makeBase64File(file)));
				setWorldData([file.name, SaveFileSchema.parse(ff)]);
			} catch (e) {
				console.error(e);
				return { file: 'Failed to parse file' };
			}
		}}
		validate={({ file }) =>
			!file
				? { file: 'Required' }
				: !file.name.endsWith('.sav')
				? { file: 'Wrong file type' }
				: undefined
		}
		sx={{
			maxWidth: t => t.breakpoints.values.lg,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexGrow: 1,
			gap: 10,
			px: 4
		}}
	>
		<EditorLogo />
		<BitmapText textAlign="center">
			Start by locating your save files in{' '}
			<BitmapText component="span" variant="success">
				C:\Users\{'{{USER_NAME}}'}\AppData\Local\FIGHTKNIGHT\
				<BitmapText component="span">.</BitmapText>
			</BitmapText>{' '}
			Then pick a slot from one of the{' '}
			<BitmapText component="span" variant="success">
				FIGHTKNIGHT_save_X
			</BitmapText>{' '}
			folders and select{' '}
			<BitmapText component="span" variant="success">
				save_gamestate.sav
			</BitmapText>{' '}
			file.
		</BitmapText>
		<TextButton
			onClick={() => setWorldData(['save_gamestate.sav', BlankSaveFile])}
		>
			New game
		</TextButton>
		<FileInput id="file" label="Load game" acceptFileTypes={['.sav']} />
		<AutoSubmit />
	</Form>
);

export default FileLoadForm;
