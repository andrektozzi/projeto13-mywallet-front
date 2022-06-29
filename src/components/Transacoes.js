import React from "react";
import { useState, useContext, useEffect  } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function Cadastro() {
    const { user } = useContext(UserContext);
    const { name, token } = user;
    const [transacoes, setTransacoes] = useState([]);
  
    useEffect(() => {
      async function pegarTransacoes() {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
  
        try {
          const response = await axios.get("http://localhost:5000/transacoes", config);  
          setTransacoes(response.data);
        } catch (error) {
          const message = error.response.statusText;
          alert(message);
        }
      }
      pegarTransacoes();
    }, []);

    function renderizarTransacoes() {
        
        if(transacoes.length === 0){
            return <p>Não há registros de
            entrada ou saída</p>
        }

        transacoes.map((transacao) => {
            const { date, description, value } = transacoes;
            return (
                <>
                    <span>{date}</span>
                    <span>{description}</span>
                    <span>{value}</span>
                </>
            );
        });
    }
    return (
        <Container>
            <TransacoesHeader>
                <h2>Olá, {name}</h2>
                <icon>
                    <IoExitOutline />
                </icon>
            </TransacoesHeader>
            <TransacoesContainer>
                {renderizarTransacoes()}
            </TransacoesContainer>
            <ContainerAdicionarTransacoes>
                <Link to="/entradas">
                    <icon>
                        <IoAddCircleOutline />
                    </icon>
                    <span>Nova Entrada</span>
                </Link>
                <Link to="/saidas">
                    <icon>
                        <IoRemoveCircleOutline />
                    </icon>
                    <span>Nova Saída</span>
                </Link>
            </ContainerAdicionarTransacoes>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Raleway", sans-serif;
    height: 100vh;
    padding-bottom: 50px;

    h2 {
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        line-height: 30px;
    }
`

const TransacoesHeader = styled.div`
    display: flex;
    flex-direction: row-gap;
    align-items: center;
    justify-content: space-between;

    icon {
        font-size: 30px;
        color: #FFFFFF;
    }
`

const TransacoesContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 22px 0 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-size: 20px;
        color: #868686;
        line-height: 24px;
    }
`

const ContainerAdicionarTransacoes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        height: 115px;
        width: 50%;
        margin: 0;
        border-radius: 5px;
        background-color: #a328d6;
        padding: 10px;
        font-size: 17px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        word-spacing: 100vw;
        line-height: 20px;
    }

    a:first-child {
        margin-right: 8px;
    }

    icon {
        font-size: 25px;
        color: #FFFFFF;
    }
`