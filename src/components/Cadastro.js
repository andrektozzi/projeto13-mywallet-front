import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();

  async function SignUp(event) {
    event.preventDefault();

    const body = {
      name,
      email,
      password,
    };

    if(password.length < 6) {
      return alert("A senha deve ter no mínimo seis caracteres!")
    }

    if(password !== confirmPassword) {
      return alert("As senhas não conferem. Digite novamente!");
    }

    try {
      await axios.post("https://projeto13-mywallet-back-driven.herokuapp.com/cadastro", body);
      alert("Sucesso! Seu usuário foi criado.");
      navigate("/");
    } catch (error) {
      const mensagem = error.response.statusText;
      alert(mensagem);
    }
  }

    function SignUpForm() {
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
          <SignupForms onSubmit={SignUp}>{SignUpForm()}</SignupForms>
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