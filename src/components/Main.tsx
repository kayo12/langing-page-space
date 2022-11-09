import Nav from "./Nav";
import { useState, useEffect } from "react";
export default function Main(props) {
  const [txtCount, setTxtCount] = useState(
    "Um pequeno passo para o homem, um grande salto para a humanidade..."
  );
  const [txt, setTxt] = useState("");

  useEffect(() => {
    let textArray = txtCount.split("");
    const setTimeTxt = setInterval(() => {
      let firstTxt = textArray.shift();
      if (firstTxt != undefined) {
        setTxt((txt) => txt + firstTxt);
      }
    }, 200);
    return () => clearInterval(setTimeTxt);
  }, []);

  return (
    <section className="section-main">
      <Nav />
      <main className="main-section">
        <div className="main-body">
          <div className="main-text">
            <span id="textDinamic">{txt} </span>
          </div>
          <div className="main-astronaut">
            <img src="/assests/img/astronauta.png" alt="astronauta" />
          </div>
        </div>
      </main>
    </section>
  );
}
