$(document).ready(function (){
    new Chart($("#myChart"), {
        type: 'line',
        data: {
            labels: [
                'Q3 21', 'Q4 21', 'Q1 22', 
                'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', "Q2 23", "Q3 23"
            ],
              
            datasets: [{
               label: "CashFlow",
                data: [0, 300, 500, 900, 1000, 1200, 1400, 1600, 1900],// End data
                borderColor: 'green',
                segment: {
                    borderColor: ctx => skipped(ctx, 
                        'rgb(0,0,0,0.2)') ||
                        down(ctx, 'rgb(192,75,75)'),
                    borderDash: ctx => skipped(ctx, [6, 6]),
                },
                spanGaps: true
            }]// End datasets
        },// End data  
        options: {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                   gridLines: {
                      display: false,
                      display:false,
                      drawBorder: false,
                      stepSize: 10,
                   },
                   angleLines: {
                    display: false
                  },
                  
                }],
               
                yAxes: [{
                   gridLines: {
                      display: true,
                      drawBorder: false,
                    //   tickLength: 4,
                  
                   },
                   angleLines: {
                    display: false
                  },
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 3,
                    callback: function(value, index, values) {
                      if(parseInt(value) >= 1000){
                        const x = value / 1000
                        return '$' + x.toFixed(1) + "k"
                      } else {
                        return '$' + value;
                      }
                    }
                }
                }]
           },
           legend: {
            display: false //This will do the task
         }
        //    layout: { padding: { left: 50, top:50, bottom:50, left:50 } } 
        }
       });
})