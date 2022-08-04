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
                    <FontAwesomeIcon id='icon'icon={ faFile}/><a target='_blank' href='https://drive.google.com/file/d/1E-59joJ1jPEjkhqsII8tjF7dl73GiN2O/view?usp=sharing'>
                      <button><p>Download</p></button></a></div>
                      <label><p>Download CV</p> </label>  
        
              </div>
              <div className='sidebar'>
                
                  <p>Total number of images edited: </p>
                  <p>Total number of content posted: </p>
                      
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