const NumberPicker = ({value, onNumberChange}) =>{

return (
  <>
  <div>
    <label for="number"> Amount </label>
    
      <input
      for="number"
        type="number"
        value={value}
        onChange={(e) => onNumberChange(parseInt(e.target.value, 10))}
      />{" "}
  </div>
</>
);


}


export default NumberPicker;