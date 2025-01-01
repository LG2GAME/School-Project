import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.scss";
import "@styles/theme.scss";

import Navbar from "@components/navbar/Navbar";
import Hero from "@pages/hero/Hero";
import WhyProtectData from "@pages/WhyProtectData/WhyProtectData";
import WhatItIs from "@pages/whatItIs/WhatItIs";
import YourWebData from "@pages/yourWebData/YourWebData";
import Footer from "@pages/footer/Footer";
import Protect from "@pages/protect/Protect";
import Game from "@pages/game/Game";
import Results from "@pages/game/results/Results";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="container">
                <Hero />
                <WhyProtectData />
                <WhatItIs />
                <YourWebData />
                <Quiz />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="security">
          <Route
            path="basic"
            element={
              <div className="container">
                <Protect item="basic" />
              </div>
            }
          />
          <Route
            path="advanced"
            element={
              <div className="container">
                <Protect item="advanced" />
              </div>
            }
          />
          <Route
            path="expert"
            element={
              <div className="container">
                <Protect item="expert" />
              </div>
            }
          />
        </Route>
        <Route path="game">
          <Route
            path=""
            element={
              <div className="container">
                <Game />
              </div>
            }
          />
          <Route
            path="results"
            element={
              <div className="container">
                <Results />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
