'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
  if (!!document.querySelector('.app-scroll')) {
    new SimpleBar(document.querySelector('.app-scroll'));
  }
});

function floatchart() {
  (function () {
    var options = {
      chart: {
        type: 'area',
        height: 215,
        sparkline: {
          enabled: true
        }
      },
      colors: ["#1abc9c", "#0e9e4a", "#e74c3c"],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        name: 'series1',
        data: [20, 90, 65, 85, 20, 80, 30]
      }, {
        name: 'series2',
        data: [70, 30, 40, 15, 60, 40, 95]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
    new ApexCharts(document.querySelector("#account-chart"), options).render();
  })();
}
