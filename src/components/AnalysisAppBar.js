import React from 'react'; 
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Grid, IconButton, Input, InputBase, TextField, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import apiRoute from './ApiData';
import useFetch from './UseFetch';
import { Autocomplete } from '@material-ui/lab';
import SearchBar from './SearchBar';

export default function AnalysisAppBar(props) {

    const searchTerms = useFetch(`${apiRoute}/searchterms`) ?? [];

    return (
        <AppBar color="primary" position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div>
              <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              >
                <SearchBar></SearchBar>
                <Typography variant="h6">Netflix Analysis Dashboard</Typography>
              </Grid>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}