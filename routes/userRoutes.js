const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsListController,
  bookAppointmentController,
  bookingAvailabilityControllers,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// Notification Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// Delete Notification Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET ALL DOC
router.get("/getAllDoctorsList", authMiddleware, getAllDoctorsListController);

// Book Appoinment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// Booking Avaliability
router.post(
  "/booking-avalibility",
  authMiddleware,
  bookingAvailabilityControllers
);

// Appointments List
router.get('/user-appointments',authMiddleware,userAppointmentsController)

module.exports = router;
