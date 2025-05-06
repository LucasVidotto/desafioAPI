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

const ContaDetalhes = () => {
  const  {nome, cpf, dataNascimento, email} = useUserStore();
  const { saldo,tipoConta } = useContaStore();
  console.log("Usuário logado:", nome, cpf, dataNascimento, email);
  return (
    <Container>
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
