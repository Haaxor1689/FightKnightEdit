import { Box, BoxProps, Modal } from '@mui/material';
import { ReactNode, useState } from 'react';

import BackButton from './BackButton';

type Props = {
	button: (open: () => void) => ReactNode;
	children: (close: () => void) => ReactNode;
} & Omit<BoxProps, 'children'>;

const OverlayMenu = ({ button, children, sx, ...props }: Props) => {
	const [open, setOpen] = useState(false);

	const openMenu = () => setOpen(true);
	const closeMenu = () => setOpen(false);

	return (
		<>
			{button(openMenu)}
			<Modal open={open} onClose={closeMenu}>
				<Box
					{...props}
					sx={{
						...sx,
						position: 'absolute',
						top: '50%',
						left: t => t.spacing(3),
						transform: 'translateY(-50%)',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						flexWrap: 'wrap',
						maxHeight: '95vh',
						gap: 3
					}}
				>
					{children(closeMenu)}
					<BackButton onClick={() => setOpen(false)} sx={{ mt: 2 }} />
				</Box>
			</Modal>
		</>
	);
};

export default OverlayMenu;
