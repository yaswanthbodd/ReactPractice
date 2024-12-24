import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Navbar } from './Navbar';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { InvoiceDisplay } from './components/InvoiceDisplay';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element="Page not found"  />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/invoiceDisplay" element={<InvoiceDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
