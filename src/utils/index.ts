import { keyframes } from '@emotion/react';
import { isUndefined } from 'lodash-es';

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

export const FocusAnimation = keyframes`
	8% {
		transform: translateX(5%);
	}
	25% {
		transform: translateX(-5%);
	}
	41% {
		transform: translateX(3%);
	}
	58% {
		transform: translateX(-3%);
	}
	75% {
		transform: translateX(2%);
	}
	91% {
		transform: translateX(-2%);
	}
`;