import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { DogContext } from '../../../context/DogContext';
import NotFound from '../../NotFound';

const Login = () => {
  const { login } = useContext(DogContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="createUser" element={<LoginCreate />} />
        <Route path="lostPassword" element={<LoginPasswordLost />} />
        <Route path="resetPassword" element={<LoginPasswordReset />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </div>
    </section>
  );
};

export default Login;
