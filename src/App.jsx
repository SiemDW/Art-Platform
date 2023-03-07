import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Drawing from "./components/Drawing";
import RangeSlider from "./components/RangeSlider";
import StrokeCheck from "./components/StrokeCheck";
import ColorPicker from "./components/ColorPicker";
import NumberPicker from "./components/NumberPicker";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RangeSlider />
      <StrokeCheck />
      <ColorPicker />
      <NumberPicker />
      <Drawing />
    </>
  );
}

export default App;
