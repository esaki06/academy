import React from 'react'
import { UseUserContext } from '../context/UserContext'
import { questions } from '../component/Question';

const Result = () =>{
    const {mark} = UseUserContext();
    return(
        <div className='display-5'>
            Your Mark is {mark} / {questions.length}
        </div>
    )
}

export default Result