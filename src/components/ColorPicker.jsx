const ColorPicker = ({ value, onColorChange }) => {
  return (
    <div>
      <label htmlFor="color"> Color</label>
      <input
        id="color"
        type="color"
        value={value}
        onChange={(e) => onColorChange(e.target.value.toString())}
      />
    </div>
  );
};

export default ColorPicker;
