import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #2c5364, #203a43, #0f2027);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #ffffff10;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  animation: ${fadeInUp} 0.6s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media(max-width:480px){
        width: 70%;
    }
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff5252;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #ffcdd2;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: #ffffff15;
  color: #fff;
  font-size: 1rem;
  transition: 0.3s ease all;
  outline: none;

  &:focus {
    background: #ffffff25;
    box-shadow: 0 0 0 2px #ff525240;
  }
`;

export const Button = styled.button`
  background: #ff5252;
  color: #000;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff1744;
  }
`;
