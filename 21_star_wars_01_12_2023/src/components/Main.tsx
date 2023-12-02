import React from "react";
import {friends} from '../utils'
import hero from '../Images/main.jpg'
import Friend from "./Friend";

const Main = () => {
  return (
    <main>
      <section className="left">
        <img src={hero} alt="hero" />
      </section>

      <section className="right">
        <h2>Dream Team</h2>
        {friends.map((item, index) => (
            <Friend key={index} photo={item} i={index}/>
        ))}

      </section>
      <p className="farGalaxy">
        Давным-давно в далекой Галактике... Старая Республика пала. На ее руинах
        Орден ситов создал галактическую Империю, подчиняющую одну за другой
        планетные системы. Силы Альянса стремятся свергнуть Темного Императора и
        восстановить свободное правление в Галактике. Генерал Оби-Ван Кеноби
        возвращается после многолетнего уединения, чтобы снова сойтись в
        поединке с Повелителем Тьмы Дартом Вейдером. Вместе с ним на светлой
        стороне Силы – юный пилот Люк, сын Анакина Скайуокера, принцесса-сенатор
        Лейя Органа, легендарный коррелианский контрабандист Хан Соло и его друг
        вуки Чубакка.
      </p>
    </main>
  );
};

export default Main;

// import React, { Component } from 'react'

// export class Main extends Component {
//   render() {
//     return (
//       <div>Main</div>
//     )
//   }
// }

// export default Main
