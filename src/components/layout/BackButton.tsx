/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from 'react';
import { BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import button from 'assets/sBackButton.png';
import buttonHover from 'assets/sBackButtonHover.png';
import { PointingHand, ScaleAnimation } from 'utils';

import BitmapText, { HoverOverride } from './BitmapText';
import { SpriteBox } from './Sprite';

type Props<D extends ElementType<any>> = BoxProps<D>;

const BackButton = <D extends ElementType<any> = 'button'>({
	disabled,
	onClick,
	sx: { [':hover,:focus-visible' as never]: hover = {} as never, ...sx } = {},
	...props
}: Props<D>) => (
	<SpriteBox
		component="button"
		type="button"
		img={button}
		data-text="Back"
		onClick={!disabled ? onClick : undefined}
		{...props}
		sx={{
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: 0,
			border: 'none',
			m: 0,
			py: 2,
			width: t => t.spacing(48),
			height: t => t.spacing(16),
			...PointingHand,
			...(!disabled
				? HoverOverride('secondary', {
						...(hover as SxProps<Theme>),
						outline: 'none',
						animation: ScaleAnimation,
						backgroundImage: `url(${buttonHover}) `,
						width: t => t.spacing(60),
						height: t => t.spacing(20),
						mx: t => t.spacing(-6),
						my: t => t.spacing(-1)
				  })
				: {}),
			...sx
		}}
	>
		<BitmapText
			component="span"
			variant={disabled ? 'disabled' : 'secondary'}
			hasHover={!disabled}
			sx={{ mt: -2 }}
		>
			BACK
		</BitmapText>
	</SpriteBox>
);

export default BackButton;
