import React, { Component } from 'react'
// import './projects.css'
import img1 from './treasuremap.png'
import img2 from './portfolio img1 small.png'
import img3 from './Shop.jpg'
// import img1 from './Guide to gaming laptop.jpg'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
// import { faFacebook, faLinkedin, faGithub,  faTwitter }  from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react'
import {Link} from 'react-router-dom'
export class Projects extends Component {
  render() {
    return (
      <div className='projects_background w-full'>
        <h1 className='text-4xl font-thin py-20'>Completed Projects</h1>
        <div className='flex flex-col justify-center pb-20 gap-20 mx-auto w-4/5  md:container  md:grid-cols-3 md:grid lg:gap-12 lg:gap-y-16 lg:11-12'>

        <div className='flex flex-col lg:w-1/2 lg:mx-auto justify-center'id='coffeeBean'>
                <h2 className='text-sm '>Lazhoppee Mock E-commerce Site</h2>
                <a className='justify-center mx-auto relative'
                target='_blank' rel='noreferrer' href='https://lazhoppee.vercel.app/'>
                  <div className='flex justify-center h-44 mx-auto'>
                  <img className='rounded-lg object-cover h-full' width='250px' src='https://images.unsplash.com/photo-1542327534-59a1fe8daf73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
                  </div>
                  <div  className='flex flex-row justify-center items-center'>

                <span>Status: Live</span> <Icon icon ="fluent:live-24-filled"/>
                  </div>
                
                <span className='font-light text-sm'>A fully responsive mobile friendly e-commerce site using fakestore API</span>
                </a>
                
                <div className='icons2 grid grid-flow-col font-light text-sm'> 
                  
                  <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
                  </div>
                    <div className='flex flex-col justify-center items-center'><Icon icon="simple-icons:tailwindcss" /><span>TailwindCSS</span>
                </div> 
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                  <Icon icon="simple-icons:vite" />
                  <span>Vite</span>
                  </div>
                  </div>
                <span>Technologies used</span>
              </div>

            <div className='flex flex-col lg:w-1/2 lg:mx-auto justify-center'id='coffeeBean'>
                <h2 className='text-sm'>Coffee Bean Landing Page Clone</h2>
                <a className='justify-center mx-auto relative'
                target='_blank' rel='noreferrer' href='https://coffee-bean-landing-page-clone.vercel.app/'>
                  <div className='flex justify-center mx-auto'>
                  <img className='rounded-lg ' width='250px' height='250px' src={img3}/>
                  <img className='z-10 object-contain translate-y-10 absolute' width='150px' height='20px'src='https://www.coffeebean.com.ph/wp-content/themes/mondays-made-better-theme/dist/images/brand/logo-desktop_59e7c25c.svg' alt='treasure hunt thumbnail'/>
                  </div>
                  <div  className='flex flex-row justify-center items-center'>

                <span>Status: Live</span> <Icon icon ="fluent:live-24-filled"/>
                  </div>
                
                <span className='font-light text-sm'>A React JS web clone</span>
                </a>
                
                <div className='icons2 grid grid-cols-4 font-light text-sm'> 
                  
                  <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
                  </div>
                    <div className='flex flex-col justify-center items-center'><Icon icon="simple-icons:tailwindcss" /><span>TailwindCSS</span>
                </div> 
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
                  </div>
                  </div>
                <span>Technologies used</span>
              </div>
          <div className='project flex flex-col justify-center lg:w-1/2 lg:mx-auto' id='jollibee'>
            <h2 className='font-light text-sm'>Jollibee Landing Page Clone</h2>
            <a rel='noreferrer'target='_blank' href='https://jollibee-clone.vercel.app/'>
              <div className='flex  justify-center'>
                        <img className='justify-center' width='250px' height='250px'src='https://queen.jollibee.com.ph/2021/12/what_we_do.png' alt='Jollibee thumbnail'/>
                </div> 
            <div className='flex flex-row justify-center items-center'>

            <span className='status'>Status: Live </span><Icon icon ="fluent:live-24-filled"/>
            </div>
 
            <span className='font-light text-sm'>A fully responsive clone of the Jollibee landing page</span>
              </a>
            <div className='icons2 font-light text-sm justify-center grid grid-cols-3'> 
              
              <div className='flex flex-col justify-center items-center' ><Icon  icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
               </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
               </div>
            <span>Technologies used</span>
   
          </div>
          <div className='project lg:w-1/2 lg:mx-auto'id='treasure_map'>
            <h2 className='font-light text-sm'>Treasure Hunting Game</h2>
            <a rel='noreferrer'target='_blank' href='https://treasure-map-game.vercel.app/'>
              <div className='flex justify-center'>

              <img width='250px' height='250px'src={img1} alt='treasure hunt thumbnail'/>
              </div>
              <div className='flex flex-row justify-center items-center'>

            <span className='status'>Status: Live</span> <Icon icon ="fluent:live-24-filled"/>
              </div>
            
              
            <span className='font-light text-sm'>A simple Javascript-JQuery treasure hunting game</span>
              </a>
            <div className='font-light text-sm icons2 grid grid-cols-4'> 
              
              <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
               </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
             <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:jquery-fill" /><span>JQuery</span>
             </div> 
               </div>
            <span>Technologies used</span>

            </div>
          <div className='flex flex-col justify-center lg:w-1/2 lg:mx-auto 'id='treasure_map'>
            <h2 className='font-light text-sm'>A Fully Responsive Portfolio</h2>
            <Link to='/'>
              <div className='flex  justify-center'>
              <img width='250px' height='250px'src={img2} alt='treasure hunt thumbnail'/>

              </div>
            <div className='flex flex-row justify-center items-center' >

            <span className='status'>Status: Live </span>
            <Icon icon ="fluent:live-24-filled"/>
            </div>
            
            <span className='font-light text-sm'>A fully responsive Portfolio</span>
              </Link>
            <div className='icons2 grid grid-cols-4 font-light text-sm'> 
              
              <div className='flex flex-col justify-center items-center' ><Icon className='' icon="akar-icons:css-fill" /><span>CSS3</span>
                </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:html-fill" /><span>HTML</span>
               </div>
                <div className='flex flex-col justify-center items-center'><Icon className='' icon="arcticons:learn-javascript" /><span>Javascript</span>
             </div> 
             <div className='flex flex-col justify-center items-center'><Icon className='' icon="akar-icons:react-fill" /><span>React</span>
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
