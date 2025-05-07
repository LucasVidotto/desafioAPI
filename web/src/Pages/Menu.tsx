import React, { useEffect, useState } from 'react';
import { useContaStore } from '../Store/contaStore';
import {
  Container,
  BalanceSection,
  BalanceTitle,
  BalanceAmount,
  SectionTitle,
  TransactionsSection,
  TransactionItem,
  CloseUP,
} from '../Style/MenuStyled';
import axios from 'axios';

import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import HeaderMenu from '../Components/Menu/HeaderMenu';
import ContainerCard from '../Components/Menu/ContainerCard';
import Bloqueio from '../Components/Menu/Bloqueio';

const Menu = () => {
  const {saldo, tipoConta, idConta} = useContaStore();
  const [statusBlock, setStatusBlock] = useState(false);
  const [conta,setConta] = useState('');

  useEffect(() =>{//verificação do tipo de conta
    if( tipoConta === 1){
      setConta('Conta Corrente');
    }else{
      setConta('Conta Poupança');
    }
  },[tipoConta])

  const [closeUp, setCloseUp] = useState(false); // Estado para controlar a visibilidade do saldo

  const handlerCloseUP = () => {
    setCloseUp(!closeUp); // Alterna a visibilidade do saldo
  }

  const handlerBloqueio = async () =>{//bloqueia a conta
    const response = await axios.post('http://localhost:3000/bloqueio',{idConta});
    if (response.data){
      console.log(response.data);
    }
  }

  const handleropenBloqueio = () =>{//chama o bloqueio
    setStatusBlock(!statusBlock)
  }

  return (
    <Container>
     <HeaderMenu conta={conta}/>
     {statusBlock ? <Bloqueio onClick={handlerBloqueio}/> : <></>}
      <BalanceSection> {/* Saldo */}
        <div>
          <BalanceTitle>Saldo disponível</BalanceTitle>
          <BalanceAmount>{closeUp ? saldo : '************'}</BalanceAmount>
        </div>
        <CloseUP onClick={handlerCloseUP}>
          {closeUp ? <FaRegEye size={'30px'}/> : <FaRegEyeSlash size={'30px'}/>}
        </CloseUP>
      </BalanceSection>

      <SectionTitle>Serviços</SectionTitle>
      <ContainerCard onClick={handleropenBloqueio} />

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