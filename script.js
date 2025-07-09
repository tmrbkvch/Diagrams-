const ctx = document.getElementById('oblastChart').getContext('2d');

const data = {
  labels: [
    'JavaScript',
    'Python',
    'C#',
    'C/C++',
    'PHP',
    'TypeScript ',
    'остальные языки'
  ],
  datasets: [{
    label: 'Изучают (процент)',
    data: [30, 12, 9, 8, 6, 5, 5],
    backgroundColor: [
      '#3498db',
      '#e74c3c',
      '#2ecc71',
      '#f1c40f',
      '#9b59b6',
      '#1abc9c',
      '#e67e22'
    ],
    borderColor: '#000000',
    borderWidth: 1
  }]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'Топ-7 языков программирования (по популярности)'
      }
    }
  }
};

new Chart(ctx, config);