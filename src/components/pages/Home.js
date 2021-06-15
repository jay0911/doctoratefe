import React from 'react';
import {Link} from 'react-router-dom'

import { connect } from "react-redux";
import * as actions from '../../actions/examAction'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Home = ({exam,getQuestion,genericUserChange,examButtonChange,changePage}) => {

    const handleChange = (e) => {
        genericUserChange("name",e.target.value)
    };

    const classes = useStyles();

    const history = useHistory();

    function handleClick() {
        if(exam.user.name){
            var currentTime = new Date()
            genericUserChange("dateStart",currentTime)
            examButtonChange(true)
            getQuestion(history);
            changePage('Questions')
        }
    }
      
    return(
        <>
            <div className={classes.root}>
                <div align="center">
                    <h1>Start your exam</h1>

                    <TextField id="standard-basic" label="Your name" onChange={ handleChange } value={ exam.user.name } /> <br/><br/>

                    <Button variant="contained" color="primary" onClick={handleClick} >
                        Start
                    </Button>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {exam:state.exam}
}

export default connect(mapStateToProps,actions)(Home)