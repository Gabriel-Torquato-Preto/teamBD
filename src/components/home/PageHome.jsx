import "../../components/home/PageHome.css";

export default function PageHome() {
  return (
    <div className="full">
      <div className="foto">
        <img src="../../../public/images/fotoEmGrupo.svg" alt="" />
      </div>
      <div className="textos">
        <div className="titulo">
          <img src="../../../public/images/letra.svg" alt="" />
        </div>
        <div className="frase">
          <img src="../../../public/images/coiso.svg" alt="" />
          <h2>
            {`"Todos nós devemos lutar para melhorar o status que: nenhum de nós
            deve ficar satisfeito com o que já conquistou, mas devemos sempre
            nos esforçar para fazer algo ainda melhor."`} <h3>-Robert Bosch</h3>
          </h2>
        </div>
      </div>
    </div>
  );
}
