import styled  from "styled-components";

export const BoxNav = styled.div`
    display: flex;
    width: 350px;
    height: 70px;
    position: absolute;
    top: 4%;
    /* left: 30%; */
    gap: 20px;

    @media(max-width:480px){
      left:8%;
    }

`

export const CardsNav = styled.div`
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
`

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
