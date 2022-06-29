import { Box } from '@mui/material';
import { ComponentProps, useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-final-form';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/ext-searchbox';

import { SaveFile } from 'utils/types';
import BitmapText from 'components/layout/BitmapText';
import TextButton from 'components/layout/TextButton';
import ActionBar from 'components/layout/ActionBar';

const EditJsonTab = () => {
	const { values } = useFormState<SaveFile>({ subscription: { values: true } });
	const { reset } = useForm();

	const [rawText, setRawText] = useState(JSON.stringify(values, null, 2));
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string>();
	const [markers, setMarkers] =
		useState<ComponentProps<typeof AceEditor>['markers']>();

	useEffect(() => {
		setRawText(JSON.stringify(values, null, 2));
	}, [values]);

	return (
		<>
			<Box
				sx={{
					'height': 0,
					'flexGrow': 1,
					'*': {
						fontFamily: 'monospace'
					}
				}}
			>
				<AceEditor
					mode="json"
					theme="github"
					value={rawText}
					onChange={v => {
						success && setSuccess(false);
						setRawText(v);
					}}
					showGutter
					highlightActiveLine
					width="100%"
					height="100%"
					markers={markers}
				/>
			</Box>
			<ActionBar sx={{ justifyContent: 'flex-end' }}>
				{error ? (
					<BitmapText size="sm">{error}</BitmapText>
				) : (
					success && <BitmapText size="sm">Changes saved</BitmapText>
				)}
				<TextButton
					variant="success"
					disabled={success}
					onClick={() => {
						try {
							setError(undefined);
							setMarkers([]);
							reset(JSON.parse(rawText));
							setSuccess(true);
						} catch (e) {
							if (!(e instanceof SyntaxError)) return;
							setError(e.message);

							const position = Number(
								e.message.match(/position (\d+)/)?.[1] ?? -1
							);
							if (position < 0) return;

							const split = rawText.slice(0, position).split('\n');
							const row = split.length - 1;
							const col = split[split.length - 1].length;
							console.log({ position, row, col });

							setError(`${e.message} (line: ${row + 1})`);
							setMarkers([
								{
									type: 'text',
									className: 'error-marker',
									startRow: row,
									endRow: row,
									startCol: col,
									endCol: col + 1
								},
								{
									type: 'fullLine',
									className: 'error-marker',
									startRow: row,
									endRow: row,
									startCol: col,
									endCol: col + 1
								}
							]);
						}
					}}
				>
					Save changes
				</TextButton>
			</ActionBar>
		</>
	);
};
export default EditJsonTab;
