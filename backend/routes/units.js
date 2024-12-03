const express = require('express');
const Unit = require('../models/unit');
const { authUser } = require('../utils/authUtils');
const router = express.Router({ mergeParams: true });

// Get all units with progress for the logged-in user
router.get('/get-units', async (req, res) => {
  try {
    const units = await Unit.find();
    return res.status(200).json(units);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Error retrieving units' });
  }
});

// // Get progress for a specific unit
// router.get('/:unitId', authUser, async (req, res) => {
//   try {
//     const unit = await Unit.findOne({ unitId: req.params.unitId, userName: req.session.userId });
//     if (!unit) {
//       return res.status(404).json({ success: false, message: 'Unit not found' });
//     }
//     res.status(200).json(unit);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Error retrieving unit progress' });
//   }
// });

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
