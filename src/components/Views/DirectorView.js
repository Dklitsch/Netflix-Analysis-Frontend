import React from 'react'; 
import ReactDOM from 'react-dom'; 
import useFetch from './UseFetch';

function DirectorView(props) {

    const typeData = useFetch(`${apiRoute}/director/${props.name}`);

    return (
      <div>
          <ol>
            {typeData != null && typeData.titles.map( d => <li key= {d.title}>{d.title} - {d.country} - {d['release_year']}</li>)}
          </ol>
      </div>
    );
  }

export default DirectorView;