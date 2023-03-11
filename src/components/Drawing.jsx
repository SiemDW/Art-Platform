const Drawing = ({ circles }) => {

  return (
    <svg className="svg-container">
      {circles.map((circle, index) => {
        return (
          <g key={index}>
            <circle
              cx={circle.x}
              cy={circle.y}
              r={circle.radius}
              stroke={circle.strokeCheck ? circle.strokeColor : ""}
              fill={circle.color}
            />
            <path
              d={
                "M" +
                circle.x +
                circle.y +
                "A" + circle.radius +  circle.radius +"0, 0, 0,"+ circle.x +circle.y + "L 125 80 Z"
              }
              fill="green"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default Drawing;
