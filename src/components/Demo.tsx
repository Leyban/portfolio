import { image } from "../assets/images";
import '../styles/css/Demo.css';

export const Demo:React.FC = () => {
    return(
        <div className="demo">
            <div className="container">
                <h1>Demo</h1>
                
                <a href="https://leyban.github.io/easybank-landing-page/" className="easybank-card" target="_blank">
                    <img src={image.EasybankCard} alt="easybank card"/></a>
                <a href="https://leyban.github.io/clipboard-landing-page/" className="clipboard-card" target="_blank">
                    <img src={image.ClipboardCard} alt="clipboard card"/></a>
                <a href="https://leyban.github.io/fylo-dark-theme-landing-page/" className="fylo-card" target="_blank">
                    <img src={image.FyloCard} alt="fylo card"/></a>
                <a href="https://leyban.github.io/crowdfunding-page/" className="crowdfund-card" target="_blank">            
                    <img src={image.CrowdfundCard} alt="crowdfund card"/></a>

                <div className="display">
                    <p className="pick-a-card">Pick a card</p>
                    <p className="any-card">any card</p>
                    <img src={image.easybankDesign} alt="mockup easybank page" className="easybank-design" />
                    <img src={image.clipboardDesign} alt="mockup clipboard page" className="clipboard-design" />
                    <img src={image.fyloDesign} alt="mockup fylo page" className="fylo-design" />
                    <img src={image.crowdfundDesign} alt="mockup crowdfund page" className="crowdfund-design" />
                </div>
            </div>
            
        </div>
    )
}