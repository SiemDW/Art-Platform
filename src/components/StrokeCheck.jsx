const StrokeCheck = ({value, onStrokeCheck }) =>{

    return (

        <label> Stroke
            <input  type="checkbox" onChange={(e)=>{
                {e.target.checked
                  ? onStrokeCheck((value = true))
                  : onStrokeCheck((value = false)); }
                
            }} />
        </label>
    )
}

export default StrokeCheck;