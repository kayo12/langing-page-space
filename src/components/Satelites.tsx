export default function Satelites(props) {
  return (
    <section id="id_satelites" className="satelites-section">
      <span className="title-section">Satelites</span>
      <div className="satellite stl-container">
        <div className="satellite-description">
          <h4>Vc sabia ?</h4>
          <p>
            Os satélites têm muitas funções. Eles são capazes de captar imagens
            de grandes áreas e possibilitam o mapeamento de territórios. Alguns
            podem auxiliar meteorologistas a prever mudanças no tempo e no
            clima, além de fenômenos naturais como furacões. Eles também podem
            captar imagens de outros planetas, auxiliando astrônomos em suas
            pesquisas. Os sinais de televisão e telefone também são transmitidos
            por meio dos satélites. Além disso, o Sistema de Posicionamento
            Global (GPS) só é viável com o auxílio de mais de 20 satélites em
            órbita. A Organização das Nações Unidas (ONU) é responsável pelo
            controle desses objetos na atmosfera terrestre e também pela
            regularização e pela autorização de novos lançamentos. Também é
            responsável pela comunicação entre as principais agências espaciais
            do mundo.
          </p>
        </div>
        <div className="satellite-img">
          <img src="/assests/img/satellite2.png" alt="satelite" />
        </div>
      </div>
    </section>
  );
}
