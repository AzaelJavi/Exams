const mongoose = require("mongoose");
const { Person } = require("./person-model");

const familySchema = new mongoose.Schema({
	familyName: {
		type: String,
		min: 3,
		max: 50,
	},
	familyTree: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
		default: [],
	},
});

const Family = mongoose.model("Family", familySchema);

exports.Family = Family;
