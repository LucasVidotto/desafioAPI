import { Container } from "../Style/ContaStyled";
import { useUserStore } from '../Store/userStore';
import { useContaStore } from "../Store/contaStore";
import {
  CardExtrato,
  ContainerExtrato,
  InfoItem,
  ValueHighlight,
  TitleSection,
} from "../Style/ExtratoStyled";
import Nav from "../Components/Nav";

const ContaDetalhes = () => {
  const  {nome, cpf, email} = useUserStore();
  const { saldo,tipoConta } = useContaStore();
  return (
    <Container>
      <Nav />
      <CardExtrato>
        <ContainerExtrato type="conta">
          <TitleSection>Detalhes da Conta</TitleSection>
          <InfoItem><strong>Nome do titular:</strong> {nome}</InfoItem>
          <InfoItem><strong>CPF:</strong> {cpf}</InfoItem>
          <InfoItem><strong>TipoConta:</strong> {tipoConta}</InfoItem>
          <InfoItem><strong>Email:</strong> {email}</InfoItem>
          <ValueHighlight>Saldo atual: R$ {saldo}</ValueHighlight>
        </ContainerExtrato>
      </CardExtrato>
    </Container>
  );
};

export default ContaDetalhes;
