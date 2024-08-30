import React from 'react'
import "./Menu1.css"

const Menu1 = () => {
  return (
    <section className="menu1_section">
     <nav className='menu1_nav'>
       <h1>Menu</h1>
       <ul>
         <li>
           <a href="">Appetizers</a>
         </li>
         <li>
           <a href="">Entrees</a>
         </li>
         <li>
           <a href="">Deserts</a>
         </li>
         <li>
           <a href="">Beverages</a>
         </li>
         <li>
           <a href="">About</a>
         </li>
       </ul>
     </nav>
    </section>
  );
}

export default Menu1