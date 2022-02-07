import { MenuItem } from '@mui/material';
import React from 'react';
import {MenuList} from '../helpers/MenuList.js'

function Menu() {
  return (
  
  
  <div>
     <div className="menu">
         <div className="menuTitle">
             <div className="menuList">
                 {MenuList.map((menuItem, key) => {
                   return (
                       
                       <div key={key}>{menuItem.name}
                   </div>

                   )

                 })}
             </div>
         </div>
     </div> 
  </div>

  )
}

export default Menu;
