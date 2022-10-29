
import { GiExplodingPlanet } from 'react-icons/gi';



export default function Nav(props) {
  return (
    <header className="nav-menu">
      <div className="logo">
        <GiExplodingPlanet id="logo_nav"/>
      </div>
      <nav className="nav-bar"> 
        <ul className="nav-list">
          <li><a href="#">Planetas</a></li>
          <li><a href="#">Setéletites</a></li>
          <li><a href="#">Astros</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}
