import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { contact } from "../assets/index";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uihjnu', 'template_i73ev66', form.current, 'e1s-3SvnQkiTM_O8k')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div >
      <div className={`${styles.sectionHeadText} text-center font-semibold py-4 transition-transform transform hover:scale-105 ring-transparent ring-white text-white-400 hover:text-blue-600 mt-12`}>
        Contact Me
      </div>
      {/* Left Side: Form */}
      <div className='flex'>
      <form ref={form} onSubmit={sendEmail} className="p-4 max-w-sm mx-auto ">
        <label className="block text-gray-700 text-sm font-bold mb-2 text-white animate-fade-in">Name</label>
        <input type="text" name="user_name" className="w-full bg-gray-100 border rounded-lg py-2 px-3 mb-2 text-black animate-fade-in" />
        <label className="block text-gray-700 text-sm font-bold mb-2 text-white animate-fade-in">Email</label>
        <input type="email" name="user_email" className="w-full bg-gray-100 border rounded-lg py-2 px-3 mb-2 text-black animate-fade-in" />
        <label className="block text-gray-700 text-sm font-bold mb-2 text-white animate-fade-in">Message</label>
        <textarea name="message" className="w-full bg-gray-100 border rounded-lg py-2 px-3 mb-2 text-black animate-fade-in"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 animate-bounce">
          Send
        </button>
      </form>

      <div className="w-2/5 relative mr-20">
        <div className="border-10 border-gradient-white rounded-full h-80 w-80 mx-auto">
          <img src={contact} alt="contact" className="rounded-full h-80 w-80 mx-auto" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
