import React from 'react'
import Navbar from './Componenets/Navbar'
import "./style.css"
import Home from './Componenets/Home'
import About from './Componenets/About'
import Services from './Componenets/Services'
import Banner from './Componenets/banner'
import Politics from './Componenets/Politics'
import Entertainment from './Componenets/Entertainment'
import Banner2 from './Componenets/Banner2'
import Editors from './Componenets/Editors'
import Cards from './Componenets/cards'
import Banner3 from './Componenets/Banners3'
import Navbar2 from './States/Navbar2'
import Home2 from './States/Home2'
import  "./App.css"
import Apis from './States/Apis'




export default function App() {
  return (
    <div>
       {/* <Navbar/>
       <Home/>
       <Banner/>
       <About/>
       <Services/>
       <Politics/>
       <Entertainment/>
       <Banner2/>
       <Editors/>
       <Cards/>
       <Banner3/>  */}
       {/* <Navbar2/>
       <Home2/> */}
       <Apis/>
    </div>
  )
}
