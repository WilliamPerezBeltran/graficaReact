import React from 'react'
import { Chart } from 'react-charts'

class Grafica1 extends React.Component {
  render () {
    const data = [
      {
        label: 'Series 1',
        data: [{ x: 1, y: 10 }, { x: 2, y: 80 }, { x: 3, y: 10 }]
      },
      {
        label: 'Series 2',
        data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      },
      {
        label: 'Series 3',
        data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      }
    ]
    return (

      <div
        style={{
          width: '400px',
          height: '300px'
        }}
      >
        <Chart
          data={data}
          axes={[
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
          ]}
        />
      </div>

    )
  }
}
export default Grafica1
