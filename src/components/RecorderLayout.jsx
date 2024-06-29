import { Outlet } from 'react-router'
import { Recorder } from '../Recorder.jsx'
import { NavBar } from './NavBar/NavBar.jsx'

export const RecorderLayout = () => {
  return (
    <>
      <NavBar />
      <Recorder />
      <Outlet />
    </>
  )
}