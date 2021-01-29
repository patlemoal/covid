Highcharts.chart('container', {

    title: {
      text: 'DONNEES COVID JOURNALIERE POUR L ENSEMBLE DE LA POPULATION LA PERIODE DU 18/03/2020 au 21/01/2021, Source: data.com'
         },
  
    subtitle: {
      text: 'FOCUS GLOBAL SUR LA PERIODE'
    },
  
  
    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: 'Nombre de personnes'
      },
      lineColor: '#FF0000',
      lineWidth: 1
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: 'Nombres de personnes cumulées'
      },
      lineColor: '#00FF00',
      lineWidth: 1
    }],
  
  
    xAxis: {
      type: 'datetime'
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2020, 2, 18),
       pointInterval: 24 * 3600 * 1000 // one day
        }
    },
  
    series: [{
      name: 'hosp',
      color: '#E0115F',
      data: Object.values(donneesfrompython.hosp)
    },
     {
      name: 'rea',
      color: '#FF2525',
      data: Object.values(donneesfrompython.rea)
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });

  Highcharts.chart('container1', {

    title: {
      text: 'DONNEES COVID JOURNALIERE POUR L ENSEMBLE DE LA POPULATION LA PERIODE DU 18/03/2020 au 21/01/2021, Source: data.com'
         },
  
    subtitle: {
      text: 'FOCUS GLOBAL SUR LA PERIODE'
    },
  
  
    yAxis: [{
      className: 'highcharts-color-0',
      title: {
        text: 'Nombre de personnes'
      },
      lineColor: '#FF0000',
      lineWidth: 1
    }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
        text: 'Nombres de personnes cumulées'
      },
      lineColor: '#00FF00',
      lineWidth: 1
    }],
  
  
    xAxis: {
      type: 'datetime'
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2020, 2, 18),
       pointInterval: 24 * 3600 * 1000 // one day
        }
    },
  
    series: [ {
      name: 'rad',
      color: '#25FDE9',
      data: Object.values(donneesfrompython.rad),
      yAxis: 1
    }, {
      name: 'dc',
      color: '#25FF00',
      data: Object.values(donneesfrompython.dc),
      yAxis: 1
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
























 
Highcharts.chart('container3', {
    title: {
      text: 'Moyenne par sexe par catégorie'
    },
    xAxis: {
      categories: ['TOTAL', 'HOMME', 'FEMME']
    },
    labels: {
      items: [{
        html: 'Moyenne Total des hommes et femmes',
        style: {
          left: '50px',
          top: '18px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black'
        }
      }]
    },
    series: [{
      type: 'column',
      name: 'hosp',
      data: Object.values(donnees3frompython.hosp)
    }, {
      type: 'column',
      name: 'rad',
      data: Object.values(donnees3frompython.rad)
     
    }, {
      type: 'column',
      name: 'dc',
      data: Object.values(donnees3frompython.dc)
    }, {
      type: 'column',
      name: 'rea',
      data: Object.values(donnees3frompython.rea)
    }, ]
});


Highcharts.chart('container4', {
  colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
  chart: {
    type: 'column',
    // inverted: false,
    polar: false
  },
  title: {
    text: 'Hospitalisation  par departement'
  },
  tooltip: {
    outside: true
  },
  pane: {
    size: '85%',
    innerSize: '20%',
    endAngle: 270
  },
  xAxis: {
    tickInterval: 1,
    lineWidth: 0
  },
  yAxis: {
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15
    }
  },
  series: [{
    name: 'hosp',
    data: Object.values(donnees4frompython.hosp)
   }]
});



Highcharts.chart('container5', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Décès homme femme en %',
    align: 'center',
    verticalAlign: 'top',
    y: 60
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'blue'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'DECES',
    innerSize: '50%',
    data: [
    ['Hommes', (donnees5frompython.dc[1] * 100) / donnees5frompython.dc[0]],
    ['Femmes', (donnees5frompython.dc[2] * 100) / donnees5frompython.dc[0]],
      
      {
        name: 'femme',
        y: '40,6',
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});



Highcharts.chart('container7', {
  colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
  chart: {
    type: 'column',
    //inverted: true,
    polar: true
  },
  title: {
    text: 'Hospitalisation par departement'
  },
  tooltip: {
    outside: true
  },
  pane: {
    size: '85%',
    innerSize: '20%',
    endAngle: 270
  },
  xAxis: {
    tickInterval: 1,
    lineWidth: 0
  },
  yAxis: {
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15
    }
  },
  series: [{
    name: 'hosp',
    data: Object.values(donnees4frompython.hosp)
   }]
});

