// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
// eslint-disable-next-line no-unused-vars
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Home/> */}
    </>
  );
}

export default App;
