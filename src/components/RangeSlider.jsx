const RangeSlider = ({ value, onRangeChange }) => {
  return (
    <div>
      <label htmlFor="range">
        Radius
      </label>

      <input
        id="range"
        type="range"
        min={0}
        max={100}
        value={value}
        step={1}
        onChange={(e) => onRangeChange(parseInt(e.target.value, 10), value)}
      />
    </div>
  );
};

export default RangeSlider;
