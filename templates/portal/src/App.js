import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/App.css";
import CustomFoooter from "./layout/CustomFooter";
import CustomHeader from "./layout/CustomHeader";
import ChiSiamo from "./layout/pages/chi-siamo/ChiSiamo";
import Home from "./layout/pages/home/Home";
import Prodotti from "./layout/pages/prodotti/Prodotti";
import Contatti from "./layout/pages/contatti/Contatti";
import News from "./layout/pages/news/News";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomHeader />

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/chi-siamo" element={<ChiSiamo/>}/>
          <Route exact path="/i-nostri-prodotti" element={<Prodotti/>}/>
          <Route exact path="/contatti" element={<Contatti/>}/>
          <Route exact path="/news" element={<News/>}/>
          {/* TODO */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>

        <CustomFoooter />
      </Router>
    </div>
  );
}

export default App;
