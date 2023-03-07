const Drawing = ({amount}) =>{
       const circleAmount =[];
       for (let i = 0; i < amount; i++) {
         circleAmount.push(i);
       } 

       return(

         <svg  className="svg-container" >  
         
          {circleAmount.map(index =>{

        return (
          <circle key={index}
            cx={(Math.random() * 2000).toString()}
            cy={(Math.random() * 2000).toString()}
            r="50"
          />
        );
       })}
          </svg>
       )
      

   
};

export default Drawing;