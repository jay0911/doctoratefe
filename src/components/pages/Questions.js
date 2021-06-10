import React from 'react';
import {Link} from 'react-router-dom'

import { connect } from "react-redux";
import * as actions from '../../actions/examAction'

const Questions = ({exam,getQuestion}) => {

    return(
        <>
            <h1>QUESTIONS</h1>
            
            <button
                onClick={getQuestion}
            >  
                    Start

            </button>
            <h1>QUESTIONS</h1>
        </>
    )
}

function mapStateToProps(state) {
    console.log(state.exam)
    return {exam:state.exam}
}

export default connect(mapStateToProps,actions)(Questions)