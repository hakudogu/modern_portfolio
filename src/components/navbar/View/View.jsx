import React, { Component } from 'react'
import './view.css'
import {Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar';
import About from '../../about/About';
import Projects from '../../projects/Projects';
import Contacts from '../../contacts/Contacts';
import Home from '../../home/Home';
const Views=() => {
    return (
      
                    <Routes>
                        <Route  index path='/' element={<div className='route_background'>{<Home/>}</div>}/>
                        <Route  path='/about' 
                            element = {<About/>}/>
                        <Route  path='/contact'
                            element={<Contacts/>}/>
                        <Route  path='/projects' element=
                            {<Projects/>}/>
                    </Routes>
                
    )
    
};

export default Views