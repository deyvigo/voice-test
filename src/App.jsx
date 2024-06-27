import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { Buscar } from './pages/buscar/Buscar.jsx'
import { Main } from './pages/main/Main.jsx'
import { Registro } from './pages/registro/Registro.jsx'
import { Ingresar } from './pages/ingresar/Ingresar.jsx'
import { RecorderLayout } from './components/RecorderLayout.jsx'
import { CrearProyecto } from './pages/crear/CrearProyecto.jsx'
import { Home } from './pages/inicio/Home.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/registro' element={ <Registro /> } />
      <Route path='/ingresar' element={ <Ingresar /> } />
      <Route path='/' element={ <Main /> } />
      <Route path='/main' element={ <RecorderLayout /> }>
        <Route path='/main/buscar' element={ <Buscar /> }/>
        <Route path='/main/crear' element={ <CrearProyecto /> }/>
        <Route path='/main/inicio' element={ <Home /> }/>
      </Route>
    </Routes>
  )
}

export default App
