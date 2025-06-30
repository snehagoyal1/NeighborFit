const form = document.getElementById('matchForm');
const resultsDiv = document.getElementById('results');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  resultsDiv.innerHTML = '';
  loader.classList.remove('hidden');

  const formData = new FormData(form);
const city = formData.get('city');
const budget = Number(formData.get('budget'));

  const importance = {
    safety: Number(formData.get('safety')),
    nightlife: Number(formData.get('nightlife')),
    parks: Number(formData.get('parks')),
    walkability: Number(formData.get('walkability')),
    schools: Number(formData.get('schools'))
  };

  // ✅ Input validation
  const importanceValues = Object.values(importance);
  if (
    isNaN(budget) || budget <= 0 ||
    importanceValues.some(v => isNaN(v) || v < 1 || v > 5)
  ) {
    loader.classList.add('hidden');
    resultsDiv.innerHTML = `<p style="color:red;">❌ Please enter a valid budget and select all weights between 1 and 5.</p>`;
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, budget, importance })

    });

    const matches = await res.json();

    loader.classList.add('hidden');

    if (!Array.isArray(matches) || matches.length === 0) {
      resultsDiv.innerHTML = `<p style="color:red;">⚠️ No neighborhoods match your preferences. Try adjusting your budget or weights.</p>`;
      return;
    }

    // ✅ Display results
    resultsDiv.innerHTML = `
      <h2>Top Matches</h2>
      <ul>
        ${matches.map(n => `
          <li class="neighborhood-card">
            <h3>${n.name} (${n.city})</h3>
            <canvas id="chart-${n._id}" width="300" height="300"></canvas>
            <p><i class="fa-solid fa-shield-halved"></i> Safety: ${n.safety}</p>
            <p><i class="fa-solid fa-martini-glass-citrus"></i> Nightlife: ${n.nightlife}</p>
            <p><i class="fa-solid fa-tree"></i> Parks: ${n.parks}</p>
            <p><i class="fa-solid fa-person-walking"></i> Walkability: ${n.walkability}</p>
            <p><i class="fa-solid fa-school"></i> Schools: ${n.schools}</p>
            <p><i class="fa-solid fa-indian-rupee-sign"></i> Avg Rent: ₹${n.rent}</p>
          </li>
        `).join('')}
      </ul>
    `;

    // ✅ Create radar charts for each result
    matches.forEach(n => {
      const ctx = document.getElementById(`chart-${n._id}`).getContext('2d');
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Safety', 'Nightlife', 'Parks', 'Walkability', 'Schools'],
          datasets: [{
            label: 'Match Scores',
            data: [n.safety, n.nightlife, n.parks, n.walkability, n.schools],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: { r: { suggestedMin: 0, suggestedMax: 10 } },
          plugins: { legend: { display: false } }
        }
      });
    });

    form.reset(); // ✅ Reset form after submit

  } catch (err) {
    loader.classList.add('hidden');
    resultsDiv.innerHTML = `<p style="color:red;">❌ Error fetching matches. Please try again.</p>`;
    console.error(err);
  }
});
