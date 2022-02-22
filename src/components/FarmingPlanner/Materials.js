import React from 'react';

const characterLevelUp = [
	{ level: 1, materials: [] },
	{ level: 20, materials: [{ mora: 19495 }, { expBooks: 5 }] },
	{
		level: 21,
		materials: [
			{ mora: 42470 },
			{ expBooks: 6 },
			{ localSpeciality: 3 },
			{ commonMaterial1: 3 },
			{ sliver: 1 },
		],
	},
	{
		level: 40,
		materials: [
			{ mora: 155930 },
			{ expBooks: 34 },
			{ localSpeciality: 3 },
			{ commonMaterial1: 3 },
			{ sliver: 1 },
		],
	},
	{
		level: 41,
		materials: [
			{ mora: 205190 },
			{ expBooks: 37 },
			{ localSpeciality: 13 },
			{ commonMaterial1: 18 },
			{ sliver: 1 },
			{ fragments: 3 },
			{ bossAscensionMaterial: 2 },
		],
	},
	{
		level: 50,
		materials: [
			{ mora: 312275 },
			{ expBooks: 64 },
			{ localSpeciality: 13 },
			{ commonMaterial1: 18 },
			{ sliver: 1 },
			{ fragments: 3 },
			{ bossAscensionMaterial: 2 },
		],
	},
	{
		level: 51,
		materials: [
			{ mora: 386370 },
			{ expBooks: 67 },
			{ localSpeciality: 33 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 12 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ bossAscensionMaterial: 6 },
		],
	},
	{
		level: 60,
		materials: [
			{ mora: 543730 },
			{ expBooks: 106 },
			{ localSpeciality: 33 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 12 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ bossAscensionMaterial: 6 },
		],
	},
	{
		level: 61,
		materials: [
			{ mora: 643905 },
			{ expBooks: 111 },
			{ localSpeciality: 63 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 3 },
			{ bossAscensionMaterial: 14 },
		],
	},
	{
		level: 70,
		materials: [
			{ mora: 863660 },
			{ expBooks: 166 },
			{ localSpeciality: 63 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 3 },
			{ bossAscensionMaterial: 14 },
		],
	},
	{
		level: 71,
		materials: [
			{ mora: 991295 },
			{ expBooks: 173 },
			{ localSpeciality: 108 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ commonMaterial3: 12 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 9 },
			{ bossAscensionMaterial: 26 },
		],
	},
	{
		level: 80,
		materials: [
			{ mora: 1286905 },
			{ expBooks: 247 },
			{ localSpeciality: 108 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ commonMaterial3: 12 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 9 },
			{ bossAscensionMaterial: 26 },
		],
	},
	{
		level: 81,
		materials: [
			{ mora: 1443540 },
			{ expBooks: 256 },
			{ localSpeciality: 168 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ commonMaterial3: 36 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 9 },
			{ gemstones: 6 },
			{ bossAscensionMaterial: 46 },
		],
	},
	{
		level: 90,
		materials: [
			{ mora: 2092530 },
			{ expBooks: 419 },
			{ localSpeciality: 168 },
			{ commonMaterial1: 18 },
			{ commonMaterial2: 30 },
			{ commonMaterial3: 36 },
			{ sliver: 1 },
			{ fragments: 9 },
			{ chunks: 9 },
			{ gemstones: 6 },
			{ bossAscensionMaterial: 46 },
		],
	},
];

const talentLevelUp = [
	{ level: 1, materials: [] },
	{
		level: 2,
		materials: [{ mora: 12500, bronzeTalentBooks: 3, commonMaterial1: 6 }],
	},
	{
		level: 3,
		materials: [
			{
				mora: 30000,
				bronzeTalentBooks: 3,
				silverTalentBooks: 2,
				commonMaterial1: 6,
				commonMaterial2: 3,
			},
		],
	},
	{
		level: 4,
		materials: [
			{
				mora: 55000,
				bronzeTalentBooks: 3,
				silverTalentBooks: 6,
				commonMaterial1: 6,
				commonMaterial2: 7,
			},
		],
	},
	{
		level: 5,
		materials: [
			{
				mora: 85000,
				bronzeTalentBooks: 3,
				silverTalentBooks: 12,
				commonMaterial1: 6,
				commonMaterial2: 13,
			},
		],
	},
	{
		level: 6,
		materials: [
			{
				mora: 122500,
				bronzeTalentBooks: 3,
				silverTalentBooks: 21,
				commonMaterial1: 6,
				commonMaterial2: 22,
			},
		],
	},
	{
		level: 7,
		materials: [
			{
				mora: 242500,
				bronzeTalentBooks: 3,
				silverTalentBooks: 21,
				goldTalentBooks: 4,
				commonMaterial1: 6,
				commonMaterial2: 22,
				commonMaterial3: 4,
				bossMaterial: 1,
			},
		],
	},
	{
		level: 8,
		materials: [
			{
				mora: 502500,
				bronzeTalentBooks: 3,
				silverTalentBooks: 21,
				goldTalentBooks: 10,
				commonMaterial1: 6,
				commonMaterial2: 22,
				commonMaterial3: 10,
				bossMaterial: 2,
			},
		],
	},
	{
		level: 9,
		materials: [
			{
				mora: 952500,
				bronzeTalentBooks: 3,
				silverTalentBooks: 21,
				goldTalentBooks: 22,
				commonMaterial1: 6,
				commonMaterial2: 22,
				commonMaterial3: 19,
				bossMaterial: 4,
			},
		],
	},
	{
		level: 10,
		materials: [
			{
				mora: 1652500,
				bronzeTalentBooks: 3,
				silverTalentBooks: 21,
				goldTalentBooks: 38,
				commonMaterial1: 6,
				commonMaterial2: 22,
				commonMaterial3: 31,
				bossMaterial: 6,
			},
		],
	},
];

// console.log(
// 	talentLevelUp[8].materials[0].mora - talentLevelUp[7].materials[0].mora
// );

const Materials = () => {
	return <div></div>;
};

export default Materials;
