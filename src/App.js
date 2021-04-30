import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Toolbar } from '@material-ui/core';
import HomeView from './components/Views/HomeView'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DirectorView from './components/Views/DirectorView';
import AnalysisAppBar from './components/AnalysisAppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f4c75',
    }
  },
});

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div class="App">
          
          <AnalysisAppBar />

          <Toolbar></Toolbar>
          
          <Switch>
            <Route path="/director/:name" children={<DirectorView/>}>
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
