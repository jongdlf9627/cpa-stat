import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stat from "./pages/Stat";
import Graph from "./pages/Graph";
import Header from "./pages/Header";
import Foot from "./pages/Footer";
function App(props: any) {
  return (
    <>
      {/* <Router> */}
      <Header props={props} />
      <Routes>
        <Route path="/" element={<Stat name="stat" />} />
        <Route path="/graph" element={<Graph name="graph" />} />
      </Routes>
      <Foot />
      {/* </Router> */}
    </>
  );
}

export default App;
