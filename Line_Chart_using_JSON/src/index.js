import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css';

import { render } from '@testing-library/react';

class Chart extends React.Component {

    render() {
      const {params} = this.props;
      const { data, title, options, type } = params;
      const seriesData =  [];
      const categories = [];
      for (let i in data.data) {
        categories.push(data.data[i][options.xname]);
      }
     for (let i in data.data) {
        seriesData.push(data.data[i][options.yname]);
     }
     console.log(seriesData)
      const chartOptions = {
  chart: {
    type: type,
    align : 'center',
    backgroundColor: 'transparent'
  },
  title: {
    text: title,
    style: {
        color: '#efefef'
      }
  },
  yAxis: {
   categories: categories,
    labels: {
        style: {
          color: '#efefef'
        }
      },
    title: {
      text : "values",
      style: {
        color : '#efefef'
      }
    }
  },
  xAxis: {
    labels: {
        style: {
          color: '#efefef'
        }
      }
  },
  legend: {
    align: 'center'
  },
  series: [
    {
      data: seriesData,
      color : 'tomato'
    }
  ]
};
console.log(data);
    return (
      <div>
       <HighchartsReact
          highcharts={Highcharts} 
           options={chartOptions} 
            containerProps={{ style: { height : "400px", width : "600px" , align: "center"} }}/>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const params = {
      title: 'My Chart',
      type: 'spline',
      data: {
        "data": [
            {"year": "1992", "count": 10},
            {"year": "1993", "count": 11},
            {"year": "1994", "count": 12},
            {"year": "1995", "count": 13},
            {"year": "1996", "count": 14},
            {"year": "1997", "count": 15}
        ]
      },
      options: {
        xname : "year",
        yname : "count"
      }
    };
    return (
      <div><Chart params={params}></Chart></div>
      
    );
  }
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Index />);
