import styled from "styled-components";

export const CardExtrato = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    width: 100%;
    flex-direction: column;
    max-width: 600px;
    padding: 2rem 2.5rem;
`
export const ContainerExtrato = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 100%; */
    height: 100%;
    background-color: #ffffff10;
    border-left: 5px solid ${props =>
    props.type === 'deposito' ? '#00e676' : '#ff5252'};
    border-radius: 0.8rem;
    padding: 1rem 1rem;
`

export const TitleExtrato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    /* & >p{
        font-size: 1.3rem;
    }
    & >div{
        position: absolute;
        top: 22%;
        left:53%;
        font-size: 1.3rem;  
        font-weight: bold;
    } */
`

export const ValueHighlight = styled.div`
  font-size: 2.2rem;
  color: #2ecc71;
  font-weight: 700;
`;

export const InfoItem = styled.p`
  font-size: 1.2rem;
  color: #eee;
  strong {
    color: #fff;
  }
`;

export const BoxExtrato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const TitleSection = styled.h2`
  font-size: 1.6rem;
  color: #111;
  margin-bottom: 1.2rem;
`;