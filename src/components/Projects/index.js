import React, { useEffect, useState }from 'react';
import ProjectItem from '../ProjectItem/index.js';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { ProjectList } from '../ProjectList/ProjectList';


function Project() {
    const [letterClass, setLetterClass] = useState('text-animate');


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);



    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
                            idx={15} />
                    </h1>
                <div className='projectItem'>
                    {ProjectList.map((project, idx) => {
                        return <ProjectItem id={idx} name={project.name} image={project.image} />;
                    })}
                </div>
                </div>
                <Loader type='pacman' />
            </div>
        </>
    );
}


export default Project