const NumberPicker = ({value, onNumberChange}) =>{

return (
  <label>
    Amount
    <input
      type="number"
      value={value}
      onChange={(e) => onNumberChange(parseInt(e.target.value, 10))}
    />{" "}
  </label>
);


}


export default NumberPicker;