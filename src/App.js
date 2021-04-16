import './App.css';
import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts"
import StyledChart from './components/StyledChart';
import useFetch from './components/UseFetch';
import TypeChart from './components/TypeChart';
import DirectorChart from './components/DirectorChart';
import CastChart from './components/CastChart';

const apiRoute = 'http://dklitsch.pythonanywhere.com'

function App() {

  const typeData = useFetch(`${apiRoute}/type`);

  const directorData = useFetch(`${apiRoute}/director/top5`);

  const castData = useFetch(`${apiRoute}/cast/top5`);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, welcome to my Netflix Analysis Dashboard.
        </p>

        <p>The goal for the app is take information about Netflix titles and present it in a way that's easy to use and understand.</p>

        <TypeChart data={typeData} />

        <DirectorChart data={directorData} />

        <CastChart data={castData} />
      </header>
    </div>
  );
}

export default App;
