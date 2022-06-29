import { Paper, PaperProps } from '@mui/material';

const ActionBar = ({ children, sx, ...props }: PaperProps) => (
	<Paper
		{...props}
		sx={{
			display: 'flex',
			alignItems: 'baseline',
			gap: 4,
			py: 3,
			px: 4,
			...sx
		}}
	>
		{children}
	</Paper>
);

export default ActionBar;
