import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@mui/material';
import { ComponentProps, useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-final-form';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/ext-searchbox';

import { SaveFile } from 'utils/types';

import TextButton from './TextButton';
import BitmapText from './BitmapText';

const RawFormEdit = () => {
	const { values } = useFormState<SaveFile>({ subscription: { values: true } });
	const { reset } = useForm();

	const [open, setOpen] = useState(false);
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
			<TextButton
				onClick={() => setOpen(true)}
				sx={{
					'opacity': 0.2,
					'transition': 'opacity 0.2s',
					':hover,:focus-visible': { opacity: 1 }
				}}
			>
				Edit JSON
			</TextButton>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				fullScreen
				sx={{
					'& .error-marker': {
						position: 'absolute',
						opacity: 0.35,
						backgroundColor: t => t.palette.error.main
					}
				}}
			>
				<DialogTitle>
					<BitmapText>JSON save data</BitmapText>
				</DialogTitle>
				<DialogContent
					sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 0 }}
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
				</DialogContent>
				<DialogActions sx={{ alignItems: 'baseline' }}>
					{error ? (
						<BitmapText size="sm" sx={{ mr: 2 }}>
							{error}
						</BitmapText>
					) : (
						success && (
							<BitmapText size="sm" sx={{ mr: 2 }}>
								Changes saved
							</BitmapText>
						)
					)}
					<TextButton onClick={() => setOpen(false)}>Close</TextButton>
					<TextButton
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
				</DialogActions>
			</Dialog>
		</>
	);
};
export default RawFormEdit;
