import { Container } from "../Style/ContaStyled";
import {ContainerExtrato,TitleExtrato,BoxExtrato,CardExtrato,ValueHighlight,InfoItem} from "../Style/ExtratoStyled";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Nav from "./Nav";
const Extrato = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    useEffect(() => {
         if(!data){
            navigate('/transacao');
        }
    }, [navigate, data]);

    if(!data) return null;
    const { type, description, date, amount } = location.state;
    return(
        <>
        <Nav/>
        <Container>
            <CardExtrato>
                <ContainerExtrato type={type}>
                    <TitleExtrato>
                        <ValueHighlight>R$ {amount}</ValueHighlight>
                        <InfoItem><strong>Tipo:</strong> {description}</InfoItem>
                    </TitleExtrato>
                    <BoxExtrato>
                        <InfoItem><strong>Recebedor:</strong> Fulano Fulano</InfoItem>
                        <InfoItem><strong>Data:</strong> {date} às 18:00:00</InfoItem>
                        <InfoItem><strong>ID transação:</strong> 123456678900000000000000000000</InfoItem>
                        <InfoItem><strong>Instituição:</strong> Banco tal tal tal tal</InfoItem>
                        <InfoItem><strong>CPF/CNPJ:</strong> 123.123.123-00</InfoItem>
                    </BoxExtrato>
                </ContainerExtrato>
            </CardExtrato>
        </Container>
        </>
    )
}

export default Extrato;