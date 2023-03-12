
const ToleranceSlider = ({ value, onToleranceChange }) => {
  return (
    <label>
      <span>Tolerance</span>
      <input
      
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onToleranceChange(parseInt(e.target.value, 10))}
      />
    </label>
  );
};

export default ToleranceSlider;