import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import HomeView from './components/Views/HomeView'
import { MuiThemeProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f4c75',
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

          <AppBar color="primary" position="fixed">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
              <Typography variant="h6">Netflix Analysis Dashboard</Typography>
            </Toolbar>
          </AppBar>

          <Toolbar></Toolbar>

          <HomeView></HomeView>

          <Switch>
            <Route exact path='/' component={App}/>
          </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
