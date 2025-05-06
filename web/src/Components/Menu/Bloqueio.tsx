import { CardBlock } from "../../Style/BloqueioStyled";

interface Props{
    onClick : () => void;
}
const Bloqueio = ({onClick}: Props) =>{
    return(
        <>
            <CardBlock>
               <div> Deseja bloquear a conta?</div>
               <div>
                <button onClick={onClick}>Sim</button>
                <button>Não</button>
               </div>
            </CardBlock>
        </>
    )
}

export default Bloqueio;