module.exports = function updatePerson(familyTree) {
	const updatedPerson = familyTree.updatePerson(1, 3, { firstName: "Rira" });
	console.log("Updated person:", updatedPerson);
};
