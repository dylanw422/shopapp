import React from "react"
import './Home.css'
import vinyl from './vinyl.png'

function Home() {
  return (
    <div>
      <header>
          <h1 id="name">Vinylly.</h1>
          <a href="shopapp">HOME</a>
          <a href="shop">SHOP</a>
          <a href="about">ABOUT</a>
          <a href="checkout">CHECKOUT <span><div>0</div></span></a>
      </header>
      <div id="screen">
        <img alt='' src={vinyl}></img>
        <h1>EXPLORE THE SOUND</h1>
        <h3>Listen to your favorite vinyl records unlike ever before</h3>
      </div>
    </div>
  );
}

export default Home;
