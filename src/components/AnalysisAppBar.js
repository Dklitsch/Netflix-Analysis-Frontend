import React, { useRef, useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, fade, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  popover: { 
    backgroundColor: fade(theme.palette.common.white, 0.15), 
    padding: '.5em',
    borderRadius: '1em',
    border: '1px solid black'
  }
}))

export default function AnalysisAppBar(props) {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const divRef = useRef();
  const [showTutorial, setShowTutorial] = useState(true);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const closeTutorial = () => {setShowTutorial(false)}

  useEffect(()=>{
    if (showTutorial)
    {
      divRef.current.focus();
    }
  });

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
                { showTutorial &&   
                  <Typography 
                    ref={divRef} 
                    onBlur={() => closeTutorial()} 
                    tabindex="0"
                    className={classes.popover}
                  >Use this box to search for directors and actors -></Typography>
                }
                <SearchBar></SearchBar>
                <Typography variant="h6">Netflix Analysis Dashboard</Typography>
              </Grid>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}