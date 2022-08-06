import React, { useState,useEffect } from 'react';
import './App.css';
import Challenge from './Components/challenge'; 
import Loader from './Components/loader'; 

function App() {
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000);
  },[]);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : <Challenge /> }
    </div>
  );
}

export default App;
