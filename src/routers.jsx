import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Akimi from "./pages/Akimi";
import Onaka from "./pages/Onaka";
import Livea from "./pages/Livea";
import Bryan from "./pages/Bryan";
import Preto from "./pages/Preto";
import Pimentel from "./pages/Pimentel";
import { Guilherme } from "./pages/Guilherme";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/akimi" Component={Akimi}/>
        <Route path="/gabriela" Component={Onaka}/>
        <Route path="/livea" Component={Livea}/>
        <Route path="/bryan" Component={Bryan}/>
        <Route path="/gabriel" Component={Preto}/>
        <Route path="/pimentel" Component={Pimentel}/>
        <Route path="/guilherme" Component={Guilherme} />
      </Routes>
    </BrowserRouter>
  );
}
