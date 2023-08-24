import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./ContainerAvatarAkimi.css";
import { AnimatePresence, motion } from "framer-motion";

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

export default function ContainerAvatarAkimi() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img className="img-avatar" src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/integrantes%2FAkimi.jpeg?alt=media&token=3bb2535c-b0d8-4e1f-899b-a259896513be" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Lívia Akimi Sekigami</h1>
          </div>
          <div className="description">
            <p>
              Olá! Meu nome é Lívia Akimi, tenho 18 anos de idade, sempre busco melhorar e aprender com meus erros, 
              sou sempre aberta a novos desafios e este mundo cheio de possibilidades
              infinitas me fascina e sigo neste caminho extenso, aprimorando
              minhas habilidades e buscando oportunidades de aprendizado
              contínuo.
            </p>
          </div>

          <button className="button" onClick={handleOpen}>
            Informações <BsArrowRight style={{ marginLeft: "15px" }} />
          </button>

          <div className="icons">
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/html.svg?alt=media&token=5881e319-6505-4765-bf05-823a03f7f806"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/css.svg?alt=media&token=02ed2fde-5709-461f-8538-dcebdeaee86b"></img>
            </a>
            <a href="https://www.python.org/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Python.svg?alt=media&token=bfc774b8-ed80-4246-827c-ef7f1c924bdd"></img>
            </a>
            <a href="https://www.figma.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/figma.svg?alt=media&token=d821529d-258f-4d3c-814e-136cac5d4e41"></img>
            </a>
            <a href="https://firebase.google.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Firebase.svg?alt=media&token=1bd9ff3d-1a76-49f7-b09e-bf401452bc60"></img>
            </a>
            <a href="https://vitejs.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/vite.svg?alt=media&token=d76f414c-42ab-4eb5-ae32-a977aa8c8a2a"></img>
            </a>
            <a href="https://react.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/React-icon%201.svg?alt=media&token=66a4106f-582e-4467-a9c5-481383e05a4e"></img>
            </a>
            <a href="https://www.adobe.com/br/products/photoshop.html">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Photoshop.svg?alt=media&token=ba8ae2a3-d9ea-47d6-a6db-927357f9d8bd"></img>
            </a>
            <a href="https://helpx.adobe.com/br/xd/help/adobe-xd-overview.html">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Xd.svg?alt=media&token=43c03be1-2d28-46eb-8ed0-62433f99f9db"></img>
            </a>
            <a href="https://miro.com/pt/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Miro.svg?alt=media&token=bf9032d8-7123-44a1-82da-a33daf99da37"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/django.svg?alt=media&token=f78bbb7e-a262-43ce-b98b-b3cba4553219"></img>
            </a>
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
                        <li>• Corporate Wiki</li>
                        <li>• Projeto (Transformação)</li>
                        <li>• Grand Prix SENAI de Inovação - Hackathon</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="title-avatar">
                    <h1>Curiosidades</h1>
                    <div className="infos">
                      <ul>
                        <li>• Gosto muito de Festas/Shows</li>
                        <li>
                          • Nas minhas horas vagas sempre fico aprimorando meus
                          conhecimentos focado nos meus Hobbies
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
                        <li>• Espanhol</li>
                        <li>• Design</li>
                        <li>• Handebol</li>
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
                          • Design thinking para educadores - Fundação Bradesco
                        </li>
                        <li>• MasterClass (UX/UI) - UX Club</li>
                        <li>
                          • Fundamentos de design gráfico - Fundação Bradesco{" "}
                        </li>
                        <li>• Estratégia de negócios - Fundação Bradesco </li>
                        <li>
                          • Empreendedorismo e Inovação - Fundação Bradesco
                        </li>
                        <li>• CCNA - Cisco </li>
                        <li>
                          • Técnico Analise e Desenvolvimento de Sistemas -
                          Senai Roberto Mange
                        </li>
                        <li>• E.E Claudia Francisca da Silva - EM</li>
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
}
