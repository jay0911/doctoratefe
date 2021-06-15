import React from 'react';

import { connect } from "react-redux";
import * as actions from '../../actions/examAction'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '30px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
    answerMarker: {
        backgroundColor:'#99bbff'
    },
    accordion: {
        borderRadius:'20'
    },
  }));
  

const Questions = ({exam,finalExamList,answerTheExam}) => {
    const classes = useStyles();

    const handleChange = (e,id) => {
        answerTheExam(id,e.target.value,finalExamList)
    };

    const history = useHistory();

    if(!exam.exam){
        history.push("/");
    }


    return(
        <div className={classes.root}>
               {exam.exam?exam.exam.map(exam => {
                return <div>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={exam.userAnswer?classes.answerMarker:null}
                        >
                        <Typography className={classes.heading}>{exam.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <TextField id="standard-basic"  onChange={ e=>handleChange(e,exam.id) } label="Type your answer here" /> <br/><br/>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>;
            }):null}
        </div>
    )
}

function mapStateToProps(state) {
    return {exam:state.exam,finalExamList:state.exam.examfinal}
}

export default connect(mapStateToProps,actions)(Questions)