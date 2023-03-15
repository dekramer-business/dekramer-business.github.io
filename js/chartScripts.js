
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Systolic', 'Diastolic',],
    datasets: [{
        label: 'MBSR',
        data: [-4.8, -.7],
        borderWidth: 1,
        borderRadius: 5
    },
    {
        label: 'PMR',
        data: [-1.2, 1.2],
        borderWidth: 1,
        borderRadius: 5
    }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Change in Clinic Blood Pressure by Treatment',
                font: {
                    size: 20,
                }
            },
            },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Change in BP (mmHG)',
                    font: {
                        weight: 'bold',
                      },
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(value== 0)
                            return value + "mmHg";
                        return value;
                    }
                }
            }
        }
    }
});