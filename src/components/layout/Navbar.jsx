import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/analytics">Analytics</Link>
        </nav>
    )
}
export default Navbar