import { Outlet, Navigate } from "react-router"

export const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/ingresar" />
}