import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


export const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       }, 3000);
   }, [])

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_vfif53h','template_u9xqong', refForm.current,'5RzwTc9f6ePgHM6yl')
            .then(
                (result) => {
                    alert(result.text)
                    window.location.reload(false)
                },
                (error) => {
                    alert(error.text)
                }
            )
        
   }

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                    idx={15}
                    />
                </h1>   
                <p>
                    I appreciate everybody that took their time to checkout my website; especially LEARN Academy! I put a lot of time and effort into this page to give value to who stops by. If you want to contact me, please fill out you information and I will contact you immediately!
                    <br></br>
                    <br></br>
                    -Thank you
                    <br></br>
                    <br></br>
                    Paul Gooden
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                    <label>Name</label>
                        <input className='half' type="text" name="user_name" />
                            <label>Email</label>
                                <input className='half'type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                        <input type="submit" className='flat-button' value="Send" />
                    </form>

                </div>
            </div>
            <Loader type='pacman' />
        </div>
    </>
    )
}

export default Contact