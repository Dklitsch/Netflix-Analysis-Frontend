import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Link } from 'react-router-dom';
import StyledChart from './StyledChart'

function DirectorChart(props) {

    const directorNames = props.data === null ? [] : Object.keys(props.data);
    let directorHeaders = [
      ['Director Name', 'Number of Titles', { role: 'annotation' }]
    ];
    const directorTemplate = (name) => [name, props.data[name], props.data[name]];
    const directorData = directorHeaders.concat(directorNames.map(name => directorTemplate(name)));

    return (
      directorData === null ? <p>Loading...</p> : 
        <StyledChart 
        title='Top 5 directors with the most titles'
        data={directorData}  
        height={'50vh'}
        axisTitle='Director'
      />
    );
  }

export default DirectorChart;