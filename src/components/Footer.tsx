import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export default function Footer(props) {
  let date = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="rodape">
        <div className="rodape-list">
          <div className="rodape-info">
            <span> Artigos e Sites relacionados</span>
            <ul>
              <li>
                <a href="https://brasilescola.uol.com.br/geografia/sistema-solar.htm" target="_blank">
                  Sistema solar
                </a>
              </li>
              <li>
                <a href="https://escolakids.uol.com.br/geografia/o-universo-e-seus-astros.htm" target="_blank">
                  O Universo e seus Astros
                </a>
              </li>
              <li>
                <a href="https://mundoeducacao.uol.com.br/geografia/corpos-celestes.htm" target="_blank">
                  Corpos celestes
                </a>
              </li>
              <li>
                <a href="https://brasilescola.uol.com.br/fisica/satelites-artificiais.htm" target="_blank">
                  Satélites artificiais
                </a>
              </li>
              <li>
                <a href="https://www.preparaenem.com/geografia/satelites.htm" target="_blank">
                  Satélites
                </a>
              </li>
            </ul>
          </div>
          <div className="rodape-media">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/kayohcampos/" target="_blank">
                <IoLogoLinkedin className="icon-media" />
                </a>
              </li>
              <li>
                <a href="https://github.com/kayo12" target="_blank">
                <IoLogoGithub className="icon-media" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rodape-direitos">
          <span>&copy; Copyright {date} Astros</span>
        </div>
      </div>
    </footer>
  );
}
