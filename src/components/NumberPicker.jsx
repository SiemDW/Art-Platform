const NumberPicker = ({value, onNumberChange}) =>{

return (
  <>
    <div>
      <label for="number"> Amount </label>
      <input
        for="number"
        type="number"
        min="0"
        max="1000"
    
        value={(value)}
        onChange={(e) =>  {
          if(parseInt(e.target.value) >= 1 && parseInt(e.target.value) < 1001  )
          onNumberChange(parseInt(Math.round(e.target.value, 10)))
        }  }
      />{" "}
    </div>
  </>
);


}


export default NumberPicker;