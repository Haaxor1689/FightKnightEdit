import Sprite from './layout/Sprite';

const EditorLogo = () => (
	<Sprite
		img={`${process.env.PUBLIC_URL}/assets/logo-512.png`}
		height={140}
		sx={{ aspectRatio: '1', my: -26, mb: -26 }}
	/>
);

export default EditorLogo;
