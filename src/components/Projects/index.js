import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       }, 3000);
   }, [])

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
                    idx={15}
                    />
                </h1>
            </div>
            <Loader type='pacman' />
        </div>
    </>
    )
}


export default Project