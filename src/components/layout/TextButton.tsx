/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from 'react';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import arrow from 'assets/sArrow_0.png';
import { FocusAnimation } from 'utils';

import BitmapText, { BitmapVariant, HoverOverride } from './BitmapText';

type Props<D extends ElementType<any>> = {
	disabled?: boolean;
	variant?: BitmapVariant;
} & BoxProps<D>;

const TextButton = <D extends ElementType<any> = 'button'>({
	variant = 'secondary',
	disabled,
	children,
	onClick,
	sx: { [':hover,:focus-visible' as never]: hover = {} as never, ...sx } = {},
	...props
}: Props<D>) => (
	<Box
		component="button"
		type="button"
		data-text={`${children}`}
		onClick={!disabled ? onClick : undefined}
		{...props}
		sx={{
			flexShrink: 0,
			border: 'none',
			m: 0,
			py: 2,
			background: 'none',
			...(!disabled
				? {
						':hover::before,:focus-visible::before': {
							content: '""',
							display: 'inline-block',
							backgroundImage: `url(${arrow})`,
							backgroundSize: 'contain',
							width: t => t.spacing(7.5),
							height: t => t.spacing(7.5),
							ml: -9.5,
							mr: 2
						},
						...HoverOverride(variant, {
							...(hover as SxProps<Theme>),
							outline: 'none',
							animation: FocusAnimation
						})
				  }
				: {}),
			...sx
		}}
	>
		<BitmapText
			component="span"
			variant={disabled ? 'disabled' : variant}
			hasHover={!disabled}
		>
			{children}
		</BitmapText>
	</Box>
);

export default TextButton;
