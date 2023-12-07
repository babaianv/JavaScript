import React from 'react'
import './MainHeroInfo.css'
import skywalker from'../../Images/SkyWalker.png'

const MainHeroInfo = () => {
  return (
    <div className='containerAboutMe'>
        
        <h1 className='title'>Luke Skywalker</h1>
        <div className='contentWrapper'>
        <img className='img_skywalker' src={skywalker} alt='skywalker'></img>
        <p className='info'>
        Hello there! I'm Luke Skywalker, a farm boy turned Jedi Knight, and I've
        had quite the journey in a galaxy far, far away. I hail from the desert
        planet of Tatooine, where I grew up on my uncle's moisture farm. Little
        did I know that my destiny would lead me to become one of the key
        figures in the Rebel Alliance's struggle against the tyrannical Galactic
        Empire. My journey began when I stumbled upon a message hidden within a
        droid, R2-D2, that contained a distress call from Princess Leia Organa.
        This set in motion a series of events that saw me teaming up with the
        smuggler Han Solo, the Wookiee Chewbacca, and the wise old Jedi Obi-Wan
        Kenobi. Under Obi-Wan's guidance, I discovered my own latent Force
        sensitivity and embarked on the path to becoming a Jedi. Armed with a
        lightsaber, I faced numerous challenges, including the sinister Darth
        Vader, who, to my shock, turned out to be my father. My training
        continued under the guidance of Yoda, a legendary Jedi Master, as I
        sought to master the ways of the Force and confront the dark forces
        threatening the galaxy. I played a pivotal role in the Battle of Endor,
        where the Rebel Alliance achieved a significant victory against the
        Empire. Throughout my journey, I've faced personal struggles, confronted
        the allure of the dark side, and ultimately redeemed my father, Anakin
        Skywalker, from the clutches of the Sith. My story is one of heroism,
        resilience, and the enduring power of hope in the face of darkness. May
        the Force be with you!
        </p>
        </div>
    </div>
  )
}

export default MainHeroInfo