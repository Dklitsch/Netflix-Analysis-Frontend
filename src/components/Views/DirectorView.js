import { makeStyles } from '@material-ui/styles';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import apiRoute from '../ApiData';
import useFetch from '../UseFetch';

function DirectorView(props) {

    const { name } = useParams();

    const capitalizeName = (name) => name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    const directorData = useFetch(`${apiRoute}/director/${name}`);
    const directorCollabs = useFetch(`${apiRoute}/director/${name}/director collabs`);
    const castCollabs = useFetch(`${apiRoute}/director/${name}/cast collabs`);
    const codirectorNames = directorCollabs === null ? [] : Object.keys(directorCollabs);
    const collabNames = castCollabs === null ? [] : Object.keys(castCollabs);
    let cleanedCollabs = collabNames.map(name => { return { name: name, count: castCollabs[name]}})
    
    const linkCountries = (countryList) => {
      console.log(countryList.split(", ").map(country => <Link to={`/Netflix-Analysis-Frontend/country/${country}`}>country</Link>))
      return countryList.split(", ").map(country => <Link to={`/Netflix-Analysis-Frontend/country/${country}`}>{country}</Link>).reduce((prev, curr) => [prev, ', ', curr])
    }

    return (
      <div>
        {directorData != null &&
          <div>
            <h2>{capitalizeName(name)}</h2>
            <h4>{directorData.length} Titles: </h4>
            <p>
              {directorData.map( d => <div key={d.title}>{d.title} - {linkCountries(d.country)} - {d['release_year']}</div>)}
            </p>
            <h4>Frequent co-directors: </h4>
            <p>
              {codirectorNames.map(name => <div key={name}><Link to={`/Netflix-Analysis-Frontend/director/${name}`}>{name}</Link>: {directorCollabs[name]} titles</div>)}
            </p>
            <h4>Frequent collaborators: </h4>
            <p>
              {cleanedCollabs.map(a => <div key={a.name}><Link to={`/Netflix-Analysis-Frontend/cast/${a.name}`}>{a.name}</Link>: {a.count} titles</div>)}
            </p>
          </div>}
      </div>
    );
  }

export default DirectorView;