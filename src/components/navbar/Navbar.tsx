import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <div>
        <img
          className="line-bosch"
          src="../../../public/images/Group (1).png"
          alt=""
        />
      </div>
      <header className="header">
        <nav className="navbar">
          <div className="logo-bosch">
            <img
              src="../../../public/images/Bosch_symbol_logo_white.svg"
              alt="Logo Bosch Branca"
            />
          </div>
          <div className="menubar">
            <ul className="tags">
              <li className="tag">
                <a href="/">Home</a>
              </li>
              <li className="tag">
                <a href="/akimi">Lívia</a>
              </li>
              <li className="tag">
                <a href="/gabriela">Gabriela</a>
              </li>
              <li className="tag">
                <a href="/livea">Lívea</a>
              </li>
              <li className="tag">
                <a href="/bryan">Bryan</a>
              </li>
              <li className="tag">
                <a href="/gabriel">Gabriel</a>
              </li>
              <li className="tag">
                <a href="/pimentel">Pimentel</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <a target="_blank"href={props.linkLinkedin}>
              <img
                src="../../../public/images/LinkedIn.png"
                alt="Logo LinkedIn"
              />
            </a>
            <a target="_blank" href={props.linkGit}>
              <img src="../../../public/images/Github.png" alt="Logo Github" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
