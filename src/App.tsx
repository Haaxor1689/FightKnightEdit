import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';

import { SaveFile } from 'utils/types';
import useThemeSpacing from 'utils/useThemeSpacing';
import * as serviceWorker from 'serviceWorkerRegistration';
import TextButton from 'components/layout/TextButton';
import BitmapText from 'components/layout/BitmapText';
import ActionBar from 'components/layout/ActionBar';

import FileLoadForm from './FileLoadForm';
import WorldEditForm from './WorldEditForm';
import theme from './utils/theme';

const App = () => {
	const [save, setSave] = useState<[string, SaveFile]>();
	const spacing = useThemeSpacing();

	const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>();

	useEffect(() => {
		serviceWorker.register({
			onUpdate: reg => {
				setWaitingWorker(reg.waiting);
			}
		});
	}, []);

	const reloadPage = () => {
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload();
	};

	return (
		<ThemeProvider theme={theme(spacing)}>
			<CssBaseline />
			{!save ? (
				<FileLoadForm setWorldData={setSave} />
			) : (
				<WorldEditForm save={save} reset={() => setSave(undefined)} />
			)}
			{waitingWorker && (
				<ActionBar sx={{ position: 'absolute', bottom: 0, width: '100vw' }}>
					<BitmapText variant="secondary" sx={{ flexShrink: 0 }}>
						!!!
					</BitmapText>
					<BitmapText size="sm" flexGrow={1}>
						You are viewing outdated version of this app, please reload the
						page.
					</BitmapText>
					<TextButton onClick={reloadPage}>Reload</TextButton>
				</ActionBar>
			)}
		</ThemeProvider>
	);
};

export default App;
