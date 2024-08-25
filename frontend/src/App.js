import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AddTask from './Pages/AddTask';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"82vh"}}>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add' element={<AddTask/>}/>
          <Route path='*' element={<h1> Not Found </h1>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
