import BitmapText from 'components/layout/BitmapText';
import ActionBar from 'components/layout/ActionBar';
import TextButton from 'components/layout/TextButton';

type Props = {
	name: string;
	goBack: () => void;
};

const Header = ({ name, goBack }: Props) => (
	<ActionBar>
		<BitmapText flexGrow={1}>{name}</BitmapText>
		<TextButton onClick={goBack}>Back</TextButton>
	</ActionBar>
);

export default Header;
