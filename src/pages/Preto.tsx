import React from "react";
import "../style-pages/page.css"
import ContainerAvatarPreto from "../components/container-avatar-preto/ContainerAvatarPreto";
import Navbar from "../components/navbar/Navbar";

export default function Onaka() {
  return (
    <>
    <Navbar linkGit="https://github.com/Gabriel-Torquato-Preto" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarPreto/>
        </div>
      </main>
    </>
  );
}