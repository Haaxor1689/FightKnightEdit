import { createTheme } from '@mui/material';

import 'assets/font/stylesheet.css';

import background from 'assets/sOpening_17.png';

const theme = (spacing: number) =>
	createTheme({
		palette: {
			primary: { main: '#fedd00' },
			secondary: { main: '#fe2300' },
			background: { default: '#2c0b32' },
			mode: 'dark'
		},
		spacing,
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					'*': {
						imageRendering: 'pixelated',
						fontFamily: '"Nintendo DS BIOS", sans-serif'
					},
					'body': {
						position: 'relative'
					},
					'body:before': {
						content: '" "',
						position: 'absolute',
						bottom: 0,
						right: 0,
						height: '100%',
						width: '100%',
						zIndex: -1,
						opacity: 0.2,
						backgroundImage: `url(${background})`,
						backgroundPosition: 'bottom right',
						backgroundSize: 'cover',
						filter: 'blur(10px)',
						mixBlendMode: 'hard-light'
					},
					'#root': {
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						minHeight: '100vh',
						overflowX: 'hidden'
					}
				}
			}
		}
	});

export default theme;
