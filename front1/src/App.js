import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './login';
import Signup from './signup';
import Kanban from './components/Kanban'; // Import your Kanban component
import CreateProject from './components/CreateProject';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
// import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [id,setId]=useState([]);
  useEffect(() => {
    try{
      const storedId = localStorage.getItem('id');
      
 
      if (storedId) {
        setId(JSON.parse(storedId));
      }
      
    }
    catch{
     
    }
  }, []);
  const getState=(childData)=>{
    setId(childData);
    console.log(childData,"chioasfnl")
    localStorage.setItem('id', JSON.stringify(childData));
  }
  return (

      <Routes>
      {console.log(id)}
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login getState={getState}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/kanban" element={<Kanban id={id} />} />
        <Route path="/createproject" element={<CreateProject/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
  );
}

export default App;
