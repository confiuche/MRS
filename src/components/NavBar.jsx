import { Link } from "react-router-dom"
import mrs_logo from "../assets/mrs_logo.jpeg"
import "../components/NavBar.css"

function NavBar() {
    return (
        <>
          <nav style={{"display":"flex"}}>
          <Link to = "/"><img src={mrs_logo} className="logo" alt="Vite logo" /></Link>
            <ul >
                <li><Link to = "AboutUs">ABOUT US</Link></li>
                <li><Link to = "ContactUs">CONTACT US</Link></li>
            </ul>
          </nav>
        </>
    )
}
export default NavBar