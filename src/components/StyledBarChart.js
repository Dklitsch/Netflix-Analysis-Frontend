import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Chart from "react-google-charts"
  
const StyledChart= (props)=>
{
    const chartTextStyle = {color: '#FFF'};

  return (
    <Chart
    width={'95vw'}
    height= {props?.height ?? '33vh'}
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={props.data}
    options={{
      title: props.title,
      titleTextStyle: {
        color: chartTextStyle,
      },
      chartArea: { width: '80%' },
      colors: ['#0f4c75'],
      hAxis: {
        minValue: 0,
        textStyle: chartTextStyle,
          titleTextStyle: chartTextStyle,
      },
      vAxis: {
        title: props.axisTitle,
        gridlines: {color: '#787878'},
        textStyle: chartTextStyle,
          titleTextStyle: chartTextStyle,
        format: '0'
      },
      legend:{
        textStyle: chartTextStyle
      },
      backgroundColor : { fill:'transparent' }
    }}
  />
  )
}
  
export default StyledChart;