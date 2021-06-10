import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
import { connect } from "react-redux";
import * as examAction from '../actions/examAction'

const Navbar = ({genericUserChange,name}) => {

    const endQuestion = () => {
        var currentTime = new Date()
        genericUserChange("dateFinished",currentTime)
    }; 

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <label className="navbar-logo">
                         {name?
                            'Goodluck ' + name: 'Welcome to your reviewer :)'}
                    </label>

                    <div align="right" className="nav-links">
                        <button
                            onClick={endQuestion}
                        >  
                                End the exam
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )

};

function mapStateToProps(state) {
    return {test:state.test,name:state.exam.user.name}
}

export default connect(mapStateToProps,examAction)(Navbar)