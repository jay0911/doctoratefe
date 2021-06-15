import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import * as actions from '../../actions/examAction'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '30px',
      flexGrow: 1
    },
    cardWrong: {
        width: '100%',
        margin:'20px',
        backgroundColor:'#ff9999'
    },
    cardRight: {
        width: '100%',
        margin:'20px',
        backgroundColor:'#b3ffd9'
    },
    headingName: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '15%',
        flexShrink: 0,
    },

    scoreHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '25%',
        flexShrink: 0,
    },

    headingDate: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      paddingLeft:20
    },
    cardCorrectAnswer: {
        paddingLeft: 12,
    },
}));


const Result = ({history}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    const historyy = useHistory();

    if(!history){
        historyy.push("/");
    }


    return(
        <div className={classes.root}>

            {history!==null?history.map(h => {
                return <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.headingName}>{h.name}</Typography>
                        <Typography className={classes.scoreHeading}>{h.exam.score}/{h.exam.examAnswers.length}</Typography>
                        <Typography className={classes.headingDate}> Start: {h.exam.start}- Finished: {h.exam.finished}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                            {h.exam.examAnswers.map(a => {
                            return <Grid item xs={12} sm={6} md={3}>
                                    <Card className={a.correct===true? classes.cardRight:classes.cardWrong}>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    {bull}{a.questionaire.question}
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    Your Answer: {a.userAnswer}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Typography className={classes.cardCorrectAnswer} color="textSecondary">
                                                    Correct Answer: {a.questionaire.answer}
                                                </Typography>
                                            </CardActions>
                                    </Card>
                                </Grid>
                            })}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </div>;
            }):null}
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {history:state.exam.history}
}

export default connect(mapStateToProps,actions)(Result)