import { useState,ReactRouter } from 'react'
import './App.css'
import Login from './components/Login'
//import Dashbord from './components/Dashbord'

function App() {

  return (
    <ReactRouter>
    <Route exact path = "/login" component = {Login}/>
    </ReactRouter>
  )
}

export default App