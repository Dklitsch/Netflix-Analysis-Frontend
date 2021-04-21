import './App.css';
import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts"
import StyledChart from './components/StyledChart';
import useFetch from './components/UseFetch';
import TypeChart from './components/TypeChart';
import DirectorChart from './components/DirectorChart';
import CastChart from './components/CastChart';
import CountryChart from './components/CountryChart';
import YearChart from './components/YearChart';

const apiRoute = 'https://dklitsch.pythonanywhere.com'

function App() {

  const typeData = useFetch(`${apiRoute}/type`);

  const directorData = useFetch(`${apiRoute}/director/top5`);

  const castData = useFetch(`${apiRoute}/cast/top5`);

  const countryData = useFetch(`${apiRoute}/country/top10`);

  const topYearData = useFetch(`${apiRoute}/releaseyear/top10`);
  
  const bottomYearData = useFetch(`${apiRoute}/releaseyear/bottom10`);

  return (
    <div className="App">
        <p>
          Hi, welcome to my Netflix Analysis Dashboard!
        </p>

        <p>This dashboard displays some interesting statistics about Netflix titles as of 2019. The goal is to present the data in an intuitive and accessable way.</p>
        
        <p>This project is based on <a href="https://www.kaggle.com/shivamb/netflix-shows" target="_blank">this</a> dataset from Flixable. </p>

        <TypeChart data={typeData} />

        <DirectorChart data={directorData} />

        <CastChart data={castData} />

        <CountryChart data={countryData} />

        <h2>Netflix skews heavily towards newer titles, half of all titles were released after 2017!</h2>

        <YearChart data={topYearData} title='Top 10 years with the most Netflix titles'/>

        <YearChart data={bottomYearData} title='Top 10 years with the least Netflix titles'/>
        
    </div>
  );
}

export default App;
