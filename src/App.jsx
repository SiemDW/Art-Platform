import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import RangeSlider from "./components/RangeSlider";
import StrokeCheck from "./components/StrokeCheck";
import ColorPicker from "./components/ColorPicker";
import NumberPicker from "./components/NumberPicker";




const generateCirle = (color, radius, strokeCheck) => ({
  x: Math.random() * 1000,
  y: Math.random() * 1000,
  color: RandomColorValueInRange(hexToHSL(color)),
  radius,
  strokeCheck,
  strokeColor: RandomColorValueInRange(hexToHSL(color))
});

const generateCirles = (amount,color,radius,strokeCheck) => {
  const arr = new Array(amount).fill(null);
  return arr.map(() => generateCirle(color,radius,strokeCheck));
};


const hexToHSL = (H) => {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length === 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  const hslCharacterarray = [h, s, l];

  return hslCharacterarray;
};

const RandomColorValueInRange = (hslColor) => {
  const hslResults = hslColor.map((character, index) => {
    let max = 0;
    let min = 0;

    if (character - 20 < 0) {
      min = 0;
    } else {
      min = character - 20;
    }
    if (index === 0) {
      
      if (character + 20 > 359) {
        max = 359;
      } else {
        max = character + 20;
      }
    } else if (character + 20 > 100) {
      max = 100;
    } else {
      max = character + 20;
    }

    const randomValue = Math.random() * (max - min) + min;
    return { key: index, value: randomValue };
  });

  return (
    "hsl(" +
    hslResults[0].value +
    "," +
    hslResults[1].value +
    "%," +
    hslResults[2].value +
    "%)"
  );
};





function App() {
  const [amount, setAmount] = useState(100);
  const [radius, setRadius] = useState(10);
  const [strokeCheck, setStrokeCheck] = useState(false);
  const [color, setColor] = useState('#a2d025');
  const [circles, setCircles] = useState(generateCirles(amount,color,radius,strokeCheck));
 

  const handleRangeChange = (value) => {
    const tmp = [...circles];
    console.log(tmp)
;    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };
      tmpCircle.radius = value;
      return tmpCircle;
    });
    setRadius(value);
    setCircles(updated);
    
  };



  const handleStrokeCheck = (value) =>{


    const tmp = [...circles];
    const updated = tmp.map((circle)=>{
      const tmpCircle = {...circle};
      tmpCircle.strokeCheck = value;
      return tmpCircle;
    });
     setStrokeCheck(value);
      console.log("strokevalue" ,value);
     setCircles(updated);
     console.log("setcircles is done succesfully",setCircles(updated));
       
   }

  

  const handleAmount = (amount) =>{

   setAmount(amount);
   setCircles(generateCirles(amount,color,radius,strokeCheck));
   
  }


  const handleColorChange = (value) => {
    const tmp = [...circles];
    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };
      tmpCircle.color = RandomColorValueInRange(hexToHSL(value));
      tmpCircle.strokeColor = RandomColorValueInRange(hexToHSL(value));
      return tmpCircle;
    });
    setCircles(updated);
    setColor(value);
  };

  return (
    <>
      <RangeSlider value={radius} onRangeChange={handleRangeChange} />
      <StrokeCheck  value={strokeCheck} onStrokeCheck={handleStrokeCheck} />
      <ColorPicker value={color} onColorChange={handleColorChange} />
      <NumberPicker value={amount} onNumberChange={handleAmount} />
      <Drawing
        circles={circles}
       
      />
    </>
  );
}

export default App;
