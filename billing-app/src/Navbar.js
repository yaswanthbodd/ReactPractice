import './App.css';
import {Link} from 'react-router-dom'
export const Navbar=()=>{
    return(
        <div className='navbar'>
            {/* <h1>Navbar</h1> */}
            <Link to="/" className='navbar-link'>Home</Link>
            <Link to="/contact" className='navbar-link'>Contact</Link>
            <Link to="/about" className='navbar-link'>About</Link>
            <Link to="/booking" className='navbar-link'>Booking</Link>
            <Link to="/invoiceDisplay" className='navbar-link'>Invoice</Link>
        </div>
    )
}