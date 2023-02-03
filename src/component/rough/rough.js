import {useState,useEffect} from "react";
import axios from "axios";

export default function List(){

    const[data,setData] = useState([])


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>setData(response.data))
  },[])


    return(
        <div>
            <h1>List of values</h1>
            {data.map((datas,index)=>{
                return(
                    <div key={index}>{datas.title}</div>
                )
            })}
    </div>
    )
}
