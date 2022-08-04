import React, { Component } from 'react'
import  ReactDOM from 'react-dom'
import  Img1  from './portfolio img1 small.png'
import Img2 from './coffee almost done.gif'
import styled from 'styled-components'
import './home.css'
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react'

import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub,  faTwitter }  from '@fortawesome/free-brands-svg-icons'

// const styledLink = styled.Link`
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   fontSize: '1rem',
//   color: 'white',
// `
export class Home extends Component {
  render() {
    return (
      <div className='home_background'>
        <div className='landing_container'>
        <div className='landing_section'>
            <div className='one'></div>
               <div className='oneNhalf'></div>
                 <div className='two'>
                <h1 id='h1'>Hello! My name is Carlo</h1>
                <h2 id='h22'>I am a front end developer <br/> and graphic designer</h2>
                <Link to='/about'><button className='comp_button'>Check Resume</button></Link>
                 
                 
                 </div>
                <div className='three'>
                <img id='img1'src={Img1}/>
               </div>
            <div className='threeNhalf'></div>
            <div className='four'></div>
          </div> 
          {/* <div className='skillSet'> */}
         <fieldset >
         <legend><h2>Tools I love to use! </h2>  </legend>
            <div className='skill_container'>
              
              <div className='k'></div>
              <div className='m'></div>
             
              <div className='l'>
                <Icon className='' icon="cib:adobe-photoshop" /><span>Photoshop</span>
                </div>
              <div className='l'>
                <Icon className=''  icon="cib:adobe-premiere" /><span>Premiere</span>
                </div>
              <div className='l'>
                <Icon className='' icon="icon-park-outline:adobe-illustrate" /><span>Illustrator</span>
                </div>
              <div className='l'>
                <Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
              <div className='l'>
                <Icon className='' icon="akar-icons:react-fill" /><span>React</span>
                </div>
              <div className='l'>
                <Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
                </div>
            </div>
            </fieldset>
            {/* </div> */}
          <div className='cta'> 
          <div className='one'></div>
               <div className='oneNhalf'></div>
                 <div className='two'><img id='img2'src={Img2}/>
               
                 </div>
                <div className='three'>
                 <h1 id='h1'>Give me coffee</h1>
                <h2 id='h22'>I will give you design</h2>
               <Link  to='/contact'> <button className='comp_button'><p>Reach Out!</p></button></Link>
               </div>
            <div className='threeNhalf'></div>
            <div className='four'></div> 
          </div>
          </div>
       
          {/* <hr id='hr'/> */}
        <div className='footer'>
        
        <div className='icons'>
              <div className='padding'><p>CONNECT<br/> WITH ME:</p></div>
              <div className='padding'></div>
              <a target='_blank' href="https://www.facebook.com/brizcarlo"> 
                <FontAwesomeIcon icon={faFacebook}/><span><p>Facebook</p></span>
              </a>
                <a target='_blank' href='https://www.linkedin.com/in/carlo-briz-210686aa/'> 
                <FontAwesomeIcon icon={faLinkedin}/><span><p>Linkedin</p></span>
              </a>
                <a target='_blank' href='https://github.com/hakudogu?tab=repositories'> 
                <FontAwesomeIcon icon={faGithub}/><span><p>Github</p></span>
              </a>
                <a target='_blank' href='https://twitter.com/dracula690'> 
                <FontAwesomeIcon icon={faTwitter} /><span><p>Twitter</p></span>
              </a >              
          </div>
        </div>
      </div>
    )
  }
}

export default Home