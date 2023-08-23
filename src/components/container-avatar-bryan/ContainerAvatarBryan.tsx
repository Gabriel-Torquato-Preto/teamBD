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
              <img src="../../../public/images/html.svg"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <img src="../../../public/images/css.svg"></img>
            </a>
            <a href="https://www.python.org/">
              <img src="../../../public/images/Python.svg"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <img src="../../../public/images/JavaScript.svg"></img>
            </a>
            <a href="https://vitejs.dev/">
              <img src="../../../public/images/vite.svg"></img>
            </a>
            <a href="https://react.dev/">
              <img src="../../../public/images/React-icon 1.svg"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="../../../public/images/django.svg"></img>
            </a>
            <a href="https://nextjs.org/">
              <img src="../../../public/images/n.svg"></img>
            </a>
            <a href="https://nodejs.org/en">
              <img src="../../../public/images/node.svg"></img>
            </a>
            <a href="https://tailwindcss.com/">
              <img src="../../../public/images/tailwind.svg"></img>
            </a>
            <a href="https://angular.io/" style={{ width: "35px" }}>
              <img src="../../../public/images/angular.svg"></img>
            </a>
            <a href="https://styled-components.com/">
              <img src="../../../public/images/20658825.png"></img>
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
