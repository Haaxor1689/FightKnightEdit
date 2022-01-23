/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from 'react';
import { Box, BoxProps } from '@mui/material';

import arrow from 'assets/sArrow_0.png';
import { FocusAnimation } from 'utils';

import BitmapText, { HoverOverride } from './BitmapText';

type Props<D extends ElementType<any>> = {
	disabled?: boolean;
} & BoxProps<D>;

const TextButton = <D extends ElementType<any> = 'button'>({
	children,
	sx: { [':hover,:focus-visible' as never]: hover = {} as never, ...sx } = {},
	...props
}: Props<D>) => (
	<Box
		component="button"
		type="button"
		data-text={`${children}`}
		{...props}
		sx={{
			'flexShrink': 0,
			'border': 'none',
			'm': 0,
			'py': 2,
			'background': 'none',
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
			...HoverOverride({
				...(hover as Record<string, unknown>),
				outline: 'none',
				animation: `${FocusAnimation} 1s ease-in-out`
			}),
			...sx
		}}
	>
		<BitmapText component="span" variant="secondary" hasHover>
			{children}
		</BitmapText>
	</Box>
);

export default TextButton;
