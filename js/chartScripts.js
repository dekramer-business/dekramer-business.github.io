
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
        label: 'mmHg',
        data: [-4.8, -.7, -1.2, 1.2],
        borderWidth: 1,
        borderRadius: 5
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});