import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledChart'

function YearChart(props) {

    const yearNames = props.data === null ? [] : Object.keys(props.data);
    let yearHeaders = [
      ['Year', 'Number of Titles', { role: 'annotation' }]
    ];
    const yearData = yearHeaders.concat(yearNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      yearData === null ? <p>Loading...</p> : 
        <StyledChart 
        title={props.title}
        data={yearData}  
        height={'60vh'}
        axisTitle='Year'
      />
    );
  }

export default YearChart;