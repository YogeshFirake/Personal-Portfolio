import { CONTACT } from "../constants";

const contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20"> 
    <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
    <div className="text-center tracking-tighter">
        <p className="my-4">{ CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className= "border-b">{CONTACT.email}</a>
        <br/>
        <a href="#" className= "border-b">{CONTACT.Linkedin} </a>

        </div>      
    </div>
  );
};

export default contact
