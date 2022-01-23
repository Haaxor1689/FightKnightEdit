import { layoutItemsFromString } from 'tex-linebreak';
import { Children } from 'react';
import { Box, BoxProps, ThemeProvider } from '@mui/material';

import primary from 'assets/font/sFont_primary.png';
import secondary from 'assets/font/sFont_secondary.png';
import dither from 'assets/dither.png';
import useThemeSpacing from 'utils/useThemeSpacing';
import theme from 'utils/theme';

export const HoverOverride = (hover: Record<string, unknown> = {}) => ({
	'--bitmap-url': `url(${secondary})`,
	'--dither-url': `url(${dither})`,
	':hover,:focus-visible': {
		...hover,
		'--bitmap-url': `url(${primary})`,
		'--dither-url': `none`
	}
});

const Kerning: Record<string, [number, number]> = {
	' ': [3, 3],
	'!': [1, 3],
	'"': [2, 4],
	"'": [2, 6],
	'(': [1, 3],
	')': [1, 3],
	',': [1, 3],
	'.': [1, 3],
	'/': [1, 2],
	'1': [1, 2],
	':': [1, 3],
	';': [1, 3],
	'I': [0, 2],
	'T': [2, 2],
	'[': [1, 3],
	']': [1, 3],
	'_': [2, 2],
	'`': [2, 2],
	'i': [2, 4],
	'j': [3, 2],
	'k': [1, 2],
	'l': [1, 3],
	't': [1, 2],
	'|': [1, 5]
};

type GlyphProps = {
	char: string;
	hasHover?: boolean;
	variant: 'primary' | 'secondary';
};

const Glyph = ({ char, variant, hasHover }: GlyphProps) => {
	const code = char.charCodeAt(0) - 32;

	if (char === '\n') return <br />;
	if (code < 0 || code > 223) return null;
	return (
		<Box
			component="span"
			sx={{
				...(!hasHover
					? {
							'--bitmap-url': `url(${
								variant === 'primary' ? primary : secondary
							})`,
							'--dither-url': `url(${dither})`
					  }
					: {}),
				position: 'relative',
				display: 'inline-block',
				width: t => t.spacing(9),
				height: t => t.spacing(14),
				whiteSpace: 'pre',
				color: 'transparent',
				textAlign: 'center',
				pl: 1,
				mb: -3,
				ml: -(Kerning[char]?.[0] ?? 1),
				mr: -(Kerning[char]?.[1] ?? 1),
				mt: 2.5,
				backgroundImage: `var(--bitmap-url)`,
				backgroundPositionX: t => t.spacing(-((code % 95) * 13)),
				backgroundPositionY: t => t.spacing(-(Math.floor(code / 95) * 15)),
				backgroundSize: t => t.spacing(95 * 13),
				textShadow: 'none',
				lineHeight: t => t.spacing(11),
				fontSize: t => t.spacing(16),
				overflow: 'hidden',
				...(variant === 'secondary'
					? {
							'::after': {
								content: '""',
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundImage: `var(--dither-url)`,
								maskImage: `var(--bitmap-url)`,
								maskPosition: t =>
									`${t.spacing(-((code % 95) * 13))} ${t.spacing(
										-(Math.floor(code / 95) * 15)
									)}`,
								maskSize: t => t.spacing(95 * 13),
								mixBlendMode: 'darken'
							}
					  }
					: {})
			}}
		>
			{char}
		</Box>
	);
};

type WordProps = {
	chars: string;
} & Pick<GlyphProps, 'variant' | 'hasHover'> &
	Pick<BoxProps, 'sx'>;

const Word = ({ chars, sx, ...props }: WordProps) =>
	chars.length <= 0 ? null : (
		<Box component="span" sx={sx}>
			{[...Array(chars.length).keys()].map(i => (
				<Glyph key={i} char={chars[i]} {...props} />
			))}
		</Box>
	);

const sizes = ['sm', 'md', 'lg'] as const;
type TextSizes = typeof sizes[number];

type Props = {
	size?: TextSizes;
} & Partial<Pick<GlyphProps, 'variant' | 'hasHover'>> &
	BoxProps;

const BitmapText = ({
	size = 'md',
	variant = 'primary',
	hasHover,
	children,
	...props
}: Props) => {
	const spacing = useThemeSpacing();
	return (
		<Box {...props} sx={{ display: 'inline-block', ...props.sx }}>
			<ThemeProvider
				theme={theme(Math.max(spacing + sizes.indexOf(size) - 2, 1))}
			>
				{Children.map(Children.toArray(children), c => {
					if (typeof c !== 'string') return c;
					const words = layoutItemsFromString(c, s => s.length);
					return words.map((w, i) =>
						w.type === 'box' ? (
							<Word
								key={i}
								chars={w.text}
								variant={variant}
								hasHover={hasHover}
								sx={{ display: 'inline-block' }}
							/>
						) : w.type === 'glue' ? (
							<Word
								key={i}
								chars={w.text}
								variant={variant}
								hasHover={hasHover}
							/>
						) : null
					);
				})}
			</ThemeProvider>
		</Box>
	);
};

export default BitmapText;
