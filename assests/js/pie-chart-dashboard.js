const ctxReward = document.getElementById('rewardsChart').getContext('2d');
new Chart(ctxReward, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [65, 15, 10, 10],
            backgroundColor: ['#7168EE', '#46B277', '#963B68', '#01D4FF'],
            borderWidth: 0,
            circumference: 180,
            rotation: 270,
            borderRadius: 3
        }]
    },
    options: {
        cutout: '75%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
});

const ctxVolume = document.getElementById('volumeChart').getContext('2d');
const gradient = ctxVolume.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(255, 127, 80, 0.3)');
gradient.addColorStop(1, 'rgba(255, 127, 80, 0)');

new Chart(ctxVolume, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Revenue',
            data: [8000, 7000, 11000, 7000, 9000, 12000, 14000, 19000, 15000, 13000, 11000, 13000],
            borderColor: '#FF7F50',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 10 } } },
            y: { 
                border: { dash: [5, 5] },
                grid: { color: '#f1f5f9' },
                ticks: { 
                    color: '#94a3b8', 
                    font: { size: 10 },
                    callback: (val) => '$' + (val/1000) + 'K'
                }
            }
        }
    }
});