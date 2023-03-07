import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Drawing from "./components/Drawing";
import RangeSlider from "./components/RangeSlider";
import StrokeCheck from "./components/StrokeCheck";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RangeSlider />
      <StrokeCheck />
      <Drawing />;
    </>
  );
}

export default App;
