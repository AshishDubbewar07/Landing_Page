import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Experts from './components/Experts'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {
  
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Experts></Experts>
    <NewsLetter></NewsLetter>
    <Cards></Cards>
    <Footer></Footer>
    </>
  )
}

export default App
