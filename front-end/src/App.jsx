import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NicknameProvider } from "./context/UserContext";

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
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NicknameProvider>
              <div>
                <Navbar />
                <div className="container">
                  <Hero />
                  <WhyProtectData />
                  <WhatItIs />
                  <YourWebData />
                  <Game />
                  <Footer />
                </div>
              </div>
            </NicknameProvider>
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
        <Route
          path="/game"
          element={
            <NicknameProvider>
              <div className="container">
                <Quiz /> {/* Komponent quizu */}
              </div>
            </NicknameProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
