import React from 'react'; 
import ReactDOM from 'react-dom'; 
import StyledChart from './StyledChart'

function TypeChart(props) {

    const numMovies = props.data != null ? props.data.Movie : 0;
    const numShows = props.data != null ? props.data['TV Show'] : 0;

    return (
        props.data === null ? <p>Loading...</p> : 
            <StyledChart 
              title={'Netflix contains ' + numMovies + ' movies and '+ numShows +' TV Shows'}
              data={[
                ['Type', 'Number of Titles'],
                ['Movies', numMovies],
                ['TV Shows', numShows]
              ]}  
              axisTitle='Type'
            />
    );
  }

export default TypeChart;