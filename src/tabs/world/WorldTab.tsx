import { Box } from '@mui/material';
import { useState } from 'react';

import useField from 'components/form/useField';
import BitmapText from 'components/layout/BitmapText';
import { SaveFile } from 'utils/types';
import { mapTileToSprite, mapWalkedToSprite, parseHexValue } from 'utils';
import Sprite, { SpriteBox } from 'components/layout/Sprite';
import dither from 'assets/dither.png';
import { DungeonsMap } from 'utils/data/dungeons';
import TextButton from 'components/layout/TextButton';
import DialogButton from 'components/layout/DialogButton';
import OverlayMenu from 'components/layout/OverlayMenu';

const WorldTab = () => {
	const [map, setMap] = useState(0);

	const [mapdun] = useField<SaveFile, `mapdun.${number}`>(`mapdun.${map}`);
	const [mapwalked] = useField<SaveFile, `mapwalked.${number}`>(
		`mapwalked.${map}`
	);

	const dungeons = Object.keys(useField<SaveFile, 'mapdun'>('mapdun')[0]).map(
		k => Number(k)
	);

	return (
		<Box
			sx={{ position: 'relative', height: 0, flexGrow: 1, overflow: 'auto' }}
		>
			<Box
				sx={{
					position: 'sticky',
					top: 0,
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					zIndex: 2,
					px: 2,
					py: 3
				}}
			>
				<BitmapText size="lg">
					{DungeonsMap[map as never] ?? `Unknown #${map}`}
				</BitmapText>
				<OverlayMenu
					button={open => <TextButton onClick={open}>Change</TextButton>}
				>
					{close =>
						dungeons.map(v => (
							<DialogButton
								key={v}
								variant={v === map ? 'primary' : undefined}
								onClick={() => {
									v !== map && setMap(v);
									close();
								}}
							>
								{DungeonsMap[v as never] ?? `Unknown #${v}`}
							</DialogButton>
						))
					}
				</OverlayMenu>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gridTemplateRows: t => `repeat(${mapdun.height}, ${t.spacing(4)})`,
					gridTemplateColumns: t => `repeat(${mapdun.width}, ${t.spacing(4)})`
				}}
			>
				{[...Array(mapdun.width).keys()].map(x =>
					[...Array(mapdun.height).keys()].map(y => {
						const v = mapdun.data[Number(x)]?.[Number(y)];
						const w = mapwalked.data[Number(x)]?.[Number(y)];

						if (!w && !v) return null;

						const spr = w
							? mapWalkedToSprite(parseHexValue(w.slice(-4, -2)))
							: undefined;
						const BigSprite =
							spr !== undefined ? (
								<Sprite
									img={`${process.env.PUBLIC_URL}/assets/sprites/sMap_cell_big_${spr}.png`}
									style={{
										gridColumnStart: x,
										gridRowStart: y
									}}
									sx={{ zIndex: 1 }}
								/>
							) : null;

						if (!v) return BigSprite;

						return (
							<SpriteBox
								key={`${x}-${y}`}
								img={`${
									process.env.PUBLIC_URL
								}/assets/sprites/sMap_cell_${mapTileToSprite(
									parseHexValue(v.slice(-4, -2))
								)}.png`}
								onClick={() => console.log({ x, y, v, w })}
								style={{
									gridColumnStart: x,
									gridRowStart: y
								}}
								sx={{
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								{BigSprite}
								<Box
									sx={{
										position: 'absolute',
										bottom: 0,
										right: 0,
										width: t => t.spacing(w ? 1 : 4),
										height: t => t.spacing(w ? 1 : 4),
										backgroundImage: `url(${dither})`,
										mixBlendMode: 'darken'
									}}
								/>
							</SpriteBox>
						);
					})
				)}
			</Box>
		</Box>
	);
};

export default WorldTab;
