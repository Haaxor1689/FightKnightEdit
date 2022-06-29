import { keyframes } from '@emotion/react';
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { isUndefined } from 'lodash-es';

import pointingFinger from 'assets/sFist_new_5.png';

export const isNotUndefined = <T>(
	obj: T | undefined
): obj is Exclude<T, undefined> => !isUndefined(obj);

export const makeBase64File = (file: File) =>
	new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () =>
			resolve((reader.result as string).match(/;base64,(.*)/)?.[1] ?? '');
		reader.onerror = error => reject(error);
	});

export const downloadBlob = (blob: Blob, title: string) => {
	const url = window.URL.createObjectURL(blob);
	const link = document.createElement('a');

	link.href = url;
	link.download = title;

	link.click();
};

export const pad = (val: string, digits: number) =>
	([...Array(digits).keys()].map(() => '0').join('') + val).slice(-digits);

export const parseToHex = (val: number, digits: number) =>
	pad(val.toString(16), digits).toUpperCase();

export const parseHexValue = (val: string) => parseInt(`0x${val}`);

export const parseHexArray = <T extends unknown>(
	arr: string,
	length: number,
	parse: (item: string) => T
) =>
	[...Array(arr.length / length).keys()]
		.map(k => k * length)
		.map(k => arr.slice(k, k + length))
		.map(parse);

export const FocusAnimationKeyframes = (t: Theme) => keyframes`
	8% {
		transform: translateX(${t.spacing(2)});
	}
	25% {
		transform: translateX(${t.spacing(-2)});
	}
	41% {
		transform: translateX(${t.spacing(1)});
	}
	58% {
		transform: translateX(${t.spacing(-1)});
	}
	75% {
		transform: translateX(${t.spacing(0.5)});
	}
	91% {
		transform: translateX(${t.spacing(-0.5)});
	}
`;

export const FocusAnimation = (t: Theme) =>
	`${FocusAnimationKeyframes(t)} 1s ease-in-out`;

export const ScaleAnimationKeyframes = keyframes`
	17% {
		transform: scale(0.85);
	}
	33% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.925);
	}
	66% {
		transform: scale(1);
	}
	83% {
		transform: scale(0.975);
	}
`;

export const ScaleAnimation = `${ScaleAnimationKeyframes} 1s ease-in-out`;

export const PointingHand: SxProps<Theme> = {
	':hover::after,:focus-visible::after': {
		content: '""',
		position: 'absolute',
		backgroundImage: `url(${pointingFinger})`,
		backgroundSize: 'cover',
		width: t => t.spacing(119),
		height: t => t.spacing(296),
		top: '50%',
		left: '50%',
		zIndex: 1,
		transform: 'translate(-100%, 2%) rotate(25deg)',
		pointerEvents: 'none'
	}
};

const TileToSprite = [
	[0xf0, 0xf1],
	[0x00, 0x08],
	[0x08, 0x10],
	[0x10, 0x14],
	[0x14, 0x18],
	[0x18, 0x1c],
	[0x1c, 0x20],
	[0x20, 0x22],
	[0x22, 0x24],
	[0x24, 0x26],
	[0x26, 0x28],
	[0x28, 0x2a],
	[0x2a, 0x2c],
	[0x2c, 0x2e],
	[0x2e, 0x30],
	[0x30, 0x31],
	[0x31, 0x32],
	[0x32, 0x33],
	[0x33, 0x34],
	[0x34, 0x35],
	[0x35, 0x36],
	[0x36, 0x37],
	[0x37, 0x38],
	[0x38, 0x39],
	[0x39, 0x3a],
	[0x3a, 0x3b],
	[0x3b, 0x3c],
	[0x3c, 0x3d]
];

export const mapTileToSprite = (v: number) => {
	const s = TileToSprite.findIndex(i => v >= i[0] && v < i[1]);
	return s === -1 ? 15 : s;
};

export const mapWalkedToSprite = (v: number) => {
	const s = TileToSprite.findIndex(i => v >= i[0] && v < i[1]);
	return s === -1 || s === 0 ? undefined : s - 1;
};
