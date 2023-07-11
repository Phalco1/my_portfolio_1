import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       }, 3000);
   }, [])

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'elphalco1@gmail',
            'template_u9xqong',
            refForm.current,
            'gsf3VuOe3Gmbr5jTH0kpK'
        )
            .then(
                () => {
                    alert('Message sucessfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
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
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Loader type='pacman' />
        </div>
    </>
    )
}

export default Contact