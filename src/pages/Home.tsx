import React from "react";
import "../style-pages/Home.css";
import Navbar from "../components/navbar/Navbar";
import PageHome from "../components/home/PageHome";

export default function Home() {
  return (
    <>
      <main className="home-main">
        <div className="home-content">
          <Navbar/>
          <PageHome/>
        </div>
      </main>
    </>
  );
}
