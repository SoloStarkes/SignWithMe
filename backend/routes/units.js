const express = require('express');
const Unit = require('../models/unit');
const { authUser } = require('../utils/authUtils');
const router = express.Router({ mergeParams: true });

// Get data for a specific unit
router.get('/get-unit', async (req, res) => {
  const { unitId, userName } = req.query; // Extract query parameters

  try {
    console.log("Request Query:", req.query); // Log incoming query params

    // Find the unit by unitId and userName
    const unit = await Unit.findOne({ unitId, userName });

    if (!unit) {
      console.log("Unit not found for unitId:", unitId, "and userName:", userName);
      return res.status(404).json({ success: false, message: "Unit not found" });
    }

    // Log the unit found in the database
    console.log("Unit found:", unit);

    res.status(200).json({ success: true, unit });
  } catch (error) {
    console.error("Error fetching unit:", error);
    res.status(500).json({ success: false, message: "Error retrieving unit progress", error });
  }
});

// Get all units with progress for the logged-in user
router.get('/get-units', async (req, res) => {
  try {
    const userName = req.query.userName;
    const units = await Unit.find({ userName });
    return res.status(200).json(units);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Error retrieving units' });
  }
});


// Update progress for a specific unit
router.patch("/update-unit", async (req, res) => {
  const { unitId, userName, exam_complete } = req.body;

  try {
    // Log the request body for debugging
    console.log("Request Body:", req.body);

    // Find and update the unit
    const updatedUnit = await Unit.findOneAndUpdate(
      { unitId, userName },
      { exam_complete }, // Field to update
      { new: true } // Return the updated document
    );

    if (!updatedUnit) {
      console.log("Unit not found for unitId:", unitId, "and userName:", userName);
      return res.status(404).json({ message: "Unit not found" });
    }

    // Log the updated unit
    console.log("Updated Unit:", updatedUnit);

    res.status(200).json({ message: "Unit updated successfully", updatedUnit });
  } catch (error) {
    console.error("Error updating unit:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


// // Update progress for a specific unit
// router.patch('/:unitId', authUser, async (req, res) => {
//   try {
//     const { exam_complete } = req.body;
//     const unit = await Unit.findOneAndUpdate(
//       { unitId: req.params.unitId, userName: req.session.userId },
//       { exam_complete },
//       { new: true }
//     );
//     if (!unit) {
//       return res.status(404).json({ success: false, message: 'Unit not found' });
//     }
//     res.status(200).json({ success: true, message: 'Progress updated', unit });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error updating progress' });
//   }
// });

module.exports = router;
