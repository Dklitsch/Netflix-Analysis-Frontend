import { makeStyles } from '@material-ui/styles';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import apiRoute from '../ApiData';
import StyledLineChart from '../StyledLineChart';
import useFetch from '../UseFetch';
import { capitalizeName } from '../Utilities';

function CountryView(props) {

    const { name } = useParams();

    const countryData = useFetch(`${apiRoute}/country/${name}`);
    const directorNames = countryData === null ? [] : Object.keys(countryData.topDirectors);
    const castNames = countryData === null ? [] : Object.keys(countryData.topCast);
    let cleanedDirectors = directorNames.map(name => { return { name: name, count: countryData.topDirectors[name]}}).sort((a, b) => b.count - a.count);
    let cleanedCast = castNames.map(name => { return { name: name, count: countryData.topCast[name]}}).sort((a, b) => b.count - a.count); 

    return (
      <div>
        {countryData != null &&
          <div>
            <h2>{capitalizeName(name)}</h2>
            <h4>{countryData.titleCount} Titles</h4>
            <img src={`${apiRoute}/country/${name}/yearchart.png`}></img>
            <h4>Prolific directors: </h4>
            <p>
              {
                cleanedDirectors.map(a => <div key={a.name}><Link to={`/Netflix-Analysis-Frontend/director/${a.name}`}>{a.name}</Link>: {a.count} titles</div>)
              }
            </p>
            <h4>Frequent cast members: </h4>
            <p>
              {
                cleanedCast.map(a => <div key={a.name}><Link to={`/Netflix-Analysis-Frontend/cast/${a.name}`}>{a.name}</Link>: {a.count} titles</div>)
              }
            </p>
          </div>}
      </div>
    );
  }

  export default CountryView;