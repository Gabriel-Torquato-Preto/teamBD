import React from "react";
import "../style-pages/page.css"
import ContainerAvatarPimentel from "../components/container-avatar-pimentel/ContainerAvatarPimentel";
import Navbar from "../components/navbar/Navbar";

export default function Onaka() {
  return (
    <>
    <Navbar linkLinkedin="https://www.linkedin.com/in/gabriel-pimentel-silva-a382a320b" linkGit="https://github.com/GabrielPimentel22" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarPimentel/>
        </div>
      </main>
    </>
  );
}