const ColorPicker = ({value, onColorChange}) =>{

  
return(  
<input type="color" value={value} onChange={(e) => onColorChange((e.target.value).toString())} />

)
  
}

export default ColorPicker;