import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

import Image from "next/image";
import earth from "../assests/img/mars.jpg";
import { useEffect, useState } from "react";

export default function Planetas(props) {
  function scrollMove(e) {
    let carouselScroll = document.querySelector("#id_planetas");
    let widthCard =
      document.querySelectorAll(".planet-cards")[0].clientWidth > 300
        ? document.querySelectorAll(".planet-cards")[0].clientWidth + 79
        : document.querySelectorAll(".planet-cards")[0].clientWidth;
    let showBf = document.querySelectorAll(".btn-before")[0] as HTMLElement;
    let showAf = document.querySelectorAll(".btn-after")[0] as HTMLElement;
    let maxWidth = carouselScroll.scrollWidth - carouselScroll.clientWidth;

    const ShowHidden = () => {
      showBf.style.display = carouselScroll.scrollLeft == 0 ? "none" : "block";
      showAf.style.display =
        Math.ceil(carouselScroll.scrollLeft) == maxWidth ? "none" : "block";
    };

    if (e.target.value == "next") {
      carouselScroll.scrollLeft += widthCard;
      ShowHidden();
    }

    if (e.target.value == "after") {
      carouselScroll.scrollLeft -= widthCard;
      ShowHidden();
    }
  }

  return (
    <section className="planets-section">
      <span className="title-section">Sistema solar</span>
      <div className="planet">
        <button
          value="after"
          onClick={(e) => scrollMove(e)}
          className="btn-before"
        >
          <BsChevronCompactLeft
            
            className="btn-before-icon"
          />
        </button>
        <button
          value="next"
          onClick={(e) => scrollMove(e)}
          className="btn-after"
        >
          <BsChevronCompactRight
            
            className="btn-after-icon"
          />
        </button>
        <div id="id_planetas" className="planet-list">
          <div className="planet-cards">
            <img
              src="/assests/img/sol.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Sol</span>
              <p className="planet-description">
                O Sol ?? uma estrela que tem 1 392 700 Km, ou seja, ?? 109 mil
                vezes maior do que a Terra. A Terra tem 12 742 km, o que quer
                dizer que dentro do Sol seria poss??vel colocar 1,3 milh??es de
                planetas Terra. Mas, apesar de ser muito maior do que a Terra,
                em compara????o com outras estrelas, esse astro n??o ?? assim t??o
                grande. A maior estrela conhecida, a VY Canis Majoris, ?? cerca
                de 2 mil vezes maior do que o Sol.
              </p>
              <p className="planet-description">Massa (KG): 1,989 x 1030</p>
            </div>
          </div>
          <div className="planet-cards">
            <img
              src="/assests/img/mars.png"
              alt="Earth"
              className="planet-img"
            />
            <div className="planet-content">
              <span className="planet-name">Marte</span>
              <p className="planet-description">
                Marte, conhecido como Planeta Vermelho, possui caracter??sticas
                estruturais bastante semelhantes ??s da Terra. Apresenta uma
                superf??cie marcada por grandes crateras e pela ocorr??ncia de
                diversos dep??sitos minerais. Marte possui dois sat??lites
                naturais, e ?? um dos planetas mais estudados pelas ci??ncias
                astron??micas.
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
                O planeta Terra ?? o ??nico do Sistema Solar em que h?? presen??a
                confirmada de formas de vida. Tal fato ?? poss??vel mediante
                quest??es f??sicas, com a disponibilidade de ??gua e a presen??a de
                uma atmosfera bastante desenvolvida. A Terra ?? um planeta
                rochoso, formado por silicatos e basaltos, al??m de apresentar
                diversos recursos minerais. A Lua ?? seu ??nico sat??lite natural.
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
            <div className="planet-content">
              <span className="planet-name">Plut??o</span>
              <p className="planet-description">
                O planeta-an??o Plut??o era considerado um planeta at?? o ano de
                2006. A partir de ent??o, por meio de estudos astron??micos, a
                Uni??o Astron??mica Internacional (UAI) optou por rebaix??-lo ??
                categoria planeta-an??o em raz??o do seu tamanho reduzido.
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
                O planeta Merc??rio ?? o mais pr??ximo do Sol. A sua principal
                caracter??stica s??o as elevadas temperaturas, provocadas
                especialmente pela sua proximidade com a estrela solar assim
                como pela aus??ncia de uma camada de gases completa, como a
                atmosfera terrestre. Merc??rio n??o apresenta sat??lites naturais e
                possui uma superf??cie marcada por grandes crateras
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
                O planeta V??nus, sendo o segundo em ordem de classifica????o a
                partir do Sol, ?? o mais quente do Sistema Solar. Ele possui
                caracter??sticas de tamanho, di??metro e massa muito semelhantes
                ??s da Terra, mas n??o possui nenhum vest??gio de formas de vida.
                Sua forma????o, assim como a da Terra, ?? composta por rochas
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
              <span className="planet-name">J??piter</span>
              <p className="planet-description">
                O planeta Terra ?? o ??nico do Sistema Solar em que h?? presen??a
                confirmada de formas de vida. Tal fato ?? poss??vel mediante
                quest??es f??sicas, com a disponibilidade de ??gua e a presen??a de
                uma atmosfera bastante desenvolvida. A Terra ?? um planeta
                rochoso, formado por silicatos e basaltos, al??m de apresentar
                diversos recursos minerais. A Lua ?? seu ??nico sat??lite natural.
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
                O planeta Saturno ?? muito conhecido em raz??o dos seus an??is. Ele
                ?? o segundo maior em extens??o territorial e ?? formado
                predominantemente por gases. Seu complexo sistema de an??is ?? o
                mais desenvolvido entre os planetas gasosos. As temperaturas em
                Saturno, assim como nos outros planetas gasosos, s??o bastante
                baixas. Ele possui diversos sat??lites naturais.
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
                O planeta Urano ?? formado principalmente por gases. Ele ??
                bastante desconhecido pela ci??ncia. H?? em Urano, assim como nos
                outros planetas gasosos, um sistema de an??is. Tamb??m possui
                diversos sat??lites naturais. A luminosidade solar chega de forma
                bastante diminuta ?? sua superf??cie. Esse planeta ?? conhecido por
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
