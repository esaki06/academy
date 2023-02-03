import React from "react";
// import './App.css';
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz";
import Welcome from "./pages/Welcome";
import Result from "./pages/Result";
import Errorpage from "./pages/Errorpage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserContextProvider from "./context/UserContext";


// import Lucky from './component/lucky/lucky';
// import List from './component/list/list';
// import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
// import Life from './component/life/life';
// import Meoww from './component/meoww/meoww';
// import Life from './component/life/life';
// import Rough from './component/rough/rough'
// import React, { useEffect, useState } from "react";


function App() {

  return(
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/result" element={<Result/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/instruction" element={<Instruction/>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </Router>
     </UserContextProvider>
  )

 
    // const [inputarr, setinputarr] = useState([]);
    // const [inputdata, setinputdata] = useState({
    //   name: "",
    //   rollno: "",
    // });
    // function handlechange(e) {
    //   setinputdata({ ...inputdata, [e.target.name]: e.target.value });
    // }
    // let { name, rollno } = inputdata;
    // function handlchange() {
    //   setinputarr([...inputarr, { name, rollno }]);
    //   console.log(inputdata, "input data what we enter");
    //   setinputdata({ name: "", rollno: "" });
    // }
    // function handlechange2() {
    //   console.log("object store in array", inputarr);
    // }
    // return (
    //   <div className="task1">
    //     <input
    //       type="text"
    //       // autoComplete="off"
    //       name="name"
    //       value={inputdata.name}
    //       onChange={handlechange}
    //       placeholder="Enter the name"
    //     />
  
    //     <input
    //       type="text"
    //       // autoComplete="off"
    //       name="rollno"
    //       value={inputdata.rollno}
    //       onChange={handlechange}
    //       placeholder="Enter the rollno"
    //     />
  
    //     <button onClick={handlchange}>Add it</button>
    //     <br />
    //     <button onClick={handlechange2}>check array in console</button>
    //     <br />
  
    //     <table border={1} width="30%" cellPadding={15}>
    //       <tbody>
    //         <tr>
    //           <td>NAME</td>
    //           <td>ROLLNO</td>
    //         </tr>
    //         {inputarr.map((info, ind) => {
    //           return (
    //             <tr key={ind}>
    //               <td>{info.name}</td>
    //               <td>{info.rollno}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>

    // <div className="App">

    // {/* <Counter/> */}
  
    // {/* <Rough/> */}
    // <List></List>
    
    // </div>

    // <>
    // <Router>
    //   <ul>
    //     <li>
    //       <Link to='/Life'>Life</Link>
    //     </li>
    //     <li>
    //       <Link to='/Meoww'>Meoww</Link>
    //     </li>
    //   </ul>

    //   <Routes>
    //     <Route path='/Life' element={<Life/>}></Route>
    //     <Route path='/Meoww' element={<Meoww/>}></Route>
    //   </Routes>

    // </Router>
    // </>

    // <div>
    //   <Lucky name={'Esaki'} age={22} gender={'male'}/>
    // </div>

  // );
}

export default App;
