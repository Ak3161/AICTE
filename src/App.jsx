import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main-box">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
