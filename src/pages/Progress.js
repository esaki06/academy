import React from "react";
import { UseUserContext } from "../context/UserContext";

const Progress = () => {
    const {percent} = UseUserContext();
    const width = percent + "%"
    return (
        <>
    <div>
        <div class="progress" role="progressbar"  style={{width:"100%",border:".5px solid black"}} aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
          <div class="progress-bar" style={{width:width}}>{percent}%</div>
        </div>
    </div>
        </>
    )
}

export default Progress