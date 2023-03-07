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
  return (
    <>
      <RangeSlider />
      <StrokeCheck />
      <ColorPicker />
      <NumberPicker 

      value={amount}
      onNumberChange = {setAmount}
      
      
      />
      <Drawing amount={amount} />
    </>
  );
}

export default App;
