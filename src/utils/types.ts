import { z } from 'zod';

import { parseHexArray, parseHexValue, parseToHex } from 'utils';

// Number value
const NumberValueSchema = z
	.string()
	.regex(/^-?\d+\.\d+$/)
	.transform(v => Number(v));
const RawNumberValueSchema = (base = z.number()) =>
	base.transform(v => v.toFixed(6));

// Matrix value
const MatrixValueSchema = z
	.string()
	.regex(/^([0-9A-F]{24})+$/)
	.transform(v => {
		const [meta, ...arr] = parseHexArray(v, 24, v => v);
		const width = parseHexValue(meta.slice(4, 10));
		const height = parseHexValue(meta.slice(12, 18));
		return {
			width,
			height,
			data: arr.reduce<{ [x: number]: { [y: number]: string } }>(
				(obj, t, i) => {
					const x = Math.floor(i / width);
					const y = i % width;
					return parseHexValue(t)
						? { ...obj, [x]: { ...obj[x], [y]: t } }
						: obj;
				},
				{}
			)
		};
	});
const RawMatrixValueSchema = z
	.object({
		width: z.number(),
		height: z.number(),
		data: z.record(z.record(z.string()))
	})
	.transform(v =>
		[
			`5B02${parseToHex(v.width, 6)}00${parseToHex(v.height, 6)}000000`,
			...[...Array(v.width * v.height).keys()].map(
				i => v.data[Math.floor(i / v.width)]?.[i % v.width] ?? parseToHex(0, 24)
			)
		].join('')
	);

export type Matrix = z.infer<typeof MatrixValueSchema>;

// Number
const NumberSchema = z.object({ 0: NumberValueSchema }).transform(v => v[0]);
const RawNumberSchema = (base = z.number()) =>
	RawNumberValueSchema(base).transform(v => ({ 0: v }));

// Matrix
const MatrixSchema = z.object({ 0: MatrixValueSchema }).transform(v => v?.[0]);
const RawMatrixSchema = RawMatrixValueSchema.transform(v => ({ 0: v }));

const NumberArraySchema = z
	.record(NumberValueSchema)
	.transform(v =>
		Object.values(v).reduceRight<number[]>(
			(arr, v) => (arr.length === 0 && !v ? [] : [v, ...arr]),
			[]
		)
	);
const RawNumberArraySchema = (length = 99, base = z.number()) =>
	z
		.array(RawNumberValueSchema(base))
		.transform(v =>
			[...Array(length).keys()].reduce<{ [key: number]: string }>(
				(obj, i) => ({ ...obj, [i]: v[i] ?? Number(0).toFixed(6) }),
				{}
			)
		);

const MatrixArraySchema = z.record(MatrixValueSchema);
const RawMatrixArraySchema = z.record(RawMatrixValueSchema);

export const SaveFileSchema = z
	.object({
		consumable_slot_count: NumberSchema,
		consumables: NumberArraySchema,
		equip_gauntlet: NumberSchema,
		hp_slot_count: NumberSchema,
		inn_que_trigger: NumberArraySchema,
		inv_monster: NumberArraySchema,
		inv_quest: NumberArraySchema,
		lvlslot_auto: MatrixSchema.optional(),
		mapdun: MatrixArraySchema,
		mapwalked: MatrixArraySchema,
		npc_partsgiven: MatrixSchema.optional(),
		npc_triggers: MatrixSchema.optional(),
		save: z.object({
			0: NumberValueSchema,
			1: NumberValueSchema,
			2: NumberValueSchema,
			3: NumberValueSchema,
			fisher: NumberValueSchema,
			fisher_price: NumberValueSchema,
			plus: NumberValueSchema
		}),
		shop_gauntlet: NumberArraySchema,
		shop_monster: NumberArraySchema,
		shop_potion_recipe: NumberArraySchema,
		shop_potions: NumberArraySchema,
		shop_special: NumberArraySchema,
		special_inv: NumberArraySchema,
		specialatk_slot_count: NumberSchema,
		specialcharge_slot_count: NumberSchema,
		triggers: MatrixSchema.optional()
	})
	.strict();

export type SaveFile = z.infer<typeof SaveFileSchema>;

export const RawSaveFileSchema = z
	.object({
		consumable_slot_count: RawNumberSchema(z.number().max(8)),
		consumables: RawNumberArraySchema(7),
		equip_gauntlet: RawNumberSchema(),
		hp_slot_count: RawNumberSchema(),
		inn_que_trigger: RawNumberArraySchema(),
		inv_monster: RawNumberArraySchema(),
		inv_quest: RawNumberArraySchema(),
		lvlslot_auto: RawMatrixSchema.optional(),
		mapdun: RawMatrixArraySchema,
		mapwalked: RawMatrixArraySchema,
		npc_partsgiven: RawMatrixSchema.optional(),
		npc_triggers: RawMatrixSchema.optional(),
		save: z.object({
			0: RawNumberValueSchema(),
			1: RawNumberValueSchema(),
			2: RawNumberValueSchema(),
			3: RawNumberValueSchema(),
			fisher: RawNumberValueSchema(),
			fisher_price: RawNumberValueSchema(),
			plus: RawNumberValueSchema()
		}),
		shop_gauntlet: RawNumberArraySchema(),
		shop_monster: RawNumberArraySchema(),
		shop_potion_recipe: RawNumberArraySchema(),
		shop_potions: RawNumberArraySchema(),
		shop_special: RawNumberArraySchema(),
		special_inv: RawNumberArraySchema(7),
		specialatk_slot_count: RawNumberSchema(),
		specialcharge_slot_count: RawNumberSchema(),
		triggers: RawMatrixSchema.optional()
	})
	.strict();
