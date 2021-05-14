import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledBarChart'

function MovieChart(props) {

    return (
      <ol>
        {props.data.map( d => <li key= {d.title}>{d.title} - {d['release_year']}</li>)}
      </ol>
    );
  }

export default MovieChart;