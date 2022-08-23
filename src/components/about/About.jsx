import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import Views from '../navbar/View/View'
import './about.css'
export class About extends Component {
  render() {
    return (
      <div className='background'>
          <div className='about_background'>
              <div className='about_container'>
                  <h1>A former researcher from the <br/> University of the Philippines</h1>
                  <h2>Detailed experience on CV</h2>
                  
                  <div className='img_container'>
                    <FontAwesomeIcon id='icon'icon={ faFile}/><a target='_blank' href='https://docs.google.com/document/d/1wcXktycPPfSaZNefRMGKOOCaWy90AGIAU55OIJ1ly-M/edit'>
                      <button className='bg-green-800 p-2 border-white'><p className='text-white font-thin text-sm hover:text-lg'>Download</p></button></a></div>
                      <label><p>Download CV</p> </label>  
        
              </div>
              <div className='sidebar'>
                
                  <p>Total number of images edited: <h2>50+</h2></p>
                  <p>Total number of content posted: <h2>20+</h2></p>
                      
              </div>
              <div className='sidebar2'>
                <p>Based on Laguna Philippines</p>
              </div>
              <div className='sidebar3'>
                <p>
                  Grid is my favorite design tool.
                </p>
              </div>
          </div>
     </div>
    )
  }
}

export default About