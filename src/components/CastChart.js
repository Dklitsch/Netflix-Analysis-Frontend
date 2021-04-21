import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledChart'

function CastChart(props) {

    const castNames = props.data === null ? [] : Object.keys(props.data);
    let castHeaders = [
      ['Country Name', 'Number of Titles', { role: 'annotation' }]
    ];
    const castData = castHeaders.concat(castNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      castData === null ? <p>Loading...</p> : 
        <StyledChart 
        title='Top 5 cast members with the most titles'
        data={castData}  
        height={'50vh'}
        axisTitle='Cast Member'
      />
    );
  }

export default CastChart;