const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController, updateProfileController, getDoctorById, doctorAppointmentController, updateStatusController } = require("../controllers/doctorCtrl");
const router = express.Router();

// POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

// POST GET SINGLE DOC INFO
router.post('/getDoctorById',authMiddleware,getDoctorById);

// GET Appointments
router.get('/doctor-appointments',authMiddleware,doctorAppointmentController)

// POST update status
router.post('/update-status',authMiddleware,updateStatusController);

module.exports = router;
