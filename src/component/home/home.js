import React from 'react';
import Typical from "react-typical"
import "./home.css"
function Home() {

  return (
    <div className='Home-container'>
      <div className='description'>
        <h1 className='header'>
          <span className='hello'> Hello! </span> <br />I’m Soso Kirvalidze
        </h1>
        <div className='describe'>
          <div className="about-me">
            <p>
              I’am  web junior developer based in Gerogia who loves to building  web and proggraming them.
            </p>
            <div className='buttons'>
              <a className='email' href="mailto:soso.kirvalidze777@gmail.com">
                <i class="far fa-envelope-open"></i> <p>Email me</p>
              </a>
              <a href="kirvalidze.pdf" download="soso kirvalidze.pdf" className='cv'>
                <i class="fas fa-download"></i> <span className='getResume'> Get resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='photo'>
      </div>
    </div>
  )
}

export default Home