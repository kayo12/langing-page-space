
import { useState } from 'react';
import { GiExplodingPlanet } from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import {TfiViewList} from 'react-icons/tfi'



export default function Nav(props) {

 const [showMenu, setShowMenu] = useState(false) 

  const moveSideBar = () => setShowMenu(!showMenu)

  return (
    <header className="nav-menu">
      <div className="logo">
       <span> Astros</span> <GiExplodingPlanet id="logo_nav"/>
      </div>
      <nav className="nav-bar">  
        <ul className={showMenu ? 'nav-list active' : 'nav-list hidden'}>
          <li ><TfiViewList onClick={moveSideBar}/></li>
        </ul>
        
        <ul className={showMenu ? 'nav-list hidden' : 'nav-list active'}>
           <li><CgClose onClick={moveSideBar} className='close'/></li>
          <li><a href="#id_planetas">Planetas</a></li>
          <li><a href="#id_satelites">Setéletites</a></li>
          <li><a href="#id_asteroides">Asteroides</a></li>
          <li><a href="https://github.com/kayo12/langing-page-space" target="_blank">Repositório</a></li>
        </ul>
      </nav>
    </header>
  );
}
