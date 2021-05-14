import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledBarChart'

function CountryChart(props) {

    const countryNames = props.data === null ? [] : Object.keys(props.data);
    let countryHeaders = [
      ['Country', 'Number of Titles', { role: 'annotation' }]
    ];
    const countryData = countryHeaders.concat(countryNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      countryData === null ? <p>Loading...</p> : 
        <StyledChart 
        title='Top 10 countries with the most titles'
        data={countryData}  
        height={'60vh'}
        axisTitle='Country'
      />
    );
  }

export default CountryChart;