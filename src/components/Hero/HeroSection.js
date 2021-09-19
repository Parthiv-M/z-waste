import React from 'react';
import './HeroSection.css';
import gif from "./../../assets/images/img-home.gif"
import {Button} from "./../Button/Button"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={gif} autoPlay loop muted />
      <h1>ZERO HUNGER </h1>
    <p>
      <h1>ZERO WASTE</h1></p>
      <div className='hero-btns'>
       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET STARTED <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
