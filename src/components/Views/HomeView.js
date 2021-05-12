import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import useFetch from '../UseFetch';
import TypeChart from '../TypeChart';
import DirectorChart from '../DirectorChart';
import CastChart from '../CastChart';
import CountryChart from '../CountryChart';
import YearChart from '../YearChart';
import ListedInChart from '../ListedInChart';
import apiRoute from '../ApiData';
import { Link } from 'react-router-dom';

function HomeView(props) {

    const typeData = useFetch(`${apiRoute}/type`);

    const directorData = useFetch(`${apiRoute}/director/top5`);

    const castData = useFetch(`${apiRoute}/cast/top5`);

    const countryData = useFetch(`${apiRoute}/country/top10`);

    const topYearData = useFetch(`${apiRoute}/releaseyear/top10`);

    const bottomYearData = useFetch(`${apiRoute}/releaseyear/bottom10`);

    const listedInData = useFetch(`${apiRoute}/listedin/top10`);

    const oldestMovies = useFetch(`${apiRoute}/movie?order=asc&take=5`);

    const oldestTV = useFetch(`${apiRoute}/tvshow?order=asc&take=5`);

    const linkToDirector = (directorList) => {
      return directorList.split(", ").map(director => <Link to={`/Netflix-Analysis-Frontend/director/${director}`}>{director}</Link>).reduce((prev, curr) => [prev, ', ', curr])
    }

    return (
    <>
        <p>
          Hi, welcome to my Netflix Analysis Dashboard!
        </p>

        <p>This dashboard displays some interesting statistics about Netflix titles. The goal is to present the data in an intuitive and accessable way.</p>
        
        <p>This project is based on <a href="https://www.kaggle.com/shivamb/netflix-shows" target="_blank">this</a> dataset from Flixable. </p>

        <TypeChart data={typeData} />

        <DirectorChart data={directorData} />

        <p>Only around 7% of TV shows list directors, notable exceptions being documentarians like Alastair Fothergill with 3 titles and Ken Burns with 2.</p>

        <CastChart data={castData} />

        <CountryChart data={countryData} />

        <h2>Netflix skews heavily towards newer titles, half of all titles were released after 2017!</h2>

        <YearChart data={topYearData} title='10 years with the most Netflix titles'/>

        <YearChart data={bottomYearData} title='10 years with the least Netflix titles'/>

        <h2>Top 5 Oldest movies</h2>

        <ol>
          {oldestMovies != null && oldestMovies.map( d => <li key= {d.title}>{d.title} by {linkToDirector(d.director) ?? 'unlisted'} - {d['release_year']}</li>)}
        </ol>

        <h2>Top 5 Oldest TV shows</h2>

        <ol>
          {oldestTV != null && oldestTV.map( d => <li key= {d.title}>{d.title} - {d['release_year']}</li>)}
        </ol>

        <ListedInChart data={listedInData} />
        
    </>
    );
  }

export default HomeView;