import React from 'react';
import SideNav from './SideNav';
import MainContent from './MainContent';
import Ads from './Ads';

const Home = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row content">
        <SideNav />
        <MainContent />
        <Ads />
      </div>
    </div>
  );
}

export default Home;