import { useEffect, useState } from 'react';
import Axios from 'axios';
import {
    Container,
    Card,
    Title,
    TransactionsList,
    TransactionItem,
    Description,
    DateText,
    Amount
  } from '../Style/TransacaoStyled';
  import { useContaStore } from '../Store/contaStore';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
const baseURlPost = 'http://localhost:3000/extrato';


  const ExtratoTransacao = () => {
  const [extratos, setExtratos] = useState<any>();
  const {idConta } = useContaStore();

  useEffect(() =>{//puxa os dados da transção por idConta
    console.log('id : ',idConta);
    Axios.post(baseURlPost, {
      idConta: idConta
    }).then((response) =>{
      setExtratos(response.data);
      console.log('Extrato : ',response.data);
    }).catch((error) =>{
      console.error('Erro ao buscar dados do extrato', error);
    })
    
  },[])
    return (
      <Container>
        <Nav />
        <Card>
          <Title>Extrato de Transações</Title>
          <TransactionsList>
            {extratos && extratos.length > 0 ? 
            (extratos.map((tx: any) => (
              <Link 
              key={tx.idtransacao}
              to={`/extrato`} 
                state={{type:tx.tipoDeposito, 
                description:`Transação ${tx.tipoDeposito}`, 
                date:tx.dataTransacao, 
                amount:parseFloat(tx.valor)}}>
                <TransactionItem key={tx.idTransacao} type={tx.tipoDeposito}>
                  <Description>Transação {tx.tipoDeposito}</Description>
                  <DateText>{tx.dataTransacao}</DateText>
                  <Amount type={tx.tipoDeposito}>
                    {tx.amount < 0 ? '-' : '+'} R$ {Math.abs(parseFloat(tx.valor)).toFixed(2)}
                  </Amount>
                </TransactionItem>
              </Link>
            ))
          ) :
          ( <p>Não há transações para exibir.</p> )}
          </TransactionsList>
        </Card>
      </Container>
    );
  };
  
  export default ExtratoTransacao;
  