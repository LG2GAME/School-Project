import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/theme.scss";

import Navbar from "@components/navbar/Navbar";
import Hero from "@pages/hero/Hero";
import WhyProtectData from "@pages/WhyProtectData/WhyProtectData";
import WhatItIs from "@pages/whatItIs/WhatItIs";
import YourWebData from "@pages/yourWebData/YourWebData";
import Footer from "@pages/footer/Footer";
import Protect from "@pages/protect/Protect";

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
                {/* TU BEDZIE GRA */}
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="security">
          <Route
            path="basic"
            element={
              <div>
                <div className="container">
                  <Protect item="basic" />
                </div>
              </div>
            }
          />
          <Route
            path="advanced"
            element={
              <div>
                <div className="container">
                  <Protect item="advanced" />
                </div>
              </div>
            }
          />
          <Route
            path="expert"
            element={
              <div>
                <div className="container">
                  <Protect item="expert" />
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
