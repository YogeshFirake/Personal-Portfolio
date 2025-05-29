import Hero from "./componants/Hero";
// import Navbar from "./componants/navbar";
import About from "./componants/About";
import Technologies from "./componants/Technologies";
import Experience from "./componants/Experience";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";
import logo from "../src/assets/YogSamrat.png";
// import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <nav className=" mb-20 flex item-center justify-between py-1 scroll-smooth">
          <div className="flex flex-shrink-0 item-center ">
            <img className="m-4 w-16 h-16 rounded-full" src={logo} alt="logo" />
          </div>
          <div>
            <ul className="m-7  flex item-center gap-5 bg-white radius-3 rounded-full px-4 py-2 text-neutral-900 font-bold text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <li>
                <a href="#hero-section" className=" hover:text-[#05432c]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-section" className=" hover:text-[#05432c]">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technologies-section"
                  className=" hover:text-[#05432c]"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#experiance-section" className=" hover:text-[#05432c]">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects-section" className=" hover:text-[#05432c]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact-section" className=" hover:text-[#05432c]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
          </div>
        </nav>
        <div id="hero-section">
          <Hero />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="technologies-section">
          <Technologies />
        </div>
        <div id="experiance-section">
          <Experience />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
        <div id="contact-section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
