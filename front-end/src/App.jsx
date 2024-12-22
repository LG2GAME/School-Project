import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/theme.scss";

import Navbar from "@components/navbar/Navbar";
import Hero from "@pages/hero/Hero";
import WhyProtectData from "@pages/WhyProtectData/WhyProtectData";

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
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
