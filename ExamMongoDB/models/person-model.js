const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	sex: String,
	birthDate: String,
	age: Number,
	spouse: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
	children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
});

const Person = mongoose.model("Person", personSchema);

exports.personSchema = personSchema;
exports.Person = Person;
