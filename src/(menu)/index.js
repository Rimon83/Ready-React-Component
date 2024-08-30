import React from 'react'
import Menu1 from './(menu1)/Menu1';

const MenuPage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Menu</h1>
      <div className="sub-main-container">
        <div>
          <h1 className="subheading">Menu 1</h1>
          <Menu1/>
        </div>
      </div>
    </div>
  );
}

export default MenuPage