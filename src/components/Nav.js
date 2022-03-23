import React from 'react'
import './Nav.css';
import Hamburgermenu from './Hamburgermenu';

function Nav({setcategory}) {
  return (
    <div className='nav'>
      
        <div className='menu'>
            
            <Hamburgermenu setcategory={setcategory}/>
            
        </div>
        <img  className="logo-img"src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt=''/>
       
         </div>
     
  )
}

export default Nav