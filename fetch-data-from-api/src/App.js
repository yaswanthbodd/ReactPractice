// Fetch Data from api axios
import './App.css';
import Axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [name, setName]=useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>setPredictedAge(res.data))
  }
  
  return (
    <div className="App">
      <input placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
