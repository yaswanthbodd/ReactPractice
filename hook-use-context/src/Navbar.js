import {Link} from 'react-router-dom'
export const Navbar=()=>{
    return(
        <div>
            <h1>Navbar</h1>
            <Link to='/'>Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">contact</Link>
        </div>
    )
}