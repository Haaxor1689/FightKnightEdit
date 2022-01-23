import { Container, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';

import { SaveFile } from 'utils/types';
import useThemeSpacing from 'utils/useThemeSpacing';
import * as serviceWorker from 'serviceWorkerRegistration';
import TextButton from 'components/TextButton';
import BitmapText from 'components/BitmapText';

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
			<Container
				maxWidth="lg"
				component="main"
				sx={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					py: 0
				}}
			>
				{!save ? (
					<FileLoadForm setWorldData={setSave} />
				) : (
					<WorldEditForm save={save} reset={() => setSave(undefined)} />
				)}
				{waitingWorker && (
					<Paper
						sx={{
							position: 'absolute',
							bottom: 0,
							display: 'flex',
							alignItems: 'center',
							width: '100%',
							zIndex: 3,
							gap: 3,
							p: 3
						}}
					>
						<BitmapText variant="secondary" sx={{ flexShrink: 0 }}>
							!!!
						</BitmapText>
						<BitmapText size="sm" flexGrow={1}>
							You are viewing outdated version of this app, please reload the
							page.
						</BitmapText>
						<TextButton onClick={reloadPage}>Reload</TextButton>
					</Paper>
				)}
			</Container>
		</ThemeProvider>
	);
};

export default App;
