import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./ContainerAvatarLivea.css";

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

export default function ContainerAvatarLivea() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img src="../../../public/fotos/livea.png" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Lívea Loredo</h1>
          </div>
          <div className="description">
            <p>
              Olá, eu sou a Lívea Soares Loredo e tenho 18 anos, uma pessoa
              introvertida que adora desafios e é determinada a buscar o que
              deseja.
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
            <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">
              <img src="../../../public/images/bd.svg"></img>
            </a>
            <a href="https://react.dev/">
              <img src="../../../public/images/React-icon 1.svg"></img>
            </a>
            <a href="https://www.java.com/pt-BR/">
              <img src="../../../public/images/Java.svg"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="../../../public/images/django.svg"></img>
            </a>
            <a href="https://nextjs.org/">
              <img src="../../../public/images/n.svg"></img>
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
                        <li>• Geek-Coffe</li>
                        <li>• ViolletBank</li>
                        <li>• Pomodoro Timer</li>
                        <li>• Barcode Scanner</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="title-avatar">
                    <h1>Curiosidades</h1>

                    <div className="infos">
                      <ul>
                        <li>• Sei tocar organ e teclado musical </li>
                        <li>
                          • Comecei a ter interesse em tecnologia por conta de
                          um curso de informática
                        </li>
                        <li>• Gosto de ler e ouvir histórias de terror</li>
                        <li>• Minha dicção é ruim as vezes</li>
                        <li>• Gosto de desafios</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-3">
                  <div className="title-avatar">
                    <h1>Hobbies</h1>
                    <div className="infos">
                      <ul>
                        <li>• Escutar música </li>
                        <li>• Conversar enquanto caminha </li>
                        <li>• Jogar jogos do tipo indie</li>
                        <li>• Pesquisar sobre diversar coisas</li>
                        <li>• Ler sobre quase tudo</li>
                        <li>• Aprender coisas novas</li>
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
