import { Paper } from '@mui/material';

import BitmapText from './BitmapText';
import RawFormEdit from './RawFormEdit';
import TextButton from './TextButton';

type Props = {
	name: string;
	reset: () => void;
};

const Header = ({ name, reset }: Props) => (
	<Paper
		sx={{
			position: 'sticky',
			top: 0,
			display: 'flex',
			alignItems: 'center',
			alignSelf: 'stretch',
			zIndex: 3,
			gap: 3,
			p: 3
		}}
	>
		<BitmapText flexGrow={1}>{name}</BitmapText>
		<RawFormEdit />
		<TextButton onClick={reset}>Discard</TextButton>
		<TextButton type="submit">Save</TextButton>
	</Paper>
);

export default Header;
