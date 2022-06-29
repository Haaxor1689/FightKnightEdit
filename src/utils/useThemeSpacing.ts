import { useMediaQuery } from '@mui/material';

const useThemeSpacing = () => {
	const lg = useMediaQuery('(max-width:1366px)');
	return lg ? 3 : 4;
};

export default useThemeSpacing;
