import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <div>
        <img
          className="line-bosch"
          src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Group%20(1).png?alt=media&token=c602643e-bef1-4af9-b243-014531ac62ed"
          alt=""
        />
      </div>
      <header className="header">
        <nav className="navbar">
          <div className="logo-bosch">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Bosch_symbol_logo_white.svg?alt=media&token=81660726-06b1-4525-9916-20c210d51873"
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
              <li className="tag">
                <a href="/guilherme">Guilherme</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <a target="_blank"href={props.linkLinkedin}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/LinkedIn.png?alt=media&token=f24ca4ca-aa85-46c5-8c2f-1222de5d6fa8"
                alt="Logo LinkedIn"
              />
            </a>
            <a target="_blank" href={props.linkGit}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfoliobd-2000e.appspot.com/o/Github.png?alt=media&token=d826711c-670d-4502-a40b-640fad95e72e" alt="Logo Github" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
