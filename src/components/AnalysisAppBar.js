import React from 'react'; 
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Grid, IconButton, Input, InputBase, Menu, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import apiRoute from './ApiData';
import useFetch from './UseFetch';
import { Autocomplete } from '@material-ui/lab';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function AnalysisAppBar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

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
              <MenuIcon onClick={handleMenuOpen} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}><Link to='/Netflix-Analysis-Frontend'>Home</Link></MenuItem>
              </Menu>
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