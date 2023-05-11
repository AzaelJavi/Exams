module.exports = function createPerson(familyTree) {
	const newPerson = familyTree.createPerson(1, {
		firstName: "Mark",
		lastName: "Doe",
		sex: "Male",
		birthDate: "1990-03-15",
		age: 33,
	});
	console.log("Created person:", newPerson);
};
