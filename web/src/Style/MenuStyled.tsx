import styled from 'styled-components';

export const Container = styled.div`
  width: 92.9vw;
  min-height: 100vh;
  padding: 3rem;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;

  @media(max-width: 480px){
    padding: 1rem 1rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 480px){
    width: 90%;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfilePic = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const UserInfo = styled.div``;

export const UserName = styled.h2`
  font-size: 1.3rem;
  margin: 0;
`;

export const AccountInfo = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const BalanceSection = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  margin-bottom: 2rem;
  @media(max-width:480px){
    width: 90%;
  }
`;

export const BalanceTitle = styled.p`
  margin: 0;
  opacity: 0.7;
`;

export const BalanceAmount = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0 0;
  color: #00e676;
`;

export const CloseUP = styled.div	`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top:1.5rem;
  left: 3%;

`

export const SectionTitle = styled.h3`
  margin: 2rem 11rem 1rem;
  align-self: flex-start;
  max-width: 1200px;
  width: 100%;
  font-size: 1.5rem;

  @media(max-width:480px){
    width: 40%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1260px;
`;

export const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-6px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #4fc3f7;
`;

export const CardLabel = styled.p`
  font-size: 1rem;
  & > a{
    text-decoration: none;
    color: inherit;
  }
`;

export const TransactionsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
`;

export const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  &:last-child {
    border-bottom: none;
  }
`;
