import React from "react";
import "../style-pages/page.css"
import ContainerAvatarLivea from "../components/container-avatar-livea/ContainerAvatarLivea";
import Navbar from "../components/navbar/Navbar";

export default function Livea() {
  return (
    <>
    <Navbar linkLinkedin="https://br.linkedin.com/in/l%C3%ADvea-soares-loredo-16b606252" linkGit="https://github.com/liveasoaresloredo" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarLivea/>
        </div>
      </main>
    </>
  );
}