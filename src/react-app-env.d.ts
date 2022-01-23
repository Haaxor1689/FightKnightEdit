/// <reference types="react-scripts" />

declare module 'tex-linebreak' {
	export type LayoutItem = {
		width: number;
	} & (
		| {
				type: 'box';
				text: string;
		  }
		| {
				type: 'glue';
				text: string;
				stretch: number;
				shrink: number;
		  }
		| {
				type: 'penalty';
				cost: number;
				flagged: boolean;
		  }
	);

	export function layoutItemsFromString(
		text: string,
		measureText: (text: string) => number
	): LayoutItem[];
}
