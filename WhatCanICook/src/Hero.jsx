import React from 'react'
import './Hero.css'

import HeaderImage from './assets/HeaderImage.png'
import WhiteThing from './assets/WhiteThing.png'

const Hero = () => {
  return (
    <section id='Hero'>

      <img
        src={WhiteThing}
        alt=""
        id='WhiteThing'
      />

      <div id='HeroLeft'>
        <h1>
          Cook With <br />
          What <span>You Have</span>
        </h1>

        <p>
          Discover recipes using ingredients already in your kitchen.
        </p>

        <div id='HeroSearch'>
          <input
            type='text'
            placeholder='Type Ingredients (e.g chicken, basil)'
          />

          <button>
            Find Recipes
          </button>
        </div>
      </div>

      <div id='HeroRight'>
        <img src={HeaderImage} alt='Food Bowl' />
      </div>

    </section>
  )
}

export default Hero