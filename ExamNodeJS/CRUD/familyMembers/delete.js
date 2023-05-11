module.exports = function deletePerson(familyTree) {
	const deletedPerson = familyTree.deletePerson(1, 2);
	console.log("Deleted person:", deletedPerson);
};
