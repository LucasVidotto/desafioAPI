import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    background: linear-gradient(135deg, #141e30, #243b55);
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
`

export const Card = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    width: 100%;
    flex-direction: column;
    max-width: 450px;
    padding: 3rem 2.5rem;

    @media(max-width:480px){
        width: 70%;
    }
`
export const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
`
export const FormDeposito = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const GrupoInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus{
        background: rgba(255, 255, 255, 0.2);
        border-left: 4px solid #4fc3f7;
    }
 
`
export const Button = styled.button`
  background: #00e676;
  color: #000;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: #00c853;
  }
`