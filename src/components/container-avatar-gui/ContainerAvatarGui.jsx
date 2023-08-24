import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import './ContainerAvatarGui.css'

import guilherme from "../../../public/fotos/Guilherme.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

export const ContainerAvatarGui = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img className="img-avatar" src={guilherme} />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Guilherme Silva</h1>
          </div>
          <div>
            <div className="description">
              <p>
                Olá! Meu nome é Guilherme Silva, tenho 19 anos e gostaria de
                contar um pouco sobre mim. Desde meus 08 anos de idade já era
                apaixonado por tecnologia, e essa paixão continua até hoje! Por
                conta disso amo montar APIs e mexer com o Back-end em geral, mas
                também me aventuro com o Front-end, em especial quando se trata de
                Vue.js. Sou uma pessoa extrovertida que está sempre disposta a
                aprender coisas novas e ajudar outros quando é preciso. Uma
                curiosidade sobre mim é que mesmo sendo extrovertido, quando estou
                envolvido em um projeto sou muito focado! As vezes para falarem
                comigo meus amigos tem que me cutucar para que eu perceba que eles
                precisam da minha ajuda!
              </p>
            </div>
          </div>

            <button className="button" onClick={handleOpen}>
              Informações <BsArrowRight style={{ marginLeft: "15px" }} />
            </button>


          <div>
            <div className="icons">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                </a>
                <a href="https://learn.microsoft.com/pt-br/dotnet/csharp/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </a>
                <a href="https://www.java.com/pt-BR/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                </a>
                <a href="https://nodejs.org/en">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </a>
                <a href="https://www.mysql.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                </a>
                <a href="https://azure.microsoft.com/en-us/free/search/?ef_id=_k_Cj0KCQjw_5unBhCMARIsACZyzS30w1P1Ka_uyGxcA1wIKRxG5gaWmukWfiHTujlxzh5bhAP6lxfYfxYaAhy0EALw_wcB_k_&OCID=AIDcmmzmnb0182_SEM__k_Cj0KCQjw_5unBhCMARIsACZyzS30w1P1Ka_uyGxcA1wIKRxG5gaWmukWfiHTujlxzh5bhAP6lxfYfxYaAhy0EALw_wcB_k_&gclid=Cj0KCQjw_5unBhCMARIsACZyzS30w1P1Ka_uyGxcA1wIKRxG5gaWmukWfiHTujlxzh5bhAP6lxfYfxYaAhy0EALw_wcB">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                </a>
                <a href="https://vuejs.org/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                </a>
                <a href="https://tailwindcss.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                </a>
                <a href="https://dotnet.microsoft.com/pt-br/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                </a>
            </div>
          </div>

          <Modal
            keepMounted
            style={{ zIndex: "10" }}
            open={open}
            onClose={handleClose}
            
          >
            <Box sx={style}>
              <div className="modal">
                <div className="div-1">
                  <div className="title-avatar">
                    <h1>Projetos</h1>
                    <div className="infos">
                      <ul>
                        <li>• ETSLAND - CaP/ETS</li>
                        <li>• VOS - PS/RP-LA</li>
                        <li>• FUP - PT/MFG-LA</li>
                        <li>• Eulle - GS/OIS-LA</li>
                        <li>• Semáforo Inteligente - TCC</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="title-avatar">
                    <h1>Curiosidades</h1>
                    <div className="infos">
                      <ul>
                        <li>• Gosto de coisas geek</li>
                        <li>
                          • Eu amo comida italiana
                        </li>
                        <li>
                          • Quando eu falo de um assunto que gosto, eu falo muito rápido.
                        </li>
                        <li>
                          • Já fui do Grêmio Estudantil durante meu Ensino Fundamental
                        </li>
                        <li>
                          • Em meus tempos livres, gosto de sair com amigos, jogar e aprender mais sobre programação
                        </li>
                        <li>
                          • Fiz o curso e obtive a certificação da AZ-900
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-3">
                  <div className="title-avatar">
                    <h1>Hobbies</h1>
                    <div className="infos">
                      <ul>
                        <li>• Estudar</li>
                        <li>• Conversar e conhecer novas pessoas</li>
                        <li>• Escutar música</li>
                        <li>• Sempre ajudar e/ou conversar com pessoas próximas caso estão com algum problema</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="title-avatar">
                    <h1>Formação</h1>
                    <div className="infos">
                      <ul>
                        <li>
                          • E.E Professor João Lourenço Rodrigues - Ensino Médio
                        </li>
                        <li>• Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini - Curso Técnico de Desenvolviento de Sistemas</li>
                        <li>
                          • UniFavip/Wydem - Engenharia de Software - Atualmente
                        </li>
                        <li>• Formação Node.JS - Udemy </li>
                        <li>
                          • Curso Web API ASP.NET Core Essencial (.NET 6) - Udemy
                        </li>
                        <li>• Implantação de Serviços em Nuvem - Microsoft AZ-900</li>
                      </ul>
                    </div>  
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </aside>
      </section>
    </>
  );
};
