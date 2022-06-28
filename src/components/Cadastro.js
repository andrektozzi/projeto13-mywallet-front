import React from "react";
import { useState, useContext} from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    async function Cadastro(event) {
        event.preventDefault();

        const body = {
            name,
            email,
            password,
            confirmPassword
        }

        try {
            const resposta = await axios.post("http://localhost:5000/cadastro", body);
            const { name, email, password } = resposta;

            setUser({
                name,
                email,
                password
            });

            navigate("/transacoes")

        } catch (error) {
            const erro = error.resposta.statusText
            alert(erro)
        }
    }

    function FormularioCadastro() {
        return (
          <>
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </>
        );
      }
    
      return (
        <Container>
          <h1>My Wallet</h1>
          <SignupForms onSubmit={Cadastro}>{FormularioCadastro()}</SignupForms>
          <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Container>
      );
    }
    
    const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: "Lexend Deca", sans-serif;
      height: 100vh;
    `;
    const SignupForms = styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `;