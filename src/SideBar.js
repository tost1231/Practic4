
import React from 'react';
import './SideBar.css';

const SideBar = ({ title }) => {
  return (
    <aside className="sidebar">
      {title}
    </aside>
  );
};

export default SideBar;
