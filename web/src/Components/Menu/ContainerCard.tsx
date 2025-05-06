import { Link } from 'react-router-dom';
import {
  FiSend,
  FiDollarSign,
  FiFileText,
  FiTrendingUp,
  FiCreditCard,
  FiSettings,
} from 'react-icons/fi'
import { CardsContainer, ActionCard, CardIcon, CardLabel,} from '../../Style/MenuStyled';

interface PropsBlock {
    onClick : () => void,
    
}
const ContainerCard = ({onClick}:PropsBlock) =>{
    return(
        <CardsContainer>
            <ActionCard>
                <CardIcon><FiSend /></CardIcon>
                <CardLabel>
                     <Link to={{pathname:"/deposito"}}>Transferência </Link></CardLabel>
            </ActionCard>
            <ActionCard>
            <CardIcon><FiDollarSign /></CardIcon>
            <CardLabel>
                <Link to={{pathname:"/saque"}}>Saque</Link></CardLabel>
            </ActionCard>
            <ActionCard>
                 <CardIcon><FiFileText /></CardIcon>
                <CardLabel> <Link to={{pathname:"/transacao"}}>Extrato</Link></CardLabel>
            </ActionCard>
            <ActionCard>
                    <CardIcon><FiTrendingUp /></CardIcon>
                    <CardLabel>Investimentos</CardLabel>
            </ActionCard>
            <ActionCard onClick={onClick}>
                <CardIcon><FiCreditCard /></CardIcon>
                <CardLabel>Bloquear Conta</CardLabel>
            </ActionCard>
            <ActionCard>
                <CardIcon><FiSettings /></CardIcon>
                <CardLabel> <Link to={{pathname:"/conta"}}>Detalhes da Conta</Link></CardLabel>
            </ActionCard>
      </CardsContainer>
    )
}

export default ContainerCard;