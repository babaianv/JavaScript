import React from "react";
import { Link } from "react-router-dom";

interface PostersProps {
  poster: string;
  index: number;
  title: string; 
  link:string
}

const Posters: React.FC<PostersProps> = ({
  poster,
  index,
  title,
  link
}) => {

    const myStyles: React.CSSProperties = {
        maxWidth: "300px",
      };

  return (
    <div style={myStyles}>
      <img src={poster} alt={`poster${index + 1}`} />
      
      <Link className="linkToEpisode" to={link} target="_blank"><h2>{title}</h2></Link>
    </div>
  );
};

export default Posters;
