export const barData = [
	{
		timePeriod: "Oct. 2019 to\nJune 2021",
		party: "complainant",
		male: 6,
		female: 6,
	},
	{
		timePeriod: "Oct. 2019 to\nJune 2021",
		party: "respondent",
		male: 8,
		female: 4,
	},
	{
		timePeriod: "June 2021 to Nov. 2021;\nDec. 2021 to May 2022",
		party: "complainant",
		male: 4,
		female: 24,
	},
	{
		timePeriod: "June 2021 to Nov. 2021;\nDec. 2021 to May 2022",
		party: "respondent",
		male: 12,
		female: 13,
	},
	{
		timePeriod: "June 2022 to\nNov. 2022",
		party: "complainant",
		male: 0,
		female: 1,
	},
	{
		timePeriod: "June 2022 to\nNov. 2022",
		party: "respondent",
		male: 1,
		female: 0,
	},
	{
		timePeriod: "Dec.2022 to\nMay 2023",
		party: "complainant",
		male: 1,
		female: 2,
	},
	{
		timePeriod: "Dec.2022 to\nMay 2023",
		party: "respondent",
		male: 3,
		female: 0,
	},
];

export const pieData = {
	university: [
		{
			timePeriod: "Oct.2019\nto June 2021",
			idKey: "oct2019-june2021",
			counts: {
				Major: 12,
				Minor: 0,
				Moderate: 0,
				"Minor and Moderate": 0,
				"Major and Moderate": 0,
			},
		},
		{
			timePeriod: "June 2021 to Nov. 2021;\nDec. 2021 to May 2022",
			idKey: "june2021-may2022",
			counts: {
				Major: 6,
				Minor: 2,
				Moderate: 0,
				"Minor and Moderate": 1,
				"Major and Moderate": 1,
			},
		},
		{
			timePeriod: "June 2022\nto Nov. 2022",
			idKey: "june2022-nov2022",
			counts: {
				Major: 0,
				Minor: 0,
				Moderate: 1,
				"Minor and Moderate": 0,
				"Major and Moderate": 0,
			},
		},
		{
			timePeriod: "Dec. 2022\nto May 2023",
			idKey: "dec2022-may2023",
			counts: {
				Major: 0,
				Minor: 0,
				Moderate: 1,
				"Minor and Moderate": 0,
				"Major and Moderate": 1,
			},
		},
	],
	school: [
		{
			timePeriod: "June 2021 to Nov. 2021;\nDec.2021 to May 2022",
			idKey: "june2021-may2022",
			counts: {
				Major: 3,
				Minor: 3,
				Moderate: 6,
				"Minor, Moderate, and Major": 4,
				"Moderate and Major": 1,
			},
		},
		{
			timePeriod: "June 2022\nto Nov. 2022",
			idKey: "june2022-nov2022",
			counts: {
				Major: 3,
				Minor: 0,
				Moderate: 0,
				"Minor, Moderate, and Major": 2,
				"Moderate and Major": 0,
			},
		},
		{
			timePeriod: "Dec. 2022\nto May 2023",
			idKey: "dec2022-may2023",
			counts: {
				Major: 4,
				Minor: 8,
				Moderate: 0,
				"Minor, Moderate, and Major": 1,
				"Moderate and Major": 0,
			},
		},
	],
};

export const pieLegend = {
	university: [
		{
			category: "Major",
			color: "#0045f0",
		},
		{
			category: "Moderate",
			color: "#0f286a",
		},
		{
			category: "Minor",
			color: "#9eb7ff",
		},
		{
			category: "Minor and Moderate",
			color: "#f4ff60",
		},
		{
			category: "Major and Moderate",
			color: "#f062d1",
		},
	],
	school: [
		{
			category: "Major",
			color: "#0045f0",
		},
		{
			category: "Moderate",
			color: "#0f286a",
		},
		{
			category: "Minor",
			color: "#9eb7ff",
		},
		{
			category: "Minor, Moderate,\nand Major",
			color: "#f4ff60",
		},
		{
			category: "Major and Moderate",
			color: "#f062d1",
		},
	],
};
