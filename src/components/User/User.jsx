import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { useContext } from 'react';
import { DogContext } from '../../context/DogContext';
import NotFound from '../NotFound';

const User = () => {
  const { data } = useContext(DogContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
