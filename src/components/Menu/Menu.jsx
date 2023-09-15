import React from 'react'
import "./Menu.css"

export const Menu = ({menuOptions, isMenuOpen, scrollDistance}) => {
    
  return (
    <div className='burguer-menu'>
        <h3 className={`web-name ${scrollDistance > 310? "middle-text":""}`}>My Website</h3>
        <div className={`menu-options-container ${!isMenuOpen? "inactive": "active"}`}>
        <ul className={`menu-options ${scrollDistance > 310? "middle-menu":""}`}>
            {menuOptions.map(option => <li key={option}><a href="#" className={`${option.toLowerCase()} ${scrollDistance > 310? "middle-text":""}`} >{option}</a></li> )}
           
        </ul>
        </div>
        
    </div>
  )
}
