import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


function Linechart() {



    const options = {
      chart: {
        type: 'spline',
        height: 200
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
        {
          name: '',
          data: [10, 15, 12, 8, 20, 5]
        }
      ]
    };


    


    


  return (
    <div className='mb-3'>
        <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    </div>
  )
}

export default Linechart