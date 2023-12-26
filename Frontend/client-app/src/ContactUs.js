import React from "react";
import "./ContactUs.css"
import emailjs from "@emailjs/browser"
import Button from "react-bootstrap/Button";
import { useRef } from 'react'
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_oeudvqe",
            "template_s4sb3fj",
            form.current,
            "DXQVX3dzG3WjgJp37"
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
            toast.dark("Thank you for contacting us!");
            
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
     
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder="Name" name="user_name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="user_email" />
        <label>Subject</label>
        <input type="text" placeholder="Subject" name="subject" />
        <textarea placeholder="Message.." name="message"></textarea>
        <button type="submit"  className="bttn" variant="primary">Send  </button>
        

        <ToastContainer position="top-center"/>
      </form>
    </div>
  );
}
export default ContactUs;
          

