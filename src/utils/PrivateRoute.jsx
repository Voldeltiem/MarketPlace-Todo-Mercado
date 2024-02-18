import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import Context from '../Context/MyContext';
import React from 'react'

const PrivateRoute = () => {

  const usuarioContext = useContext(Context);
  const { tokeN } = usuarioContext;

  return tokeN ? <Outlet /> : <Navigate to="/" /> ;
};

export default PrivateRoute;
