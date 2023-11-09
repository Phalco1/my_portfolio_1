import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover');
       }, 3000);
   }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                    idx={8}
                    />
                </h1>
                <p>
                I'm Paul Gooden, on a journey to becoming a skilled full stack developer. I strive to distinguish myself in the competitive developer job market by embodying dependability, teamwork, and reliability that teams can count on. Moreover, I aim to showcase my versatility, spanning from frontend to backend development.
                </p>
                <p>
                My previous experience as a Machinist's Mate in the Nuclear Reactor Department has instilled in me a strong sense of confidence and discipline. In that role, I thrived in high-pressure environments with strict deadlines, critical missions, and monthly assessments to evaluate our knowledge. Communication, problem-solving, and mastery of our tasks were vital as they directly impacted the safety and well-being of our team—a level of grit I bring to effectively study and apply knowledge in the field of development.
                </p>
                <p>
                My fascination with technology began at an early age, sparked by Computer App classes and a desire to digitize art and music. Once I acquired the necessary tools—laptop, iPad, and iPhone—I delved deeper into the world of apps, developing a keen interest in their mechanics. I have hands-on experience managing and customizing a Shopify website, where I added content and tailored it to my preferences. This journey has revealed my passion for designing and creating websites while enjoying the process of crafting intuitive app interfaces. My ultimate goal is to leverage my coding skills and become an invaluable asset to the tech/creative industry.

                </p>

                <p>
                I am excited to embark on this career path and look forward to contributing my expertise to organizations in need of a dynamic full stack developer. Let's connect and explore potential opportunities!"
                        <br></br>
                        <br></br>
                    -Very Respectfully,
                        <br></br>
                        <br></br>
                    Paul Gooden
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#16CC13FF" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About