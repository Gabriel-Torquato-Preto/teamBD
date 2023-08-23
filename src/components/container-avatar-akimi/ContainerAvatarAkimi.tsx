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
          <img className="img-avatar" src="../../../public/fotos/akimi.png" />
        </aside>
        <aside className="avatar-description">
          <div className="title">
            <h1>Lívia Akimi</h1>
          </div>
          <div className="description">
            <p>
              Olá! Meu nome é Lívia Akimi, tenho 18 anos de idade, e o design
              sempre foi minha paixão, este mundo cheio de possibilidades
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
              <img src="../../../public/images/html.svg"></img>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <img src="../../../public/images/css.svg"></img>
            </a>
            <a href="https://www.python.org/">
              <img src="../../../public/images/Python.svg"></img>
            </a>
            <a href="https://www.figma.com/">
              <img src="../../../public/images/figma.svg"></img>
            </a>
            <a href="https://firebase.google.com/">
              <img src="../../../public/images/firebase.svg"></img>
            </a>
            <a href="https://vitejs.dev/">
              <img src="../../../public/images/vite.svg"></img>
            </a>
            <a href="https://react.dev/">
              <img src="../../../public/images/React-icon 1.svg"></img>
            </a>
            <a href="https://www.adobe.com/br/products/photoshop.html">
              <img src="../../../public/images/Photoshop.svg"></img>
            </a>
            <a href="https://helpx.adobe.com/br/xd/help/adobe-xd-overview.html">
              <img src="../../../public/images/Xd.svg"></img>
            </a>
            <a href="https://miro.com/pt/">
              <img src="../../../public/images/Miro.svg"></img>
            </a>
            <a href="https://www.djangoproject.com/">
              <img src="../../../public/images/django.svg"></img>
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
                        <li>• Gosto muito de Rodeio</li>
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
                        <li>• CCNA - Cisco (Cursando)</li>
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
