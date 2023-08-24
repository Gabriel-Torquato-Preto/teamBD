import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./ContainerAvatarBryan.css";

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

export default function ContainerAvatarBryan() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img src="../../../public/fotos/bryan.png" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Bryan Vieira</h1>
          </div>
          <div className="description">
            <p>
              Meu nome é Bryan tenho 17 anos, gosto muito de Front-End,
              desenvolver interfaces de sites e aplicativos, busco sempre
              melhorar no que eu faço e trabalhar com o que eu gosto.
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
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/JavaScript.svg?alt=media&token=263fe8b1-b356-4f06-8ab2-cb3b831b39cb"></img>
            </a>
            <a href="https://vitejs.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/vite.svg?alt=media&token=d76f414c-42ab-4eb5-ae32-a977aa8c8a2a"></img>
            </a>
            <a href="https://firebase.google.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Firebase.svg?alt=media&token=1bd9ff3d-1a76-49f7-b09e-bf401452bc60"></img>
            </a>
            <a href="https://react.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/React-icon%201.svg?alt=media&token=66a4106f-582e-4467-a9c5-481383e05a4e"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/django.svg?alt=media&token=f78bbb7e-a262-43ce-b98b-b3cba4553219"></img>
            </a>
            <a href="https://nextjs.org/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/n.svg?alt=media&token=08aca29d-b70e-4bd6-ad32-b138189fa764"></img>
            </a>
            <a href="https://nodejs.org/en">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/node.svg?alt=media&token=22905541-559d-4f50-8400-f4e1645c6277"></img>
            </a>
            <a href="https://tailwindcss.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/tailwind.svg?alt=media&token=6cc489a4-cf44-486e-82f3-80b3dc482038"></img>
            </a>
            <a href="https://angular.io/" style={{ width: "35px" }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/angular.svg?alt=media&token=dd089c23-ca3c-4197-b05d-94636ff046b7"></img>
            </a>
            <a href="https://styled-components.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/20658825.png?alt=media&token=0f3e42d2-3f86-455a-90ec-a5f2415640f3"></img>
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
                        <li>• Site de Brindes</li>
                        <li>• ETSROOMS</li>
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
                        <li>
                          • Gosto de carros, futebol, computadores e jogos
                          eletronicos
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
                        <li>• Design gráfico</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="title-avatar">
                    <h1>Formação</h1>
                    <div className="infos">
                      <ul>
                        <li>• Formação Curso Sesi - Transformação</li>
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
