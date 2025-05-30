import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border  flex flex-wrap text-center  border-neutral-900 pb-4" >
      <h1 className="my-20 size-full text-center text-4xl font-bold">About
        <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex " >
        <div className="w-full lg:w-1/2 sm:w-1 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg: w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-fit text-center	text-justify scroll-pr-px tracking-tighter py-6 pr-4" >{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
