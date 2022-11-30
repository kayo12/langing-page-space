
import { GiExplodingPlanet } from 'react-icons/gi';
import {TfiViewList} from 'react-icons/tfi'



export default function Nav(props) {

  function moveSideBar(){
      const hideShow = document.querySelectorAll(".nav-list").forEach((e) => {


          if(e.classList.contains("hiden")){
            e.classList.remove("hiden")
            e.classList.add("active")
          }
         
      })

      return hideShow;
    }


  return (
    <header className="nav-menu">
      <div className="logo">
       <span> Astros</span> <GiExplodingPlanet id="logo_nav"/>
      </div>
      <nav className="nav-bar"> 
        <ul className="nav-list hidden">
          <li onClick={moveSideBar}><TfiViewList/></li>
        </ul>
        <ul className="nav-list active">
          <li><a href="#id_planetas">Planetas</a></li>
          <li><a href="#id_satelites">Setéletites</a></li>
          <li><a href="#id_asteroides">Asteroides</a></li>
          <li><a href="https://github.com/kayo12/langing-page-space" target="_blank">Repositório</a></li>
        </ul>
      </nav>
    </header>
  );
}
