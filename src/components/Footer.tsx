import { image } from "../assets/images";
import '../styles/css/Footer.css';
import { useState } from 'react';

export const Footer:React.FC = () => {
    const [copied, setCopied] = useState('nada');
    const handleCopy = () => {
        navigator.clipboard.writeText('leybanlazada@gmail.com');
        setCopied('copied');
        setTimeout(() => {
            setCopied('nada');
        }, 3000);
    }
    
    return(
        <div className="footer">
            <div className="title">
                <h1>CONTACT ME</h1>
            </div>
            
            <div className="info">
                <div className="container">
                    <div className="email" onClick={() => handleCopy()}>
                        <div className="logo">
                            <img src={image.mail} alt="mail" className="mail" />
                            <img src={image.copy} alt="copy" className="copy" />
                        </div>
                        <div className="text">
                           <h2>leybanlazada@gmail.com</h2> 
                           <p className={copied} >copied to clipboard</p>
                        </div>
                    </div>
                    <div className="credentials">
                        <a href="https://github.com/Leyban" target='_blank' className="github">
                            <img src={image.logoGithub} alt="github" className="base" />
                            <img src={image.logoGithubBlue} alt="github" className="hover" />
                        </a>
                        <a href="https://www.linkedin.com/in/leyban/" target='_blank' className="linkedin">
                            <img src={image.logoLinkedIn} alt="linkedin" className="base" />
                            <img src={image.logoLinkedInBlue} alt="linkedin" className="hover" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}