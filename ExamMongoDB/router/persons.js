const express = require("express");
const { Person } = require("../models/person-model");
const { Family } = require("../models/familyTree-model");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { firstName, lastName, sex, birthDate, age, spouse, children } =
			req.body;

		const person = new Person({ firstName, lastName, sex, birthDate, age });

		await person.save();

		if (spouse) {
			const spousePerson = await Person.findById(spouse);
			if (!spousePerson) {
				return res.status(400).json({ error: "Spouse not found" });
			}
			person.spouse = spouse;
			spousePerson.spouse = person._id;
			await spousePerson.save();
		}

		if (children && children.length > 0) {
			const childPersons = await Person.find({ _id: { $in: children } });
			if (childPersons.length !== children.length) {
				return res
					.status(400)
					.json({ error: "One or more children not found" });
			}
			person.children = children;
			childPersons.forEach((child) => {
				child.spouse = null; // Remove any existing spouse for the children
				child.save();
			});
		}

		const familyId = await Family.findById(req.body.familyId);
		const family = await Family.findOne(familyId);
		family.familyTree.push(person);
		await family.save();

		res.status(201).json({ message: "Member created successfully", person });
	} catch (error) {
		res.status(500).json({ error: "Error creating person" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const person = await Person.findById(req.params.id)
			.populate("spouse")
			.populate("children");

		if (!person) return res.status(404).json({ error: "Person not found" });

		res.status(200).json(person);
	} catch (error) {
		res.status(500).json({ error: "Error retrieving person" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const personId = req.params.id;
		const { firstName, lastName, sex, birthDate, age, spouse, children } =
			req.body;

		// Find the person by ID
		const person = await Person.findById(personId);

		if (!person) return res.status(404).json({ error: "Person not found" });

		// Update the fields if provided in the request body
		if (firstName) person.firstName = firstName;
		if (lastName) person.lastName = lastName;
		if (sex) person.sex = sex;
		if (birthDate) person.birthDate = birthDate;
		if (age) person.age = age;
		if (spouse) person.spouse = spouse;
		if (children) person.children = children;

		// Save the updated person
		const updatedPerson = await person.save();

		res
			.status(200)
			.json({ message: "Person updated successfully", person: updatedPerson });
	} catch (error) {
		res.status(500).json({ error: "Error updating person" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const personId = req.params.id;

		// Find the person by ID
		const person = await Person.findById(personId);

		if (!person) return res.status(404).json({ error: "Person not found" });

		await Person.deleteOne({ _id: personId });

		res.status(200).json({ message: "Person deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Error deleting person" });
	}
});
module.exports = router;
