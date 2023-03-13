
const ToleranceSlider = ({ value, onToleranceChange }) => {
  return (
    
    <div>
      <label for="Tolerance"> Tolerance  </label>
        <span></span>
        <input
          id="Tolerance"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onToleranceChange(parseInt(e.target.value, 10))}
        />
    </div>
 
  );
};

export default ToleranceSlider;