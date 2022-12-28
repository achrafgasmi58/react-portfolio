import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from "../../assets/images/blue_logo.png";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['u', 'e', 's', 'm', 'i', ' ', 'A', 'c', 'h', 'r', 'a', 'f']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
      let timeout;
    
      timeout = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img src={LogoTitle} alt="developer" />
                  <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}
                  />
                  <br />
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={18}
                  />
                </h1>
                <h2>Full Stack Developer / Digital Marketer / Musician</h2>
                <Link to ="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;