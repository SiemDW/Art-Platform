const StrokeCheck = ({  value, onStrokeCheck }) =>{

    return (

        <label> Stroke
            <input  type="checkbox" onChange={(e)=>{

                {onStrokeCheck(e.target.checked ? value = true : value = false)}
               
                
            }} />
        </label>
    )
}

export default StrokeCheck;