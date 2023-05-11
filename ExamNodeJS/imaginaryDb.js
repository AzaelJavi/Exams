const persons = [
	{
		familyId: 1,
		familyTree: [
			{
				id: 1,
				firstName: "John",
				lastName: "Smith",
				sex: "Male",
				birthDate: "1970-05-31",
				age: 52,
				spouse: {
					id: 2,
					firstName: "Regina",
					lastName: "Smith",
				},
				children: [
					{
						id: 3,
						firstName: "Riria",
						lastName: "Smith",
					},
				],
			},
			{
				id: 2,
				firstName: "Regina",
				lastName: "Smith",
				sex: "Female",
				birthDate: "1970-06-15",
				age: 52,
				spouse: {
					id: 1,
					firstName: "Jack",
					lastName: "Doe",
				},
				children: [
					{
						id: 3,
						firstName: "Riria",
						lastName: "Smith",
					},
				],
			},
			{
				id: 3,
				firstName: "Riria",
				lastName: "Smith",
				sex: "Female",
				birthDate: "2000-01-01",
				age: 23,
			},
		],
	},
	{
		familyId: 2,
		familyTree: [
			{
				id: 1,
				firstName: "Jack",
				lastName: "Doe",
				sex: "Male",
				birthDate: "1970-05-31",
				age: 52,
				spouse: {
					id: 2,
					firstName: "Mary",
					lastName: "Doe",
				},
				children: [
					{
						id: 3,
						firstName: "Murphy",
						lastName: "Doe",
					},
					{
						id: 4,
						firstName: "Amelia",
						lastName: "Doe",
					},
				],
			},
			{
				id: 2,
				firstName: "Mary",
				lastName: "Doe",
				sex: "Female",
				birthDate: "1970-06-15",
				age: 52,
				spouse: {
					id: 1,
					firstName: "Jack",
					lastName: "Doe",
				},
				children: [
					{
						id: 3,
						firstName: "Murphy",
						lastName: "Doe",
					},
					{
						id: 4,
						firstName: "Amelia",
						lastName: "Doe",
					},
				],
			},
			{
				id: 3,
				firstName: "Murphy",
				lastName: "Doe",
				sex: "Male",
				birthDate: "2000-01-01",
				age: 23,
			},
			{
				id: 4,
				firstName: "Amelia",
				lastName: "Doe",
				sex: "Female",
				birthDate: "2000-01-01",
				age: 23,
			},
		],
	},
];

module.exports = persons;
