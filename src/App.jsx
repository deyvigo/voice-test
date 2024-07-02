import React from 'react';
import { Routes, Route } from 'react-router'
import { Buscar } from './pages/buscar/Buscar.jsx'
import { Main } from './pages/main/Main.jsx'
import { Registro } from './pages/registro/Registro.jsx'
import { Ingresar } from './pages/ingresar/Ingresar.jsx'
import { RecorderLayout } from './components/RecorderLayout.jsx'
import { CrearProyecto } from './pages/crear/CrearProyecto.jsx'
import { Favoritos } from './pages/favoritos/Favoritos.jsx'
import { Home } from './pages/inicio/Home.jsx'
import { ElegirCategoria } from './pages/categorias/ElegirCategoria.jsx'
import { VistaProyecto } from './pages/vista/VistaProyecto.jsx'
import { Recarga } from './pages/recargar/Recarga.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
      <Route path='/registro' element={ <Registro /> } />
      <Route path='/ingresar' element={ <Ingresar /> } />
      <Route path='/elegir-categoria' element={ <ElegirCategoria /> } />
      <Route path='/' element={ <Main /> } />
      <Route path='/main' element={ <RecorderLayout /> }>
        <Route path='/main/buscar' element={ <Buscar /> }/>
        <Route path='/main/crear' element={ <CrearProyecto /> }/>
        <Route path='/main/inicio' element={ <Home /> }/>
        <Route path='/main/pruebavista' element={ <VistaProyecto /> }/> {/*useParams()*/}
        <Route path='/main/recargar' element={ <Recarga/> }/>
        <Route path='/main/favoritos' element={ <Favoritos/> }/>
      </Route>
    </Routes>
    </>
  )
}

export default App
