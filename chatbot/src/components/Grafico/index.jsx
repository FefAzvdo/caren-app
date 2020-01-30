import React from 'react';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';


class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'],
      datasets: [
        {
          label: 'Taxa de symbicort (mg/mm³)',
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(102,102,102,.3)',
          borderColor: '#33B6AE',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#33B6AE',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#33b6ae',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
