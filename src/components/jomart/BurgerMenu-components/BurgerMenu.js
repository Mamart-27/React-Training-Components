import React from 'react';
import './BurgerMenu.css';
import Sidebar from './Sidebar';

const BurgerMenu = () => {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <h1>Check out items in the sidebar!</h1>
      </div>
    </div>
  );
}

export default BurgerMenu;    