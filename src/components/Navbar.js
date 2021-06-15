import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { connect } from "react-redux";
import * as examAction from '../actions/examAction'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      flexBasis: '25%',
    },
}));


const Navbar = ({saveMyExam,user,showEndExam,examButtonChange,page,changePage,getHistories,init}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();

    const goToHome = () => {
        changePage('Home')
        history.push("/");
        setAnchorEl(null);
    };

    const goToHistory = () => {
        changePage('Results')
        getHistories(history);
        setAnchorEl(null);
    };

    
    const goToUpload = () => {
        init();
        changePage('Upload')
        history.push("/upload");
        setAnchorEl(null);
    };

    const endQuestion = () => {
        var currentTime = new Date()
        user.dateFinished = currentTime
        saveMyExam(user,history)
        examButtonChange(false)
        changePage('Results')
    }; 

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}> 
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={goToHome}>Home</MenuItem>
                    <MenuItem onClick={goToHistory}>Results</MenuItem>
                    <MenuItem onClick={goToUpload}>Upload new exam</MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                    {page}
                </Typography>
                {showEndExam?<Button color="inherit" onClick={endQuestion}>End the exam</Button>:null}
                </Toolbar>
            </AppBar>
            </div>
        </>
    )

};

function mapStateToProps(state) {
    console.log(state.exam.page)
    return {
        user:state.exam.user,
        showEndExam:state.exam.showEndExam,
        page:state.exam.page
    }
}

export default connect(mapStateToProps,examAction)(Navbar)