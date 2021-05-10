import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { useParams } from 'react-router';
import apiRoute from '../ApiData';
import useFetch from '../UseFetch';

function DirectorView(props) {

    const { name } = useParams();
    const capitalizeName = (name) => name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    const directorData = useFetch(`${apiRoute}/director/${name}`);
    const codirectorNames = directorData === null ? [] : Object.keys(directorData['director collabs']);
    const collabNames = directorData === null ? [] : Object.keys(directorData['cast collabs']);
    let cleanedCollabs = collabNames.map(name => { return { name: name, count: directorData['cast collabs'][name]}})
    cleanedCollabs = cleanedCollabs.sort((a, b) => b.count - a.count)

    return (
      <div>
        {directorData != null &&
          <div>
            <h2>{capitalizeName(name)}</h2>
            <h4>{directorData.titles.length} Titles: </h4>
            <p>
              {directorData.titles.map( d => <div>{d.title}{d.title} - {d.country} - {d['release_year']}</div>)}
            </p>
            <h4>Frequent co-directors: </h4>
            <p>
              {codirectorNames.map(name => <div>{name}: {directorData['director collabs'][name]} titles</div>)}
            </p>
            <h4>Frequent collaborators: </h4>
            <p>
              {cleanedCollabs.map(a => <div>{a.name}: {a.count} titles</div>)}
            </p>
          </div>}
      </div>
    );
  }

export default DirectorView;