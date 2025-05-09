import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/photo.jpg";
// import motion from "framer-motion";
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:item-start">
                        <h1
                      
                        className="pb-16 text-5xl font-Bold tracking-tight lg:mg-16 lg:text-5xl" >Yogesh Firake   Mern stack developer</h1>
                        <span className="pg-gradient-to-r from-pink-300 via-slate-500 to-purplr-500 bg-clip-text text-4xl tracking-tight text-transperent">Front End Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>


                <div className="w-full lg:w-[35%] lg:pl-16">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="Yogesh Firake" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero
