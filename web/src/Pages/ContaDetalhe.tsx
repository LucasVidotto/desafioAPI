import { Container } from "../Style/ContaStyled";
import { useUserStore } from '../Store/userStore';
import {
  CardExtrato,
  ContainerExtrato,
  InfoItem,
  ValueHighlight,
  TitleSection,
} from "../Style/ExtratoStyled";

const mockConta = {
  titular: "Fulano de Tal",
  numeroConta: "12345-6",
  agencia: "0001",
  banco: "Banco XPTO",
  saldo: 3500.75
};

const ContaDetalhes = () => {
  const  {idPessoa,nome, cpf, dataNascimento, email} = useUserStore();
  console.log("Usuário logado:", nome, cpf, dataNascimento, email);
  return (
    <Container>
      <CardExtrato>
        <ContainerExtrato type="conta">
          <TitleSection>Detalhes da Conta</TitleSection>
          <InfoItem><strong>Nome do titular:</strong> {idPessoa}</InfoItem>
          <InfoItem><strong>Número da conta:</strong> {cpf}</InfoItem>
          <InfoItem><strong>Agência:</strong> {dataNascimento}</InfoItem>
          <InfoItem><strong>Banco:</strong> {email}</InfoItem>
          <ValueHighlight>Saldo atual: R$ {mockConta.saldo.toFixed(2)}</ValueHighlight>
        </ContainerExtrato>
      </CardExtrato>
    </Container>
  );
};

export default ContaDetalhes;
