import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="col-sm-8 text-center"> {/* Réduit la largeur de la colonne */}
      <Outlet />
    </div>
  );
}

export default MainContent;
