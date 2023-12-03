import React from "react";

const Posters: React.FC<{ poster: string; index: number }> = ({
  poster,
  index,
}) => {

    const myStyles: React.CSSProperties = {
        maxWidth: "300px",
      };
  return (
    <div style={myStyles}>
      <img src={poster} alt={`poster${index + 1}`} />
    </div>
  );
};

export default Posters;
