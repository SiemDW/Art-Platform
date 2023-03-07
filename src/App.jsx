import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Drawing from "./components/Drawing";
import RangeSlider from "./components/RangeSlider";
import StrokeCheck from "./components/StrokeCheck";
import ColorPicker from "./components/ColorPicker";
import NumberPicker from "./components/NumberPicker";

function App() {
  const [amount, setAmount] = useState(100);
  const [radius, setRadius] = useState(10);
  const [strokeCheck, setStrokeCheck] = useState(false);
  return (
    <>
      <RangeSlider value={radius} onRangeChange={setRadius} />
      <StrokeCheck  value={strokeCheck} onStrokeCheck={setStrokeCheck} />
      <ColorPicker />
      <NumberPicker value={amount} onNumberChange={setAmount} />
      <Drawing amount={amount} radius={radius} strokeCheck={strokeCheck}/>
    </>
  );
}

export default App;
