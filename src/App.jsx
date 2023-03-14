import { useState } from "react";
import "./App.css";
import Drawing from "./components/Drawing";
import RangeSlider from "./components/RangeSlider";
import StrokeCheck from "./components/StrokeCheck";
import ColorPicker from "./components/ColorPicker";
import NumberPicker from "./components/NumberPicker";
import ToleranceSlider from "./components/ToleranceSlider";

const generateCirle = (color, radius, strokeCheck, rotations, tolerance) => {
  const arcsOptions = [
    "full",
    {
      type: "half",
      color: GiveRandomColorInRange(hexToHSL(color)),
    },
    {
      type: "third",
      color: GiveRandomColorInRange(hexToHSL(color)),
      color2: GiveRandomColorInRange(hexToHSL(color)),
    },
    {
      type: "quarter",
      color: GiveRandomColorInRange(hexToHSL(color)),
      color2: GiveRandomColorInRange(hexToHSL(color)),
      color3: GiveRandomColorInRange(hexToHSL(color)),
    },
  ];

  return {
    // 80 percent of the viewportwidth
    x: Math.random() * (window.innerWidth * 0.8),
    // 70 percent of the viewportheight
    y: Math.random() * (window.innerHeight * 0.7),

    color: GiveRandomColorInRange(hexToHSL(color)),
    radius: addTolerance(radius, tolerance),
    rotations: rotations[Math.floor(Math.random() * 3.999)],
    arcs: arcsOptions[Math.floor(Math.random() * 3.999)],
    strokeCheck,
    strokeColor: GiveRandomColorInRange(hexToHSL(color)),
  };
};

const generateCirles = (amount, color, radius, strokeCheck, tolerance) => {
  const rotateAmount = [0, 90, 180, 270];

  const arr = new Array(amount).fill(null);
  return arr.map(() =>
    generateCirle(color, radius, strokeCheck, rotateAmount, tolerance)
  );
};

const hexToHSL = (H) => {
  // Converting hex to rgb first
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

const GiveRandomColorInRange = (hslColor) => {
  const hslResults = hslColor.map((character, index) => {
    const offsetRange = 20;
    // max and min range 
    let max = 0;
    let min = 0;

    if (character - offsetRange < 0) {
      min = 0;
    } else {
      min = character - offsetRange;
    }
    if (index === 0) {
      if (character + offsetRange > 359) {
        //first value of the HSL is hue, so cant be bigger than 359
        max = 359;
      } else {
        max = character + offsetRange;
      }
      //second and third values are percentages
    } else if (character + offsetRange > 100) {
      max = 100;
    } else {
      max = character + offsetRange;
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

const addTolerance = (radius, tolerance) => {
  let min = 0;
  let max = 0;
  if (radius - tolerance <= 0) {
    min = 0;
  } else {
    min = radius - tolerance;
  }

  max = radius + tolerance;

  return Math.random() * (max - min) + min;
};

const App = () => {
  const [tolerance, setTolerance] = useState(0);
  const [amount, setAmount] = useState(100);
  const [radius, setRadius] = useState(30);
  const [strokeCheck, setStrokeCheck] = useState(false);
  const [color, setColor] = useState("#a2d025");
  const [circles, setCircles] = useState(
    generateCirles(amount, color, radius, strokeCheck, tolerance)
  );

  const handleRangeChange = (value, previousValue) => {
    const tmp = [...circles];

    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };

      if (value < previousValue && tolerance > 0) {
        // if tolerance is not 0, value of radius cant be lowered
        // radius cant be a negative value
        tmpCircle.radius = tmpCircle.radius;
        value = previousValue;
      } else if (value > previousValue) {
        const difference = value - previousValue;
        tmpCircle.radius = tmpCircle.radius + difference;
      } else if (value < previousValue && tolerance === 0) {
        tmpCircle.radius = value;
      }

      return tmpCircle;
    });
    setRadius(value);
    setCircles(updated);
  };

  const handleStrokeCheck = (value) => {
    const tmp = [...circles];
    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };
      tmpCircle.strokeCheck = value;
      return tmpCircle;
    });
    setStrokeCheck(value);
    setCircles(updated);
   
  };

  const handleAmount = (amount) => {
    setAmount(amount);
    setCircles(generateCirles(amount, color, radius, strokeCheck, tolerance));
  };

  const handleToleranceChange = (tolerance) => {
    const tmp = [...circles];
    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };
      tmpCircle.radius = addTolerance(radius, tolerance);
      return tmpCircle;
    });
    setCircles(updated);
    setTolerance(tolerance);
  };

  const handleColorChange = (value) => {
    const tmp = [...circles];
    const updated = tmp.map((circle) => {
      const tmpCircle = { ...circle };
      if (tmpCircle.arcs.color) {
        tmpCircle.arcs.color = GiveRandomColorInRange(hexToHSL(value));
      }
      if (tmpCircle.arcs.color2) {
        tmpCircle.arcs.color2 = GiveRandomColorInRange(hexToHSL(value));
      }
      if (tmpCircle.arcs.color3) {
        tmpCircle.arcs.color3 = GiveRandomColorInRange(hexToHSL(value));
      }
      tmpCircle.color = GiveRandomColorInRange(hexToHSL(value));
      tmpCircle.strokeColor = GiveRandomColorInRange(hexToHSL(value));
      return tmpCircle;
    });
    setCircles(updated);
    setColor(value);
  };

  return (
    <>
      <div className="app-container">
        <h1> Circle Art Generator</h1>

        <div className="input-container">
          <RangeSlider value={radius} onRangeChange={handleRangeChange} />
          <ToleranceSlider
            value={tolerance}
            onToleranceChange={handleToleranceChange}
          ></ToleranceSlider>
          <StrokeCheck value={strokeCheck} onStrokeCheck={handleStrokeCheck} />
          <ColorPicker value={color} onColorChange={handleColorChange} />
          <NumberPicker value={amount} onNumberChange={handleAmount} />
        </div>
        <Drawing circles={circles} backgroundColor={color} />
      </div>
    </>
  );
}

export default App;
