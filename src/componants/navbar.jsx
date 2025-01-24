import logo from "../assets/YogSamrat.png";
import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <nav className=" mb-20 flex item-center justify-between py-1">
        <div className="flex flex-shrink-0 item-center ">
            <img className="m-4 w-16 h-16 rounded-full"  src={logo} alt="logo" />
        </div>
        <div >
            <ul className= "m-9  flex item-center gap-5 red">
            <li a href="Hero.jsx">Home</li>
            <li>About</li>
            <li>Technology</li>
            <li>Experience</li>
            <li>Project</li>
            <li>Contact</li>

            </ul>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
}

export default Navbar;
