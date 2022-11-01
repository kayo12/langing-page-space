import Image from "next/image";
import earth from "../assests/img/mars.jpg";

export default function Planetas(props) {

  function scrollMove(event){

    let eve = event.target.id
    console.log(eve)
    let planetlist = document.querySelectorAll(".planet-list")[0]

    if(eve == "next"){
      
      planetlist.scrollTo(planetlist.scrollLeft + 300, 0)
    }
   
    if(eve == "after"){
      planetlist.scrollTo(planetlist.scrollLeft - 300, 0)
    }
  }


  return (
    <section className="planets-section">
      <span className="title-section">
        Planetas
      </span>
      <div className="planet">
      <button id="after" onClick={(e) => scrollMove(e)} className="btn-before">Anterior</button>
      <button id="next" onClick={(e) => scrollMove(e)} className="btn-after">proximo</button>
        <div className="planet-list">
          <div className="planet-cards">
            <img src="/assests/img/mars.png" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Marte</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/earth.png" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Terra</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/plutao.png" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Plutão</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/mercurio.webp" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Mercurio</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/venus.png" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Venus</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/jupiter.webp" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Jupiter</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/saturno.png" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Saturno</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
          <div className="planet-cards">
            <img src="/assests/img/urano.webp" alt="Earth" className="planet-img" />
            <div className="planet-content">
              <span className="planet-name">Urano</span>
              <p className="planet-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
                viverra eget. Aliquam arcu ex, varius vitae venenatis in,
                eleifend eu urna. Vivamus sem sem, aliquam pharetra justo eget,
                lobortis tempor lectus. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
