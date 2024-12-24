import './App.css';
import { useState, useEffect } from 'react';
import PdfTemplate from './pdfs/Template'

function App() {
  const [InvoiceNumber, setInvoiceNumber]=useState('');
  const [Dates,setDates] = useState('');
  const [view,setView] =useState(true);

  useEffect(()=>{
    const current = new Date();
    const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    setDates(date)
  },[]);

  const create = ()=>{
    setView(false);
  }
  return (
    <>  
    {  
    view?
    <div className="App">
      <div className='containers'>
        <div className='form'>
          <div className='inputs'>
            <input type="text" placeholder='Invoice Number..' value={InvoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)}/>
          </div>
          <div className='buttons'>
            <button onClick={create}>Create</button>
          </div>
        </div>
      </div>
    </div>
    : <PdfTemplate InvoiceNumber={InvoiceNumber} date={Dates}/>
    }
    </>

  );
}

export default App;
