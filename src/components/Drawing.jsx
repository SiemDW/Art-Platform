const Drawing = ({ circles }) => {

  return (
    <svg className="svg-container">
      {circles.map((circle, index) => {
        return (
          <circle
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={circle.radius}
            stroke={circle.strokeCheck ? "blue" : ""}
            fill={circle.color}
          />
        );
      })}
    </svg>
  );
};

export default Drawing;
