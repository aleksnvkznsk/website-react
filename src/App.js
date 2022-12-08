
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

      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Portfolio></Portfolio>
      <Price></Price>
      <Explanation></Explanation>
      <Services></Services>

    </div>
  );
}

export default App;
