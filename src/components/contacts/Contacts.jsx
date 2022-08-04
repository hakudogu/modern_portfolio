import React, { Component } from 'react'
import './contacts.css'
import img1 from './number qr code.png'
import img2 from './email qr code.png'
import img3 from './contact_background.png'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub,  faTwitter }  from '@fortawesome/free-brands-svg-icons'
export class Contacts extends Component {

  render() {
    return (
        <div id='main'>
      <div className='contact_backgroundM'>
        <div className='padding'></div>
        <div className='padding'></div>
        <div className='padding'><h2>Reach Me Out!</h2></div>
        
      <div className='contact_background'>
        <div className='contact_container'>
          {/* <div className='qr'> */}
            <span id='number_qr'><img src={img1}/><p>Mobile No.</p></span>
            {/* </div>           */}
          {/* <div className='qr'> */}
           <span id='email_qr'> <img src={img2}/><p>Email</p></span>
            {/* </div> */}
          <div id='contact_icons'className='contact_icons'>
              {/* <img id='img3'src= {img3} alt='allusion of contacting'/> */}
              <div className='padding'></div>
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
      </div>
      </div>
    )
  }
}

export default Contacts