const RangeSlider = ({value,onRangeChange}) =>{
return (
  <label>
    <span>Radius</span>
    <input
      type="range"
      min={10}
      max={50}
      value={value}
      onChange={(e) => onRangeChange(parseInt(e.target.value, 10))}
    />
  </label>
);
   
}


export default RangeSlider;