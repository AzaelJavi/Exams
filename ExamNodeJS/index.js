const FamilyTree = require("./familyTree");
const persons = require("./imaginaryDb");

const famillyTree = new FamilyTree(persons);

// Family Members
const createPerson = require("./CRUD/familyMembers/create");
const readPerson = require("./CRUD/familyMembers/read");
const updatePerson = require("./CRUD/familyMembers/update");
const deletePerson = require("./CRUD/familyMembers/delete");

// CREATE
// createPerson(famillyTree);

// READ
// readPerson(famillyTree);

// UPDATE
// updatePerson(famillyTree);

// DELETE
deletePerson(famillyTree);

// Family Tree

const readFamilyTree = require("./CRUD/familyTree/read");

// READ
// readFamilyTree(famillyTree);
