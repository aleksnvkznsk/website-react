import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Price from "./components/price/Price";
import Explanation from "./components/explanation/Explanation";
import Services from "./components/services/Services";

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Portfolio />

      <Price />
      <Explanation />
      <Services />
    </div>
  );
}

export default App;


