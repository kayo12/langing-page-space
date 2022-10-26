export default function Footer(props) {

  let date = new Date().getFullYear()  


  return (
    <footer className="footer-section">
      <div className="rodape">
        <div className="rodape-list">
          <div className="rodape-info">mais informações</div>
          <div className="rodape-media">
            <ul>
                <li>linkedin</li>
                <li>instagram</li>
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
