
import { GiExplodingPlanet } from 'react-icons/gi';



export default function Nav(props) {
  return (
    <header className="nav-menu">
      <div className="logo">
       <span> Astros</span> <GiExplodingPlanet id="logo_nav"/>
      </div>
      <nav className="nav-bar"> 
        <ul className="nav-list">
          <li><a href="#id_planetas">Planetas</a></li>
          <li><a href="#id_satelites">Setéletites</a></li>
          <li><a href="#id_asteroides">Asteroides</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}
