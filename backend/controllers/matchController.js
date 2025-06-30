const Neighborhood = require('../models/Neighborhood');
const { calculateScore } = require('../services/matchService');

exports.getMatches = async (req, res) => {
  const userPrefs = req.body;

  // ✅ Input validation
  if (!userPrefs.city || typeof userPrefs.city !== 'string') {
    return res.status(400).json({ error: 'City is required' });
  }

  if (
    typeof userPrefs.budget !== 'number' ||
    !userPrefs.importance ||
    Object.values(userPrefs.importance).some(v => typeof v !== 'number')
  ) {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  try {
    // ✅ Fetch neighborhoods from selected city
    let neighborhoods = await Neighborhood.find({ city: userPrefs.city });

    // ✅ Score each neighborhood
    const scored = neighborhoods.map(n => ({
      ...n.toObject(),
      score: calculateScore(userPrefs, n)
    }));

    // ✅ Sort by score descending
    scored.sort((a, b) => b.score - a.score);

    // ✅ Return top 5 results
    res.json(scored.slice(0, 5));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to calculate matches' });
  }
};
