$(function () {
  $('.input_cont>input').on('input', function () {
    $(this).siblings('.cross').addClass('_active');
  });

  $('.cross').on('click', function () {
    $(this).siblings('input').val('');
    $(this).removeClass('_active');
  });

  $('.loc_item').on('click', function () {
    $(this).parent().parent().parent().addClass('_active');
  });

  $('.drop_down_title').on('click', function () {
    $(this).siblings('.drop_down_body').toggleClass('_active');
  });

  $('._drop_close').on('click', function () {
    $(this).parent().parent().parent().removeClass('_active');
    $(this).parent().parent().siblings('.drop_down_body').removeClass('_active');
  });
});

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Legend 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#4064FF',
      fill: {
        target: 'origin',
        above: generateGradient(1) // And blue below the origin
      },
      pointBackgroundColor: '#fff',
      pointBorderColor: '#4064FF',
      pointBorderWidth: 2,
      pointRadius: 3
    },
    {
      label: 'Legend 2',
      data: [85, 19, 100, 71, 46, 95, 10],
      fill: false,
      borderColor: '#EBAF78',
      fill: {
        target: 'origin',
        above: generateGradient() // And blue below the origin
      },

      pointBackgroundColor: '#fff',
      pointBorderColor: '#EBAF78',
      pointBorderWidth: 2,
      pointRadius: 3
    }
  ]
};

const ctx = document.querySelector('#acquisitions').getContext('2d');

const getAspectRatio = () => {
  const width = document.body.clientWidth;
  let aspectRatio = 4;

  if (width < 1000) {
    aspectRatio = 0.5;
  }
  return aspectRatio;
};

const stackedLine = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        min: 0,
        max: 120,
        ticks: {
          stepSize: 40 // Шаг значений на оси Y
        }
      }
    },
    aspectRatio: getAspectRatio(), // Задание соотношения ширины и высоты графика,

    plugins: {
      legend: {
        align: 'end',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          useBorderRadius: true,
          borderRadius: 2
        }
      }
    }
  }
});

function generateGradient(index) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Задайте нужные значения для градиента

  if (index) {
    gradient.addColorStop(0, 'rgba(51, 89, 229, 0.60)'); // Начальный цвет градиента
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Конечный цвет градиента
    return gradient;
  }
  gradient.addColorStop(0, 'rgba(  235, 175, 120, 0.48)'); // Начальный цвет градиента
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Конечный цвет градиента

  return gradient;
}

const ctx_1 = document.querySelector('#chart_1').getContext('2d');
const ctx_2 = document.querySelector('#chart_2').getContext('2d');
const ctx_3 = document.querySelector('#chart_3').getContext('2d');
const ctx_4 = document.querySelector('#chart_4').getContext('2d');
const ctx_5 = document.querySelector('#chart_5').getContext('2d');
const ctx_6 = document.querySelector('#chart_6').getContext('2d');

const ctxs = [ctx_1, ctx_2, ctx_3, ctx_4, ctx_5, ctx_6];

for (let i = 0; i < ctxs.length; i++) {
  new Chart(ctxs[i], {
    type: 'pie',
    data: {
      datasets: [
        {
          data: [10, 20, 30, 40, 60, 5],
          borderWidth: 0,
          backgroundColor: ['#C3CEF7', '#F4D993', '#C3F7DE', '#E6C6FF', '#FEDEBC', '#FEDEF3']
        }
      ],
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6']
    },
    options: {
      radius: '80%',
      plugins: {
        legend: {
          position: 'bottom' // Display the legend below the pie chart
        }
      }
    }
  });
}

$('.tab_body').not($('.tab_body').eq(0)).hide();

$('.tab_header_item').click(function () {
  $('.tab_body')
    .not($('.tab_body').eq($(this).index()))
    .hide();
  $('.tab_header_item')
    .not($('.tab_body').eq($(this).index()))
    .removeClass('_active');

  $('.tab_header_item').eq($(this).index()).addClass('_active');
  $('.tab_body').eq($(this).index()).fadeIn();
});
