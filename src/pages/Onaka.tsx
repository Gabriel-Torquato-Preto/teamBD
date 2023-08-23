import React from "react";
import "../style-pages/page.css"
import ContainerAvatarGabriela from "../components/container-avatar-gabriela/ContainerAvatarGabriela";
import Navbar from "../components/navbar/Navbar";

export default function Onaka() {
  return (
    <>
    <Navbar linkLinkedin="https://www.linkedin.com/in/gabriela-onaka-b3220b266/" linkGit="https://github.com/GabrielaOnaka" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarGabriela/>
        </div>
      </main>
    </>
  );
}