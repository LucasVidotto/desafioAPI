import styled, { keyframes } from 'styled-components';

// Animação suave de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #141e30, #243b55);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y:auto;
`;

export const FormCard = styled.form`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 450px;
  max-height:810px;
  animation: ${fadeIn} 0.8s ease forwards;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  overflow-y:auto;
  color: #fff;

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 80%;
    max-height: 80%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
  font-size: 1.8rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #dcdcdc;
`;

export const Input = styled.input`
  width: 93%;
  padding: 0.75rem 1rem;
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-left: 4px solid #4fc3f7;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #949393;
  font-size: 1rem;
  outline: none;
  transition: background 0.3s ease;


  &:focus {
    background: rgba(255, 255, 255, 0.2);
    border-left: 4px solid #4fc3f7;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  border-radius: 0.5rem;
  background: #4fc3f7;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #29b6f6;
    transform: scale(1.02);
  }
`;

export const Row = styled.div`
  margin-top: 1rem;
`;

export const ErrorText = styled.p`
  color: #ff6b6b;
  text-align: center;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;
