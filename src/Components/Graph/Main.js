import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


const Graph = ( { MovieData } ) => {

  const [data, setData] = useState({
    labels: ['January', 'February', 'March',
             'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: "first",
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(160, 159, 157, .3)',
        borderColor: 'rgba(160, 159, 157, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(160, 159, 157, 1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: "second",
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(102, 166, 49, .3)',
        borderColor: 'rgba(102, 166, 49, 1)',
        pointBackgroundColor: 'rgba(102, 166, 49, 1)',
        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0]
      },
    ]
  })

  useEffect(() => {
    MovieData.map((res, index) => {
      let movieData = Object.values(res.orders)
      let updated = data
      updated.datasets[index].data = movieData
      setData(updated)
    })
  }, [])

  return (
    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} >
      <Line
        data={data}
        options={{
          plugins:{
             legend: {
               display: false
                     },
                  },
          scales: {
            y: {
              min: 20,
              max: 70
            }
          }
             }}
      />
    </div>
  );
}

export default Graph;
