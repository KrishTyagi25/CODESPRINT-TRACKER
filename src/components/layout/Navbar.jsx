import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav className="bg-zinc-800 px-6 py-4 flex justify-between items-center shadow-md">

            {/* Logo*/}
            <h1 className="text-xl fon-bold tracking-wide">
                CodeSprint
            </h1>

            {/*Links */}
            <div className= "space x-6">
                <Link to = "/" className = "hover: text-blue-400 transition">
                Dashboard
                </Link>

                <Link to ="/analytics" className="hover:text-blue-400 transition">
                Analytics
                </Link>
            </div>
        </nav>
    )
}
export default Navbar;