import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Card = styled.div`
  background: #ffffff10;
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 700px;
  color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  max-height:400px;
  overflow-y: auto;
  padding-right: 10px;
  gap: 1.2rem;
  & > a{
    text-decoration: none;
    color: inherit;
  }
`;

export const TransactionItem = styled.div<{ type: string }>`
  background: #ffffff15;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.4s ease;
  border-left: 5px solid ${props =>
    props.type === 'deposito' ? '#00e676' : '#ff5252'};
`;

export const Description = styled.span`
  font-size: 1rem;
  flex: 1;
`;

export const DateText = styled.span`
  font-size: 0.9rem;
  color: #ccc;
  margin-left: 1rem;
`;

export const Amount = styled.span<{ type: string }>`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${props => (props.type === 'deposito' ? '#00e676' : '#ff5252')};
`;
