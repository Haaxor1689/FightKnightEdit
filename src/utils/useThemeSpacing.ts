import { useMediaQuery } from '@mui/material';

const useThemeSpacing = () => {
	const lg = useMediaQuery('(max-width:1366px)');
	const xl = useMediaQuery('(max-width:1920px)');
	return lg ? 3 : xl ? 4 : 5;
};

export default useThemeSpacing;
