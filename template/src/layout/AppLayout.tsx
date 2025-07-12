import React from 'react';

import BottomTabLayout from './BottomNavLayout';
import DrawerLayout from './DrawerLayout';

/**
 * The main layout component for the application.
 * It can include different navigation layouts such as Bottom Tab or Drawer.
 * Currently, it uses DrawerLayout.
 */
const AppLayout = () => {
  return (
    <>
      {/* <BottomTabLayout /> */}
      <DrawerLayout />
    </>
  );
};

export default AppLayout;
