import React, { Component } from 'react'
import './view.css'
import {Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar';
import About from '../../about/About';
import Projects from '../../projects/Projects';
import Contacts from '../../contacts/Contacts';
import Home from '../../home/Home';
import Letter from '../../letter/Letter';
const Views=() => {
    return (
      
                    <Routes>
                        <Route  index path='/' exact element={<div className='route_background'>{<Home/>}</div>}/>
                        <Route  path='/about' exact
                            element = {<About/>}/>
                        <Route  path='/contact'exact
                            element={<Contacts/>}/>
                        <Route  path='/projects' exact
                        element={<Projects/>}/>
                        <Route path='/letter' exact
                         element= {<Letter/>}/>
                         <Route path='/' render={() => <div className='text-black text-4xl'>404</div>} />
                    </Routes>
                
    )
    
};

export default Views