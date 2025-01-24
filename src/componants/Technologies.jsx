import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb}    from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql} from "react-icons/bi";

const Technologies = () => {
    return (
        <div className = "border border-neutral-800 pb-4">
            <h2 className = "my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4"> 
                
                <div className="rounded- 2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className ="text-7xl  text-cyan-300"/>
                </div>
               
                <div className="rounded- 2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className =" text-7xl text-Green-400"/>
                </div>
               
                <div className="rounded- 2xl border-4 border-neutral-800 p-4">
                <SiMongodb className =" text-7xl text-red-400"/>
                </div>
               
                <div className="rounded- 2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className =" text-7xl text-blue-400"/>
                </div>
               
                <div className="rounded- 2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className =" text-7xl text-yellow-400"/>
                </div>  
            
            </div>
        </div>
    );
};
export default Technologies;
