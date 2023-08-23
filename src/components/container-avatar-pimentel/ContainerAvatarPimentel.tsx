import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import "./ContainerAvatarPimentel.css";

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

export default function ContainerAvatarPimentel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="container-avatar-content">
        <aside className="avatar-content">
          <img src="../../../public/fotos/pimentel.png" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Gabriel Pimentel</h1>
          </div>
          <div className="description">
            <p>
              Meu nome é Gabriel Pimentel tenho 17 anos, sou extrovertido, gosto
              de aprender coisas novas e de desafios, procura lidar da melhor
              forma possível de ante dos problemas e dificuldades, também estou
              em um processo constante de aprendizado.
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
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <img src="../../../public/images/JavaScript.svg"></img>
            </a>
            <a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">
              <img src="../../../public/images/bd.svg"></img>
            </a>
            <a href="https://react.dev/">
              <img src="../../../public/images/React-icon 1.svg"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="../../../public/images/django.svg"></img>
            </a>
            <a href="https://www.java.com/pt-BR/">
              <img src="../../../public/images/Java.svg"></img>
            </a>
            <a href="https://www.mysql.com/">
              <img src="../../../public/images/golfinho.svg"></img>
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
                          • Participo de um Projeto Social (Mãos que ajudam)
                        </li>
                        <li>• Gosto de Avião</li>
                        <li>
                          • Sou membro de A Igreja De Jesus Cristo Dos Santos
                          Dos Últimos Dias
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
                        <li>• Esportes</li>
                        <li>• Tocar Piano</li>
                        <li>• Investir</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="div-4">
                  <div className="title-avatar">
                    <h1>Formação</h1>
                    <div className="infos">
                      <ul>
                        <li>• Microcamp - Informática básica</li>
                        <li>• Senai - Técnico de Desenvolvimento de Sistema</li>
                        <li>• Escola - 3°Ano do ensino médio</li>
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
