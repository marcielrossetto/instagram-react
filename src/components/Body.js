import React from 'react';
import SideBar from './SideBar';
import Stories from './Stories';
import Posts from './Posts';

function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}

export default Body;
