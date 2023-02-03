import React,{useState,useEffect} from "react";
import axios from "axios";


export default function List(){

    const[data, setData] = useState([])


  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
    console.log(response.data);
    setData(response.data)
    })
    .catch((err) => console.log(err))
  },[])


  const info = data.map ((data, index) =>{
    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
        </tr>
    )
  })
    return(
        <div>
            <h1>List </h1>
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
                {info}
            </table>
            
         
        </div>
    )
}