import React from 'react';

import './Header.css';
import hero_image from '../../assets/img/hero_image.png'

const Header = () => {
  return (
            <div className="header__container">


            <div className="header-titles column-1">
              <h1>Get Healthy Body <br></br>With The Perfect<br></br> Exercises</h1>
                <p>With our professional trainers.We will guide you with the best programs. <br></br> Man its upon him call mile. An 
                    pasture he himself believe ferrars besides cottage.</p>
            </div>


                 <div className="header__image column-2">

                 <div class="heroBg"></div>

                 <img src={hero_image} alt="" />    

            </div>

        </div>
       


     

                
    
    
  )
}

export default Header;