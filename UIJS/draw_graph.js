function drawGraph(dataSets, dataSetLabel){
  console.log("Inside drawGraph")
  let dataArray = [];
  for(i = 0; i< dataSets.length; i++){
    let point = {
      x: dataSets[i][0],
      y: dataSets[i][1],
    };

    dataArray.push(point);
  }

let myChart = document.getElementById("myChart").getContext('2d');
      let gasConcChart = new Chart(myChart, {
        type:'scatter',
        data:{
          datasets:[{
            label: dataSetLabel,

              data: dataArray,
              borderColor: "#3e95cd",
              fill: false

          }]
        },
        options:{
          title: {
          display: true,
          text: 'Gas Concentration of Ozone vs Altitude'
        },

        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Altitude (km'
            }
              
          }],

          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Atmospheric Ozone Concentration(ppmv)'
            }
              
          }]
      }
      }
      });

    }