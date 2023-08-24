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
          <img
            className="img-avatar"
            src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/integrantes%2FLivea.jpeg?alt=media&token=5234b03c-b61a-4b69-841a-bcd7d6c328d0"
          />
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
            <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/bd.svg?alt=media&token=12057dc8-e71a-4009-998e-33882a529bf0"></img>
            </a>
            <a href="https://react.dev/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/React-icon%201.svg?alt=media&token=66a4106f-582e-4467-a9c5-481383e05a4e"></img>
            </a>
            <a href="https://www.java.com/pt-BR/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Java.svg?alt=media&token=723ee218-0c20-406c-a0ce-40c99f8c47f8"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/django.svg?alt=media&token=f78bbb7e-a262-43ce-b98b-b3cba4553219"></img>
            </a>
            <a href="https://nextjs.org/">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/n.svg?alt=media&token=08aca29d-b70e-4bd6-ad32-b138189fa764"></img>
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
