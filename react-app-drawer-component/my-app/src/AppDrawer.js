import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import './AppDrawer.css';

export default function AppDrawer({menuHeading, menuItems}) {
  const [isOpened, setIsOpened] = useState(false);
  const [lastClicked, setLastClicked] = useState('');

  function handleLastClicked(item) {
    item !== lastClicked && setLastClicked(item);
    handleMenu();
  }

  function handleMenu() {
    setIsOpened(!isOpened);
  }


  return (
    <div className='container'>
      {!isOpened && <button className='menu-button' onClick={handleMenu}><FaBars size={28} /></button>}
      <div className={isOpened ? 'menu show' : 'menu hide'}>
        <h2 className='menu-heading'>{menuHeading}</h2>
        <ItemLinks items={menuItems} handleLinkClick={handleLastClicked} />
      </div>
      <div className='overlay'
        onClick={handleMenu}
        style={{ opacity: isOpened ? 0.5 : 0, pointerEvents: isOpened ? 'all' : 'none' }}>
      </div>
      <h1 className='view-title'>{lastClicked}
        {lastClicked === 'Lamberto' && <ToggleLamberto />}
      </h1>
    </div>
  )
}

function ItemLinks({items, handleLinkClick}) {
  const itemLinks = items.map((item) => <button className='menu-item' key={item} onClick={() => handleLinkClick(item)}>{item}</button>)

  return (
    <>
      {itemLinks}
    </>
  )
}

function ToggleLamberto() {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(!isHover);
  }

  return (
    <img onMouseOver={handleHover} onMouseOut={handleHover} src="https://media.licdn.com/dms/image/D5603AQHskoJ15lo5Ww/profile-displayphoto-shrink_400_400/0/1678146443075?e=1685577600&v=beta&t=xAfCn2tlCv7VHsJ-aGWfsa1fjKo511pO-5Wlrc3iXT0" className={isHover ? "App-logo-fast" : "App-logo"} alt="Lamberto" />
  );
}
