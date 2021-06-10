import React from 'react';
import {Link} from 'react-router-dom'

import { connect } from "react-redux";
import * as actions from '../../actions/examAction'

const Home = ({exam,getQuestion,genericUserChange}) => {



    const handleChange = (e) => {
        genericUserChange("name",e.target.value)
    };

    const startQuestion = () => {
        var currentTime = new Date()
        genericUserChange("dateStart",currentTime)
        getQuestion();
    }; 

    return(
        <>
            <h1>Start your exam</h1>

            <label>Name:</label>

            <input type="text" onChange={ handleChange } value={ exam.user.name } /> <br/><br/>

            <Link to="/questions" >
                <button
                    onClick={startQuestion}
                >  
                        Start
                </button>
            </Link>
        </>
    )
}

function mapStateToProps(state) {
    console.log(state.exam)
    return {exam:state.exam}
}

export default connect(mapStateToProps,actions)(Home)