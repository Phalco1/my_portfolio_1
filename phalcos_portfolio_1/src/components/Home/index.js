import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/IMG_0509.PNG';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'u', 'l', ',']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _12`}>,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={0} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={3} />
                </h1>
                <h2>Full-Stack Developer</h2>
                <Link to="/contact" className='flat-button'>
                  CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home