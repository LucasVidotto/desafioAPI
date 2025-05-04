import { useNavigate } from 'react-router-dom';
import {
  Container,
  Content,
  Code,
  Message,
  SubMessage,
  Button404,
  Illustration
} from '../Style/NotFoundStyled';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Code>404</Code>
        <Message>Página não encontrada</Message>
        <SubMessage>
          Parece que você tentou acessar algo que não existe.<br />
          Volte para a página inicial do seu banco.
        </SubMessage>
        <Button404 onClick={() => navigate('/auth')}>Ir para o início</Button404>
      </Content>

      <Illustration>
        {/* Ilustração SVG sutil e profissional */}
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5z"
            stroke="#00e676"
            strokeWidth="1.5"
            fill="transparent"
          />
          <path
            d="M2 17l10 5 10-5"
            stroke="#00e676"
            strokeWidth="1.5"
            fill="transparent"
          />
          <path
            d="M2 12l10 5 10-5"
            stroke="#00e676"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
      </Illustration>
    </Container>
  );
};

export default NotFound;
