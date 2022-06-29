/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField as useFinalField } from 'react-final-form';

type RecursiveKeyOf<TObj extends Record<string, unknown>> = {
	[TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
		TObj[TKey],
		`${TKey}`
	>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends Record<string, unknown>> = {
	[TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
		TObj[TKey],
		`['${TKey}']` | `.${TKey}`
	>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
	TValue,
	Text extends string
> = TValue extends any[]
	? Text
	: TValue extends Record<string, unknown>
	? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
	: Text;

type AccessKey<
	TObj extends Record<string, any>,
	Key extends string
> = Key extends `${infer U}.${infer V}` ? AccessKey<TObj[U], V> : TObj[Key];

const useField = <
	T extends Record<string, unknown>,
	K extends RecursiveKeyOf<T>
>(
	name: K
) => {
	const {
		input: { value, onChange }
	} = useFinalField<AccessKey<T, K>>(name as string, {
		subscription: { value: true }
	});
	return [
		value,
		(v: AccessKey<T, K>) => onChange({ target: { value: v } })
	] as const;
};

export default useField;
