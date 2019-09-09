import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

class CategoryManage extends Component {
  render() {
    const options = {
      title: {
        text: '阅读指数榜',
      },
      xAxis: {
        categories: [
          'Article',
          'Biography',
          'Novel',
          'Romance',
          'Fiction',
        ],
      },
      yAxis: {
        title: {
          text: '阅读次数',
        },
      },
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Apr',
          data: [1, 0, 4, 0, 3],
        },
        {
          name: 'May',
          data: [5, 7, 3, 2, 4],
        },
        {
          name: 'Jun',
          data: [0, 0, 0, 1, 0],
        },
      ],
    };

    return (
      <div className="App">
        <Chart options={options} />
      </div>
    );
  }
}

export default CategoryManage;