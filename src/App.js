import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DogProvider } from './context/DogContext';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Header/Login/Login';
import User from './components/User/User';
import ProtectedRoute from './Helpers/ProtectedRoute';
import Photo from './components/Photo/Photo';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DogProvider>
          <Header />
          <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRoute path="/account/*" element={<User />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
        </DogProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
