import ini from 'ini';

import FileInput from 'components/form/FileInput';
import Sprite from 'components/Sprite';
import AutoSubmit from 'components/AutoSubmit';
import Form from 'components/form/Form';
import { SaveFile, SaveFileSchema } from 'utils/types';
import { makeBase64File } from 'utils';
import BitmapText from 'components/BitmapText';

type Props = {
	setWorldData: (save: [string, SaveFile]) => void;
};

const FileLoadForm = ({ setWorldData }: Props) => (
	<Form
		initialValues={{ file: undefined as File | undefined }}
		onSubmit={async ({ file }) => {
			try {
				setWorldData([
					file.name,
					SaveFileSchema.parse(ini.parse(atob(await makeBase64File(file))))
				]);
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
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			flexGrow: 1,
			gap: 14
		}}
	>
		<Sprite
			img={`${process.env.PUBLIC_URL}/assets/logo-512.png`}
			height={160}
			sx={{ aspectRatio: '1', imageRendering: 'initial', my: -36 }}
		/>
		<BitmapText textAlign="center">
			Start by locating your save files in{' '}
			<BitmapText component="span" variant="secondary">
				C:\Users\{'{{USER_NAME}}'}\AppData\Local\FIGHTKNIGHT\
			</BitmapText>
			. Then pick a slot from one of the{' '}
			<BitmapText component="span" variant="secondary">
				FIGHTKNIGHT_save_X
			</BitmapText>{' '}
			folders and select{' '}
			<BitmapText component="span" variant="secondary">
				save_gamestate.sav
			</BitmapText>{' '}
			file.
		</BitmapText>
		<FileInput id="file" label="Select" acceptFileTypes={['.sav']} />
		<AutoSubmit />
	</Form>
);

export default FileLoadForm;
