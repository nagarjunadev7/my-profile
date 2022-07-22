import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactform.css';

const Result = ()=>{
  return(
    <p>message Sent Successfully</p>
  )
}

function Contactform(){
  const[result, showResult] = useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4kvk9ik', 'template_81mjbr3', form.current, 'sTPXHpSkGQbSjL_KT')
      .then((result) => {
        
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
      setInterval(()=>{
        showResult(false);
      },2000)
  }
    return(
    <div className='my_form'>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <div className='row'>{result ? <Result /> : null}</div>
    </form>
    </div>
    )
}

export default Contactform;