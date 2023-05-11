module.exports = function readFamilyTree(familyTree) {
	const family = familyTree.readFamilyTree(1);
	console.log("Read person:", JSON.stringify(family, null, 2));
};
