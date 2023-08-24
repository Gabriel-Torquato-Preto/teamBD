import "../../components/home/PageHome.css";

export default function PageHome() {
  return (
    <div className="full">
      <div className="foto">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/fotoEmGrupo.svg?alt=media&token=dde65459-924c-48fd-b836-a1fabf55b955" alt="" />
      </div>
      <div className="textos">
        <div className="titulo">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/letra.svg?alt=media&token=9468ed3f-307c-4a44-9c55-3f362567ff9f" alt="" />
        </div>
        <div className="frase">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/coiso.svg?alt=media&token=887858a2-cdf4-4ffa-a466-2ff265b6ecb2" alt="" />
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
