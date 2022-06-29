import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import  UserContext from "../context/UserContext";
import "../assets/styles/reset.css";
import GlobalStyle from "../assets/styles/globalStyles";

import Login from "./Login";
import Cadastro from "./Cadastro";
//import Entradas from "./Entradas";
//import Saidas from "./Saidas";
import Transacoes from "./Transacoes";

export default function App() {
    const [user, setUser] = useState({});
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Transacoes" element={<Transacoes />} />
            {/* <Route path="/income" element={<Income />} />  
            <Route path="/expense" element={<Expense />} />   */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }