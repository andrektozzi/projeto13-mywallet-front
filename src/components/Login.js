import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function AdicionarLogin(event) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post("https://projeto13-mywallet-back-driven.herokuapp.com/login", body);
      const { name, email, token } = response.data;

      setUser({
        name,
        email,
        token,
      });

      navigate("/transacoes");
    } catch (error) {
      const message = error.response.statusText;

      alert(message);
    }
  }

   function LoginForm() {
    return (
      <>
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
        <button type="submit">Entrar</button>
      </>
    );
  }

  return (
    <Container>
      <h1>My Wallet</h1>
      <LoginForms onSubmit={AdicionarLogin}>{LoginForm()}</LoginForms>
      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
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
const LoginForms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;