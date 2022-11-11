import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

import Image from "next/image";
import earth from "../assests/img/mars.jpg";

export default function Planetas(props) {

  function scrollMove(event) {
    let eve = event.target.id
    let count = 0;
    let planetlist = document.querySelectorAll(".planet-cards");
    let maxPlanetList = planetlist.length


    if (count >= maxPlanetList) {
      count = 0;
    }

    if (count < 0) {
      count = maxPlanetList - 1;
    }

      console.log("Entrou na função")
    if(eve == "next" ){
      console.log("Entrou no next")
      count += 1;
   
  }
    if(eve == "after") {
      console.log("Entrou no after")
      count -= 1;
  }

  planetlist[count].scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })
 
  }

  return (
    <section id="id_planetas" className="planets-section">
      <span className="title-section">Planetas</span>
      <div className="planet">
        <button
          id="after"
          onClick={(e) => scrollMove(e)}
          className="btn-before"
        >
          <BsChevronCompactLeft className="btn-before-icon" />
        </button>
        <button id="next" onClick={(e) => scrollMove(e)} className="btn-after">
          <BsChevronCompactRight className="btn-after-icon" />
        </button>
        <div className="planet-list">
          <div className="planet-cards">
            <img
              src="/assests/img/mars.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Marte</span>
              <p className="planet-description">
                Marte, conhecido como Planeta Vermelho, possui características
                estruturais bastante semelhantes às da Terra. Apresenta uma
                superfície marcada por grandes crateras e pela ocorrência de
                diversos depósitos minerais. Marte possui dois satélites
                naturais, e é um dos planetas mais estudados pelas ciências
                astronômicas.
              </p>
              <p className="planet-description">Massa (KG): 0.6418 x 1024</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/earth.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Terra</span>
              <p className="planet-description">
                O planeta Terra é o único do Sistema Solar em que há presença
                confirmada de formas de vida. Tal fato é possível mediante
                questões físicas, com a disponibilidade de água e a presença de
                uma atmosfera bastante desenvolvida. A Terra é um planeta
                rochoso, formado por silicatos e basaltos, além de apresentar
                diversos recursos minerais. A Lua é seu único satélite natural.
              </p>
              <p className="planet-description">Massa (KG): 5.9736 x 1024</p>
            </div>
          </div>
          <div id="teste" className="planet-cards">
            <img
              src="/assests/img/plutao.png"
              alt="Earth"
              className="planet-img"
            />
            <div  className="planet-content">
              <span className="planet-name">Plutão</span>
              <p className="planet-description">
                O planeta-anão Plutão era considerado um planeta até o ano de
                2006. A partir de então, por meio de estudos astronômicos, a
                União Astronômica Internacional (UAI) optou por rebaixá-lo à
                categoria planeta-anão em razão do seu tamanho reduzido.
                Portanto, desde 2006, o Sistema Solar conta com apenas oito
                planetas.
              </p>
              <p className="planet-description">Massa (kG): 1.3 x 1022 Kg</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/mercurio.webp"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Mercurio</span>
              <p className="planet-description">
                O planeta Mercúrio é o mais próximo do Sol. A sua principal
                característica são as elevadas temperaturas, provocadas
                especialmente pela sua proximidade com a estrela solar assim
                como pela ausência de uma camada de gases completa, como a
                atmosfera terrestre. Mercúrio não apresenta satélites naturais e
                possui uma superfície marcada por grandes crateras
              </p>
              <p className="planet-description">Massa (KG): 0.3302 x 1024</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/venus.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Venus</span>
              <p className="planet-description">
                O planeta Vênus, sendo o segundo em ordem de classificação a
                partir do Sol, é o mais quente do Sistema Solar. Ele possui
                características de tamanho, diâmetro e massa muito semelhantes
                às da Terra, mas não possui nenhum vestígio de formas de vida.
                Sua formação, assim como a da Terra, é composta por rochas
                diversas, com destaque para silicatos e basaltos.
              </p>
              <p className="planet-description">Massa (KG): 4.8685 x 1024</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/jupiter.webp"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Júpiter</span>
              <p className="planet-description">
                O planeta Terra é o único do Sistema Solar em que há presença
                confirmada de formas de vida. Tal fato é possível mediante
                questões físicas, com a disponibilidade de água e a presença de
                uma atmosfera bastante desenvolvida. A Terra é um planeta
                rochoso, formado por silicatos e basaltos, além de apresentar
                diversos recursos minerais. A Lua é seu único satélite natural.
              </p>
              <p className="planet-description">Massa (KG): 1898.6 x 1024</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/saturno.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Saturno</span>
              <p className="planet-description">
                O planeta Saturno é muito conhecido em razão dos seus anéis. Ele
                é o segundo maior em extensão territorial e é formado
                predominantemente por gases. Seu complexo sistema de anéis é o
                mais desenvolvido entre os planetas gasosos. As temperaturas em
                Saturno, assim como nos outros planetas gasosos, são bastante
                baixas. Ele possui diversos satélites naturais.
              </p>
              <p className="planet-description">Massa (KG): 568.46 x 1024</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/urano.webp"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Urano</span>
              <p className="planet-description">
                O planeta Urano é formado principalmente por gases. Ele é
                bastante desconhecido pela ciência. Há em Urano, assim como nos
                outros planetas gasosos, um sistema de anéis. Também possui
                diversos satélites naturais. A luminosidade solar chega de forma
                bastante diminuta à sua superfície. Esse planeta é conhecido por
                seu tom azulado devido aos gases da sua atmosfera.
              </p>
              <p className="planet-description">Massa (KG): 86.810 x 1024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
