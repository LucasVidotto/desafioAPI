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
import { Link } from 'react-router-dom';
  
  const mockTransactions = [
    {
      id: 1,
      type: 'deposit',
      description: 'Depósito via TED',
      date: '30/04/2025',
      amount: 1200.00
    },
    {
      id: 2,
      type: 'withdraw',
      description: 'Saque no caixa eletrônico',
      date: '28/04/2025',
      amount: -300.00
    },
    {
      id: 3,
      type: 'deposit',
      description: 'Pagamento cliente',
      date: '25/04/2025',
      amount: 890.00
    },
    {
      id: 4,
      type: 'withdraw',
      description: 'Transferência Pix',
      date: '22/04/2025',
      amount: -150.00
    }
  ];
  
  const ExtratoTransacao = () => {

    return (
      <Container>
        <Card>
          <Title>Extrato de Transações</Title>
          <TransactionsList>
            {mockTransactions.map(tx => (
              <Link 
              to={`/extrato`} 
                state={{type:tx.type, description:tx.description, date:tx.date, amount:tx.amount}}>
                <TransactionItem key={tx.id} type={tx.type}>
                  <Description>{tx.description}</Description>
                  <DateText>{tx.date}</DateText>
                  <Amount type={tx.type}>
                    {tx.amount < 0 ? '-' : '+'} R$ {Math.abs(tx.amount).toFixed(2)}
                  </Amount>
                </TransactionItem>
              </Link>
            ))}
          </TransactionsList>
        </Card>
      </Container>
    );
  };
  
  export default ExtratoTransacao;
  