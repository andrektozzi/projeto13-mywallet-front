import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  UserContext from "../context/UserContext";
import "../assets/styles/reset.css";
import GlobalStyle from "../assets/styles/globalStyles";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Entradas from "./Entradas";
import Saidas from "./Saidas";
import Transacoes from "./Transacoes";

export default function App() {
    const [user, setUser] = useState({});
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/transacoes" element={<Transacoes />} />
           <Route path="/entradas" element={<Entradas />} />  
            <Route path="/saidas" element={<Saidas />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }