const RangeSlider = ({value,onRangeChange}) =>{
return (

  <div>
    <label for="range"> <span>Radius</span>  </label>
    
      <input
      id="range"
        type="range"
        min={0}
        max={100}
        value={value}
        step= {1}
    
        onChange={(e) => onRangeChange(parseInt(e.target.value, 10),value,0,100,1)}
      />
    
  </div>
);
   
}


export default RangeSlider;