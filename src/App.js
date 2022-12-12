import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Price from "./components/price/Price";
import Explanation from "./components/explanation/Explanation";
import Services from "./components/services/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lovestory from "./pages/Lovestory";
import Wedding from "./pages/Wedding";
import Individual from "./pages/Individual";
import Commercial from "./pages/Commercial";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Intro />
        <About />
        <Portfolio />
        <Routes>
          <Route path="/" element={<Wedding />} />
          <Route path="/lovestory" element={<Lovestory />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/commercial" element={<Commercial />} />
        </Routes>
        <Price />
        <Explanation />
        <Services />
      </Router>
    </div>
  );
}

export default App;
