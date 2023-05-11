class FamilyTree {
	constructor(persons) {
		this.persons = persons;
	}

	createPerson(familyId, personData) {
		const family = this.getFamilyById(familyId);
		if (family) {
			const newPerson = {
				id: family.familyTree.length + 1,
				...personData,
			};
			family.familyTree.push(newPerson);
			return newPerson;
		}
		return null;
	}

	readPerson(familyId, personId) {
		const family = this.getFamilyById(familyId);
		if (family)
			return family.familyTree.find((person) => person.id === personId) || null;

		return null;
	}

	readFamilyTree(familyId) {
		const family = this.getFamilyById(familyId);
		if (family) return family.familyTree;

		return null;
	}

	updatePerson(familyId, personId, updatedData) {
		const family = this.getFamilyById(familyId);
		if (family) {
			const person = family.familyTree.find((person) => person.id === personId);
			if (person) {
				Object.assign(person, updatedData);
				return person;
			}
		}
		return null;
	}

	deletePerson(familyId, personId) {
		const family = this.getFamilyById(familyId);
		if (family) {
			const index = family.familyTree.findIndex(
				(person) => person.id === personId
			);
			if (index !== -1) {
				const deletedPerson = family.familyTree.splice(index, 1);
				return deletedPerson[0];
			}
		}
		return null;
	}

	getFamilyById(familyId) {
		return this.persons.find((family) => family.familyId === familyId) || null;
	}
}

module.exports = FamilyTree;
