import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  padding: 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease;
  margin: auto;
`;

export const Code = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  color: #00e676;
  margin: 0;
`;

export const Message = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export const SubMessage = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  opacity: 0.8;
`;

export const Button404 = styled.button`
  margin-top: 2rem;
  padding: 0.85rem 2rem;
  font-size: 1.1rem;
  background: #00e676;
  border: none;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: #00c853;
  }
`;

export const Illustration = styled.div`
  animation: ${fadeIn} 1s ease;
  svg {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
