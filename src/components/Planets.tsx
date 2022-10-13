import Image from "next/image";
import earth from '../assests/img/mars.jpg'

export default function Planetas(props) {
  return (
    <section className="planets-section">
      <div className="planet">
        <div className="planet-list">
          <div className="planet-cards">
            <div className="planet-img">
              <img src="" alt="Planeta terra" />
            </div>
            <span className="planet-name">Terra</span>
            <p className="planet-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
              viverra eget. Aliquam arcu ex, varius vitae venenatis in, eleifend
              eu urna. Vivamus sem sem, aliquam pharetra justo eget, lobortis
              tempor lectus. Ut massa arcu, rutrum eget pharetra ac, vulputate
              vitae orci. Quisque et erat est. Suspendisse nec quam purus.
              Nullam cursus lorem ut condimentum maximus. Cras massa nibh,
              dapibus vitae convallis quis, dignissim ut libero. Cras blandit
              ornare ullamcorper.
            </p>
          </div>
          <div className="planet-cards">
            <div className="planet-img">
              <Image src={earth} alt="Earth" layout='responsive'/>
            </div>
            <span className="planet-name">Marte</span>
            <p className="planet-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
              viverra eget. Aliquam arcu ex, varius vitae venenatis in, eleifend
              eu urna. Vivamus sem sem, aliquam pharetra justo eget, lobortis
              tempor lectus. Ut massa arcu, rutrum eget pharetra ac, vulputate
              vitae orci. Quisque et erat est. Suspendisse nec quam purus.
              Nullam cursus lorem ut condimentum maximus. Cras massa nibh,
              dapibus vitae convallis quis, dignissim ut libero. Cras blandit
              ornare ullamcorper.
            </p>
          </div>
          <div className="planet-cards">
            <div className="planet-img">
              <img src="" alt="Planeta terra" />
            </div>
            <span className="planet-name">Jupter</span>
            <p className="planet-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nec ex velit. Aliquam placerat bibendum dui, sed vulputate quam
              viverra eget. Aliquam arcu ex, varius vitae venenatis in, eleifend
              eu urna. Vivamus sem sem, aliquam pharetra justo eget, lobortis
              tempor lectus. Ut massa arcu, rutrum eget pharetra ac, vulputate
              vitae orci. Quisque et erat est. Suspendisse nec quam purus.
              Nullam cursus lorem ut condimentum maximus. Cras massa nibh,
              dapibus vitae convallis quis, dignissim ut libero. Cras blandit
              ornare ullamcorper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
