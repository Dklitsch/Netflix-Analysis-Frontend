import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledChart'

function MovieChart(props) {

    const movieNames = props.data === null ? [] : Object.keys(props.data);
    let movieHeaders = [
      ['Country Name', 'Number of Titles', { role: 'annotation' }]
    ];
    const movieData = movieHeaders.concat(movieNames.map((name) => [name, props.data[name], props.data[name]]))

    return (
      <ol>
        {props.data.map( d => <li key= {d.title}>{`d.title - d['release_year']`}</li>)}
      </ol>
    );
  }

export default MovieChart;