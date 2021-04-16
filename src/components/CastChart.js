import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledChart'

function CastChart(props) {

    const directorNames = props.data === null ? [] : Object.keys(props.data);
    let directorHeaders = [
      ['Cast Member', 'Number of Titles', { role: 'annotation' }]
    ];
    const directorData = directorHeaders.concat(directorNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      directorData === null ? <p>Loading...</p> : 
        <StyledChart 
        title='Top 5 directors with the most titles'
        data={directorData}  
        height={'50vh'}
        axisTitle='Cast Member'
      />
    );
  }

export default CastChart;