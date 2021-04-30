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

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '60ch',
      },
      color: 'white'
    },
  }))

export default function AnalysisAppBar(props) {

      const searchTerms = useFetch(`${apiRoute}/searchterms`) ?? [];

      console.log("Search terms: " + JSON.stringify(searchTerms))

      const classes = useStyles();

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
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <Autocomplete
                        id="free-solo-demo"
                        className={classes.inputRoot}
                        options={searchTerms.map((option) => `${option.type}: ${option.term}`)}
                        size="small"
                        renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                                <Input style={{ width: 400 }} 
                                    type="text" {...params.inputProps} 
                                    className={classes.inputInput} 
                                />
                            </div>
                        )}
                    />
                </div>
                <Typography variant="h6">Netflix Analysis Dashboard</Typography>
              </Grid>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}