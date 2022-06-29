/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from 'react';
import { BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import buttonPrimary from 'assets/sButton_primary.png';
import buttonPrimaryHover from 'assets/sButtonHover_primary.png';
import buttonSecondary from 'assets/sButton_secondary.png';
import buttonSecondaryHover from 'assets/sButtonHover_secondary.png';
import buttonDisabled from 'assets/sButton_disabled.png';
import buttonDisabledHover from 'assets/sButtonHover_disabled.png';
import { PointingHand, ScaleAnimation } from 'utils';

import BitmapText, { BitmapVariant, HoverOverride } from './BitmapText';
import { SpriteBox } from './Sprite';

const TextureVariant: Record<Exclude<BitmapVariant, 'success'>, string> = {
	primary: buttonPrimary,
	secondary: buttonSecondary,
	disabled: buttonDisabled
};

const HoverVariant: Record<Exclude<BitmapVariant, 'success'>, string> = {
	primary: buttonPrimaryHover,
	secondary: buttonSecondaryHover,
	disabled: buttonDisabledHover
};

type Props<D extends ElementType> = {
	disabled?: boolean;
	variant?: Exclude<BitmapVariant, 'success'>;
} & BoxProps<D>;

const DialogButton = <D extends ElementType = 'button'>({
	variant = 'secondary',
	disabled,
	children,
	onClick,
	sx: { [':hover,:focus-visible' as never]: hover = {} as never, ...sx } = {},
	...props
}: Props<D>) => (
	<SpriteBox
		component="button"
		type="button"
		img={TextureVariant[variant]}
		data-text={`${children}`}
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
			width: t => t.spacing(96),
			height: t => t.spacing(16),
			...PointingHand,
			...(!disabled
				? HoverOverride(variant, {
						...(hover as SxProps<Theme>),
						outline: 'none',
						animation: ScaleAnimation,
						backgroundImage: `url(${HoverVariant[variant]}) `,
						width: t => t.spacing(120),
						height: t => t.spacing(20),
						px: t => t.spacing(12),
						py: t => t.spacing(2),
						mx: t => t.spacing(-12),
						my: t => t.spacing(-2),
						zIndex: 1
				  })
				: {}),
			...sx
		}}
	>
		<BitmapText
			component="span"
			variant={disabled ? 'disabled' : variant}
			hasHover={!disabled}
			uppercase
			sx={{ mt: -2 }}
		>
			{children}
		</BitmapText>
	</SpriteBox>
);

export default DialogButton;
