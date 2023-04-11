import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import JobCategories from './JobCategories';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;