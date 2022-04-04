import { About } from "./components/About";
import { Demo } from "./components/Demo";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Lab } from "./components/Lab";
import './styles/css/App.css';

function App() {
  return (
    <div className="Portfolio">
      <Introduction />
      <About />
      <Demo />
      <Lab />
      <Footer />
    </div>
  );
}

export default App;
