import React from 'react'
import {BsArrowDown} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Welcome = () =>{
    return(
        <center>
            <div className='display-5'>Welcome to the Quiz App</div>
            <br/>
            <div className='display-5'>Click Here to Enter</div>
            <br/>
            <div className='display-5'><BsArrowDown/></div>
            <br/>
            <Link to="/instruction" className='display-5' style={{"textDecoration":"none"}}>Click Here</Link>
        </center>
    )
}

export default Welcome