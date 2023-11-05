import React from "react";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="block">
        PORTFOLIO
        <div className="blocks">NUOTRAUKA 1</div>
        <div className="blocks">NUOTRAUKA 2</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
