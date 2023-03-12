const RangeSlider = ({value,onRangeChange}) =>{
return (
  <label>
    <span>Radius</span>
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      step= {1}
      
      onChange={(e) => onRangeChange(parseInt(e.target.value, 10),value,0,100,1)}
    />
  </label>
);
   
}


export default RangeSlider;