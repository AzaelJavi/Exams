const express = require("express");
const persons = require("./router/persons");
const familyTree = require("./router/familyTree");
module.exports = function (app) {
	app.use(express.json());
	app.use("/api/persons", persons);
	app.use("/api/family", familyTree);
};
