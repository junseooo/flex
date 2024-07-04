import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";

function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
