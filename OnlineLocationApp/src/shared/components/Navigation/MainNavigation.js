import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

// Main Navigation
const MainNavigation = props => {
  // Set drawer states
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Open Drawer
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
   // Close Drawer
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {/* if Drawer is Open, show backdrop (design purposes) */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      {/* Side Drawer showed if drawer is opened */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      {/* Main header */}
      <MainHeader>
        {/* Drawer Toggle */}
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>

    </React.Fragment>
  );
};

export default MainNavigation;
