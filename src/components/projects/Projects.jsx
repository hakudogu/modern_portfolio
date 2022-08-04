import React, { Component } from 'react'
import './projects.css'
import img1 from './treasuremap.png'
import img2 from './portfolio img1 small.png'
// import img1 from './Guide to gaming laptop.jpg'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
// import { faFacebook, faLinkedin, faGithub,  faTwitter }  from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react'
import {Link} from 'react-router-dom'
export class Projects extends Component {
  render() {
    return (
      <div className='projects_background'>
        <h1>Completed Projects</h1>
        <div className='projects_container'>
          <div className='project' id='jollibee'>
            <h2>Jollibee Landing Page Clone</h2>
            <a rel='noreferrer'target='_blank' href='https://jollibee-clone.vercel.app/'>
              <img width='250px' height='250px'src='https://queen.jollibee.com.ph/2021/12/what_we_do.png' alt='Jollibee thumbnail'/>
            <br/><span className='status'>Status: Live <Icon icon ="fluent:live-24-filled"/></span><br/>
              {/* <p>A jollibee landing page clone</p> */}
            <span>A fully responsive clone of the Jollibee landing page</span>
              </a>
            <div className='icons2'> 
              
              <div><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
               </div>
                <div><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
               </div>
            <span>Technologies used</span>
   
          </div>
          <div className='project'id='treasure_map'>
            <h2>Treasure Hunting Game</h2>
            <a rel='noreferrer'target='_blank' href='https://github.com/hakudogu/treasure-map-game/blob/main/find%20the%20treasure.html'>
              <img width='250px' height='250px'src={img1} alt='treasure hunt thumbnail'/>
            <br/><span className='status'>Status: non-live <Icon icon ="fluent:live-off-24-filled"/></span><br/>
              {/* <p>A jollibee landing page clone</p> */}
            <span>A simple Javascript-JQuery treasure hunting game</span>
              </a>
            <div className='icons2'> 
              
              <div><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
               </div>
                <div><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
             <div><Icon className='' icon="akar-icons:jquery-fill" /><span>JQuery</span>
             </div> 
               </div>
            <span>Technologies used</span>

            </div>
          <div className='project'id='treasure_map'>
            <h2>A Fully Responsive Portfolio</h2>
            <Link to='/'>
              <img width='250px' height='250px'src={img2} alt='treasure hunt thumbnail'/>
            <br/><span className='status'>Status: Live <Icon icon ="fluent:live-24-filled"/></span><br/>
              {/* <p>A jollibee landing page clone</p> */}
            <span>A fully responsive Portfolio</span>
              </Link>
            <div className='icons2'> 
              
              <div><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
               </div>
                <div><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
             <div><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
               </div>
               </div>
            <span>Technologies used</span>
          </div>
        </div>
        <div className='bottom_portion'>
        <hr/>
        <h1>Upcoming Projects</h1>
        <h2>Gallery of Every Edited Image</h2>
        <h2>E-commerce site</h2>
        <h2>Crypto Price-tracker site</h2>
        </div>
      </div>
    )
  }
}

export default Projects