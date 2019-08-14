import React from 'react'
import { Chart } from 'react-charts'

class Grafica2 extends React.Component {
  render () {
    const data = [
      [[1, 10], [2, 10], [3, 18]],
      [[1, 10], [2, 10], [3, 13]],
      [[1, 10], [2, 10], [3, 14]]
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
export default Grafica2
