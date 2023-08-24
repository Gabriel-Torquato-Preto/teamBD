import React from "react";
import "../style-pages/page.css"
import ContainerAvatarBryan from "../components/container-avatar-bryan/ContainerAvatarBryan";
import Navbar from "../components/navbar/Navbar";

export default function Bryan() {
  return (
    <>
     <Navbar linkLinkedin="https://www.linkedin.com/in/bryan-vieira-b7938a271/" linkGit="https://github.com/bryanvr8" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarBryan/>
        </div>
      </main>
    </>
  );
}