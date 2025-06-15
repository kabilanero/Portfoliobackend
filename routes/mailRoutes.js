const express = require('express');
const router = express.Router();
const { sendMail } = require('../controllers/mailController');
const { sendenquiry }=require('../controllers/locationForm');
const reviewController = require('../controllers/reviewController')

router.post('/submit', sendMail);
router.post('/querybusinessideas', sendenquiry);
router.post('/postreview', reviewController.createReview)
router.get('/reviews', reviewController.getAllReviews)
module.exports = router;
