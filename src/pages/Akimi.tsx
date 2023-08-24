import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../style-pages/page.css"
import ContainerAvatarAkimi from "../components/container-avatar-akimi/ContainerAvatarAkimi";

export default function Akimi() {
  return (
    <>
    <Navbar linkLinkedin="https://www.linkedin.com/in/livia-a-1510a3234/" linkGit="https://github.com/Akimi0203" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarAkimi/>
        </div>
      </main>
    </>
  );
}
