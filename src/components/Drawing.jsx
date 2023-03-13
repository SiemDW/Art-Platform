const Drawing = ({ circles }) => {
  

  return (
    <svg  className="svg-container"> 
    <rectangle  className="background-rectangle"  />
      {circles.map((circle, index) => {
        
        
        const pathArray = [
          <path
            d={
              "M" +
              circle.x.toString() +
              " " +
              (circle.y +  circle.radius).toString() +
              "A" +
              circle.radius.toString() +
              " " +
              circle.radius.toString() +
              " " +
              ",0, 0, 1," +
              circle.x.toString() +
              " " +
              (circle.y - circle.radius).toString() +
              " " +
              "L" +
              circle.x.toString() +
              " " +
              circle.y.toString()
            }
            fill={circle.arcs.color}
            strokeWidth="0"
            stroke=""
          />,
          <path 
            d={
              "M" +
              circle.x.toString() +
              " " +
              (circle.y - circle.radius).toString() +
              "A" +
              circle.radius.toString() +
              " " +
              circle.radius.toString() +
              " " +
              ",0, 0, 1," +
              (circle.x + circle.radius).toString() +
              " " +
              circle.y.toString() +
              " " +
              "L" +
              circle.x.toString() +
              " " +
              circle.y.toString()
            }
            fill={circle.arcs.color2}
            strokeWidth="0"
            stroke=""
          />,
          <path
            d={
              "M" +
              circle.x.toString() +
              " " +
              (circle.y + circle.radius).toString() +
              "A" +
              circle.radius.toString() +
              " " +
              circle.radius.toString() +
              " " +
              ",0, 0, 1," +
              (circle.x - circle.radius).toString() +
              " " +
              circle.y.toString() +
              " " +
              "L" +
              circle.x.toString() +
              " " +
              circle.y.toString()
            }
            fill={circle.arcs.color3}
            strokeWidth="0"
            stroke=""
          />,
        ];
        ;
     
        return (
          <g
            transform={
              "rotate(" +
              circle.rotations.toString() +
              " " +
              circle.x.toString() +
              " " +
              circle.y.toString() +
              ")"
            }
            key={index}
          >
            
            <circle
              cx={circle.x}
              cy={circle.y}
              r={circle.radius}
              fill={circle.color}
            />
            {circle.arcs.type === "half" ||
            circle.arcs.type === "third" ||
            circle.arcs.type === "quarter"
              ? pathArray[0]
              : null}
            {circle.arcs.type === "third" || circle.arcs.type === "quarter"
              ? pathArray[1]
              : null}
            {circle.arcs.type === "quarter" ? pathArray[2] : null}
            <circle
              cx={circle.x}
              cy={circle.y}
              r={circle.radius}
              fillOpacity = "0"
              strokeWidth="3"
              stroke={circle.strokeCheck ? circle.strokeColor : ""}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default Drawing;
