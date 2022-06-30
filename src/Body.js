import React from 'react'
import "./Body.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Row, Col} from 'react-bootstrap';

const slideImages = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFffndHFaPTQPoKHquvtFx9HWXfhB_ENqyg&usqp=CAU',
      caption: 'Slide 1'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pLiHxqpAD30YAOdbjOG80AHaEK%26pid%3DApi&f=1',
      caption: 'Slide 2'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hcVnbNPmyHRuN6wY0u3EQwHaE8%26pid%3DApi&f=1',
      caption: 'Slide 3'
    },
  ];

function Body() {
  return (
    <div className='body'>
        <br/>

        <div className="slideshow-container">
        <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                    <div className = "slide-image" style={{'backgroundImage': `url(${slideImage.url})`}}>
                    </div>
                </div>
                ))}
        </Slide>
        </div>

        <br/>
        

        <div className='info-container'>
            <div className='cate-container'>

                <div>
                    <ul className='cate-manu'>
                        <li className='cate-manu-item'>Recommended</li>
                        <li className='cate-manu-item'>Featured this Week</li>
                        <li className='cate-manu-item'>Genre</li>
                        <li className='cate-manu-item'>Country</li>
                    </ul>
                </div>

                <div className='cate-hover-warp'>
                    <div className='cate-submenu'>
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Band</dt>
                            <dd class= 'cate-name'>The Beatles</dd>
                            <dd class= 'cate-name'>Westlife</dd>
                            <dd class= 'cate-name'>Beyond</dd>
                            <dd class= 'cate-name'>Lincoln Parks</dd>
                        </dl>
                    </div>
                    <div className='cate-submenu'>
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Artist</dt>
                            <dd class= 'cate-name'>Michael Jackson</dd>
                            <dd class= 'cate-name'>Taylor Swift</dd>
                            <dd class= 'cate-name'>DECO* 27</dd>
                        </dl>
                    </div>
                    <hr style={{'margin-top': '16px'}}/>
                    <div className='cate-submenu'>
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Songs</dt>
                            <dd class= 'cate-name'>As It Was</dd>
                            <dd class= 'cate-name'>Wait For U</dd>
                            <dd class= 'cate-name'>Falling Back</dd>
                            <dd class= 'cate-name'>Glimpse Of Us</dd>
                        </dl>
                    </div>
                    <div className='cate-submenu'>
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Alblum</dt>
                            <dd class= 'cate-name'>I NEVER LIKED YOU</dd>
                            <dd class= 'cate-name'>Growin' Up</dd>
                            <dd class= 'cate-name'>Breezy</dd>
                        </dl>
                    </div>
                    <hr style={{'margin-top': '14px'}}/>
                    <div className='cate-submenu'style={{'margin-top': '15px'}} >
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Style</dt>
                            <dd class= 'cate-name'>Hip Pop</dd>
                            <dd class= 'cate-name'>Rock</dd>
                            <dd class= 'cate-name'>Jazz</dd>
                            <dd class= 'cate-name'>Popular</dd>
                            <dd class= 'cate-name'>R&B</dd>
                            <dd class= 'cate-name'>Folk</dd>
                        </dl>
                    </div>
                    <hr style={{'margin-top': '30px'}}/>
                    <div className='cate-submenu'>
                        <dl className='cate-list'>
                            <dt class= 'cate-title'>Lang</dt>
                            <dd class= 'cate-name'>English</dd>
                            <dd class= 'cate-name'>Chinese</dd>
                            <dd class= 'cate-name'>Japanese</dd>
                            <dd class= 'cate-name'>French</dd>
                            <dd class= 'cate-name'>German</dd>
                        </dl>
                    </div>
                </div>

            </div>
            

                <div className="popular">
                    <h3>Popular</h3>

                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mDfU2bGBQilOd1NMeuN1YQHaHa%26pid%3DApi&f=1" />
                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iyv4fV8NwaWpY32a9FywPwHaHa%26pid%3DApi&f=1" />
                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BWW_1PoIBMmUyquo3_3vIQHaHa%26pid%3DApi&f=1" />

                    
                    <br/>
                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.JtwyYZM-G7Ix7cLO8sPj4AHaHa%26pid%3DApi&f=1" />
                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.k2XHaJv4IyQKSNcJZLeE0AHaHa%26pid%3DApi&f=1" />
                    <img className='alb-image' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-pT1CkqubagW6oE6eHtjeQHaHa%26pid%3DApi&f=1" />
                </div>
                
 
        </div>

    </div>
  )
}

export default Body