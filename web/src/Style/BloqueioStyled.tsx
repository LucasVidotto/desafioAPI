import styled  from "styled-components";

export const CardBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:absolute;
    top: 20%;
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius:1rem;
    gap: 1rem;

    & > div:nth-child(1){
        width: 70%;
    }
    & > div:nth-child(2){
        display:flex;
        align-items:center;
        justify-content:center;
        width: 90%;
        height: 60%;
        gap:1rem;

        &> button{
            width: 50%;
            height: 50%;
            background-color:#1b333b;
            }
    }
`