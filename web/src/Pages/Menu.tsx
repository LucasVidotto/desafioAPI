import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  UserSection,
  ProfilePic,
  UserInfo,
  UserName,
  AccountInfo,
  BalanceSection,
  BalanceTitle,
  BalanceAmount,
  CardsContainer,
  ActionCard,
  CardIcon,
  CardLabel,
  SectionTitle,
  TransactionsSection,
  TransactionItem,
  CloseUP
} from '../Style/MenuStyled';

import {
  FiSend,
  FiDollarSign,
  FiFileText,
  FiTrendingUp,
  FiCreditCard,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';

import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";

const Menu = () => {
  const navigate = useNavigate();
  const [closeUp, setCloseUp] = useState(false); // Estado para controlar a visibilidade do saldo

  const handlerOut =() =>{
    alert('Você saiu da conta!');
    navigate('/auth'); // Redireciona para a página de autenticação
  }

  const handlerCloseUP = () => {
    setCloseUp(!closeUp); // Alterna a visibilidade do saldo
  }

  return (
    <Container>
      <Header>
        <UserSection>
          <ProfilePic src="https://i.pravatar.cc/150?img=4" />
          <UserInfo>
            <UserName>João da Silva</UserName>
            <AccountInfo>Agência: 1234 · Conta: 56789-0</AccountInfo>
          </UserInfo>
        </UserSection>

        <button onClick={handlerOut}><FiLogOut /> Sair</button>
      </Header>

      <BalanceSection> {/* Saldo */}
        <div>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <BalanceAmount>{closeUp ? 'R$ 12.480,90' : '************'}</BalanceAmount>
        </div>
        <CloseUP onClick={handlerCloseUP}>
          {closeUp ? <FaRegEye size={'30px'}/> : <FaRegEyeSlash size={'30px'}/>}
        </CloseUP>
      </BalanceSection>

      <SectionTitle>Serviços</SectionTitle>
      <CardsContainer>
        <ActionCard>
          <CardIcon><FiSend /></CardIcon>
          <CardLabel>
            <Link to={{pathname:"/deposito"}}>Transferência </Link></CardLabel>
        </ActionCard>
        <ActionCard>
          <CardIcon><FiDollarSign /></CardIcon>
          <CardLabel>Pagamentos</CardLabel>
        </ActionCard>
        <ActionCard>
          <CardIcon><FiFileText /></CardIcon>
          <CardLabel>Extrato</CardLabel>
        </ActionCard>
        <ActionCard>
          <CardIcon><FiTrendingUp /></CardIcon>
          <CardLabel>Investimentos</CardLabel>
        </ActionCard>
        <ActionCard>
          <CardIcon><FiCreditCard /></CardIcon>
          <CardLabel>Cartões</CardLabel>
        </ActionCard>
        <ActionCard>
          <CardIcon><FiSettings /></CardIcon>
          <CardLabel>Configurações</CardLabel>
        </ActionCard>
      </CardsContainer>

      <SectionTitle>Últimas movimentações</SectionTitle>
      <TransactionsSection>
        <TransactionItem>
          <span>Pix recebido de Lucas</span>
          <span style={{ color: '#4caf50' }}>+ R$ 200,00</span>
        </TransactionItem>
        <TransactionItem>
          <span>Pagamento de boleto</span>
          <span style={{ color: '#f44336' }}>- R$ 89,90</span>
        </TransactionItem>
        <TransactionItem>
          <span>Transferência para Maria</span>
          <span style={{ color: '#f44336' }}>- R$ 300,00</span>
        </TransactionItem>
      </TransactionsSection>
    </Container>
  );
};

export default Menu;
