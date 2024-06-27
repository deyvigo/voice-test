import { Outlet } from 'react-router'
import { Recorder } from '../Recorder.jsx'

export const RecorderLayout = () => {
  return (
    <>
      <Recorder />
      <Outlet />
    </>
  )
}