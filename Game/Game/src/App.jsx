import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './Components/Square'
import Board from './Components/Board'
import Game from './Components/Game'
import Users from './Components/Users'

function App() {

  return (
    <>
    <Game/>
    <Users/>
    </>
  )
}

export default App
