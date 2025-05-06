import { CardBlock } from "../../Style/BloqueioStyled";

const Bloqueio = () =>{
    return(
        <>
            <CardBlock>
               <div> Deseja mesmo bloquear a sua conta?</div>
               <div>
                <button>Sim</button>
                <button>Não</button>
               </div>
            </CardBlock>
        </>
    )
}

export default Bloqueio;