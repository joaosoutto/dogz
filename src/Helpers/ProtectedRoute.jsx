import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { DogContext } from '../context/DogContext';

const ProtectedRoute = (props) => {
  const { login } = useContext(DogContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
