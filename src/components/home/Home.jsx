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
        <div className='landing_section py-20 pb-40'>
            <div className='one'></div>
               <div className='oneNhalf'></div>
                 <div className='two'>
                <h1 id='h1'>Hello! My name is Carlo</h1>
                <h2 id='h22'>I am a front end developer <br/> and graphic designer</h2>
                <Link to='/about'><button className='comp_button'>
                  <p className='p-1 hover:text-sm text-xs'>
                    Check Resume
                    </p>
                    </button></Link>
                 
                 
                 </div>
                <div className='three'>
                <img id='img1'src={Img1}/>
               </div>
            <div className='threeNhalf'></div>
            <div className='four'></div>
          </div> 
          {/* <div className='skillSet'> */}
         <fieldset >
         <legend className='text-xs'><h2>Tools I love to use! </h2>  </legend>
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
          <div className='cta py-20 pb-40'> 
          <div className='one'></div>
               <div className='oneNhalf'></div>
                 <div className='two'><img id='img2'src={Img2}/>
               
                 </div>
                <div className='three gap-6'>
                 <h1 className='text-4xl' id='h1'>Give me coffee</h1>
                <p id='h22' className='text-sm'>I will give you design</p>
               <Link  to='/contact'>
                <button className='comp_button flex'>
                <p className='p-2 align-center text-center justify-center text-xs hover:text-center hover:p-3 hover:text-sm'>
                  Reach Out!
                  </p>
                  </button>
                  </Link>
               </div>
            <div className='threeNhalf'></div>
            <div className='four'></div> 
          </div>
          </div>
       
          {/* <hr id='hr'/> */}
        <div className='bg-slate-300'>
        <h2 className='text-sm pt-2'><i>
          Connect With Me!
          </i>
          </h2>
        <div className='grid grid-cols-4 w-4/5 md:w-1/2 mx-auto text-sm py-4'>
              
              <div className=''>

              <a target='_blank' href="https://www.facebook.com/brizcarlo"> 
                <FontAwesomeIcon className=' hover:text-3xl hover:text-sky-700' icon={faFacebook}/><span><p>Facebook</p></span>
              </a>
              </div>
              <div className=''>
                <a className=''target='_blank' href='https://www.linkedin.com/in/carlo-briz-210686aa/'> 
                <FontAwesomeIcon className='hover:text-teal-700 hover:text-3xl' icon={faLinkedin}/><span><p>Linkedin</p></span>
              </a>
                
              </div>
              <div className=''>
                <a target='_blank' href='https://github.com/hakudogu?tab=repositories'> 
                <FontAwesomeIcon className=' hover:text-3xl hover:text-gray-900' icon={faGithub}/><span><p>Github</p></span>
              </a>
                
              </div>
              <div className=''>
                <a target='_blank' href='https://twitter.com/dracula690'> 
                <FontAwesomeIcon className=' hover:text-3xl hover:text-sky-400'  icon={faTwitter} /><span><p>Twitter</p></span>
              </a >              
                
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home