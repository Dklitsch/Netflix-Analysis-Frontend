import React, { useState } from 'react'; 
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Grid, IconButton, Input, InputBase, TextField, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import apiRoute from './ApiData';
import useFetch from './UseFetch';
import { Autocomplete } from '@material-ui/lab';
import { Redirect } from 'react-router';

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

  export default function SearchBar(props) {
    const classes = useStyles();

    const searchTerms = useFetch(`${apiRoute}/searchterms`) ?? [];

    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [redirectLink, setRedirectLink] = useState('');

    const handleSubmit = (e) => {
        if (searchFieldValue?.type != null && searchFieldValue?.term != null)
          {
            setRedirectLink(`/${searchFieldValue?.type}/${searchFieldValue?.term}`);
          }   
        e.preventDefault();  
      }

      return(
        <div>
        {redirectLink !== '' && <Redirect to={redirectLink} />}
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <form onSubmit={handleSubmit}>
        <Autocomplete
                id="free-solo-demo"
                className={classes.inputRoot}
                options={searchTerms}
                getOptionLabel={(option) => option != '' ? `${option.type}: ${option.term}` : ''}
                size="small"
                value={searchFieldValue}
                onChange={(event, option) => {
                    setSearchFieldValue(option);
                  }}
                renderInput={(params) => (
                    
                    <div ref={params.InputProps.ref}>
                        <Input style={{ width: 400 }} 
                            type="text" {...params.inputProps} 
                            className={classes.inputInput} 
                        />
                    </div>
                )}
            />
            </form>
        </div>
        </div>
      )
  }