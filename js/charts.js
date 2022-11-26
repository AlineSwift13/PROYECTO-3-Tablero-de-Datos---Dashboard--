new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ['Septiembre','Octubre','Noviembre'],
    datasets: [{ 
        data: [1200,3236,4678],
        label: "Mewtwo",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [1000,2200,900],
        label: "Rayquaza",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [1145,4862,3654],
        label: "Giratina",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Los Pókemon más elegidos por su fuerza'
    }
  }
});

new Chart(document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Igglybuff", "Wimpod", "Snom", "Eevee"],
    datasets: [{
      label: "Pókemon",
      backgroundColor: ["#e8c3b9", "#8e5ea2","#3e95cd","#D9A86C"],
      data: [3500,2697,500,984]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Los Pókemon menos elegidos por su fuerza'
    }
  }
});

'use strict';
$(document).ready(function() {

        var chart = AmCharts.makeChart("statestics-chart", {
            "type": "serial",
            "marginTop": 0,
            "hideCredits": true,
            "marginRight": 0,
            "dataProvider": [{
                "year": "Pikachu",
                "value": 64.8
            }, {
                "year": "Charizard",
                "value": 25.6
            }, {
                "year": "Mewtwo",
                "value": 42.7
            }, {
                "year": "Bulbasaur",
                "value": 25.7
            }, {
                "year": "Charmander",
                "value": 31.2
            }, {
                "year": "Squirtle ",
                "value": 25.6
            }, {
                "year": "Gengar",
                "value": 25.3
            }
          ],
            "valueAxes": [{
                "axisAlpha": 0,
                "dashLength": 6,
                "gridAlpha": 0.1,
                "position": "left"
            }],
            "graphs": [{
                "id": "g1",
                "bullet": "round",
                "bulletSize": 9,
                "lineColor": "#3868A6",
                "lineThickness": 2,
                "negativeLineColor": "#4680ff",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartCursor": {
                "cursorAlpha": 0,
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": false,
                "color": '#2F4C73',
                "cursorColor": '#F2BD1D',
                "fullWidth": true
            },
            "categoryField": "year",
            "categoryAxis": {
                "gridAlpha": 0,
                "axisAlpha": 0,
                "fillAlpha": 1,
                "fillColor": "#FAFAFA",
                "minorGridAlpha": 0,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        });

});