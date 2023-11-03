import React, { useEffect, useState }from 'react';
import ProjectItem from '../ProjectItem/index.js';
import '../Projects/index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { ProjectList } from '../ProjectList/ProjectList.js';


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
                            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                            idx={15} />
                    </h1>
                    <div className='projectList'>
                        {ProjectList.map((project, idx) => {
                            return <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />;
                        })}
                    </div>
                </div>
                <Loader type='pacman' />
            </div>
        </>
    );
}


export default Project