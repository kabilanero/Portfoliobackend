const Review = require('../models/Reviews');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { name, text, stars } = req.body;
    if (!name || !text || !stars) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const review = new Review({ name, text, stars });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
