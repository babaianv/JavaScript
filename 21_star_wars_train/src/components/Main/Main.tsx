import React from "react";
import { friends } from "../../utils";
import hero from "../../Images/main.jpg";
import Friend from "../Friend";
import "./Main.css";

const Main = () => {
  return (
    <main className="container">
      <section className="left_img">
        <img src={hero} alt="hero" />
      </section>

      <section className="right_img">
        <h2>Dream Team</h2>
        {friends.map((item, index) => (
          <Friend key={index} photo={item} i={index} />
        ))}
      </section>
      <p className="farGalaxy">
        Long ago in a galaxy far, far away... The Old Republic has fallen. In
        its ruins, the Sith Order has created the Galactic Empire, subjugating
        planetary systems one by one. The forces of the Rebellion seek to
        overthrow the Dark Emperor and restore free rule in the Galaxy. General
        Obi-Wan Kenobi returns after years of seclusion to once again confront
        the Dark Lord Darth Vader. Joining him on the light side of the Force
        are the young pilot Luke, son of Anakin Skywalker, Senator Princess Leia
        Organa, the legendary Corellian smuggler Han Solo, and his Wookiee
        companion Chewbacca.
      </p>
    </main>
  );
};

export default Main;
