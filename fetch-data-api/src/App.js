import './App.css';
import Axios from 'axios'
import { useState, useEffect } from 'react';
function App() {
  const [catFact, setCatFact] = useState("");
  const fetchData=()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=> setCatFact(res.data.fact))
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App">
      <button onClick={fetchData}>Genarate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
