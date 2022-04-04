import { image } from "../assets/images";
import '../styles/css/Lab.css';


export const Lab:React.FC = () => {
    return(
        <div className="lab">
            <div className="container">
                <div className="title">
                   <h1>L</h1>
                   <h1>A</h1>
                   <h1>B</h1>
                </div>
                <a href="https://leyban.github.io/Calculator-App/" target='_blank' className="flip-card card1">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={image.calcCard} alt="card for calculator app" className="calc-front" />
                        </div>
                        <div className="flip-card-back">
                            <img src={image.calcMock} alt="mockup for calculator app" className="calc-back" />
                        </div>
                    </div>
                </a>
                <a href="https://leyban.github.io/advanced-tic-tac-toe/" target='_blank' className="flip-card card2">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={image.tictactoeCard} alt="card for tic tac toe app" className="tictac-front" />
                        </div>
                        <div className="flip-card-back">
                            <img src={image.tictactoeMock} alt="mockup for tic tac toe app" className="tictac-back" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}