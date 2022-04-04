import { useEffect, useState } from "react";
import { image } from "../assets/images";
import '../styles/css/About.css';

export const About:React.FC = () => {
    const [gearTrainClass, setGearTrainClass] = useState('gear-train');

    useEffect(()=>{
        setTimeout(() => {
            setGearTrainClass('gear-train spin');
        }, 1000);
    },[]);

    return(
        <div className="about">
            <div className="container">
                <img src={image.gearCover} alt="just a cover" className="cover" />
                <h1>About Me</h1>
                <p>I'm a Mechanical Engineer that is pursuing a career in front end development 
                    because I want to work from home</p>
                <div className={gearTrainClass}>
                    <span></span>
                    <img src={image.gear15face} alt="15 tooth gear with a face" className="g15face" />
                    <img src={image.g15} alt="15 tooth gear" className="g15" />
                    <img src={image.g25} alt="25 tooth gear" className="g25" />
                    <img src={image.g40} alt="40 tooth gear" className="g40" />
                    <img src={image.g100} alt="100 tooth gear" className="g100" />
                </div>
            </div>
        </div>
    )
}