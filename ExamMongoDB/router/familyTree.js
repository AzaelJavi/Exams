const express = require("express");
const { Family } = require("../models/familyTree-model");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { familyName } = req.body;

		const family = new Family({ familyName });

		await family.save();

		res.status(201).json({ message: "Family created successfully", family });
	} catch (error) {
		res.status(500).json({ error: "Error creating a family" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const family = await Family.findById(req.params.id).populate({
			path: "familyTree",
			populate: [
				{ path: "children", model: "Person", select: "firstName" },
				{ path: "spouse", model: "Person", select: "firstName" },
			],

			options: {
				sort: { age: -1 },
			},
		});

		if (!family) return res.status(404).json({ error: "Family not found" });

		res
			.status(200)
			.json({ message: `Family Tree of ${family.familyName}`, family });
	} catch (error) {
		res.status(500).json({ error: "Error retrieving family" });
	}
});

module.exports = router;
