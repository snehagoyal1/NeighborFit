// Simple scoring based on weights
function calculateScore(userPrefs, neighborhood) {
  let score = 0;

  if (userPrefs.budget >= neighborhood.rent) score += 1;
  score += (neighborhood.safety * userPrefs.importance.safety);
  score += (neighborhood.nightlife * userPrefs.importance.nightlife);
  score += (neighborhood.walkability * userPrefs.importance.walkability);
  score += (neighborhood.parks * userPrefs.importance.parks);
  score += (neighborhood.schools * userPrefs.importance.schools);

  return score;
}

module.exports = { calculateScore };
