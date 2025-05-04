import {
    Container,
    Card,
    Title,
    Form,
    InputGroup,
    Label,
    Input,
    Button,
  } from '../Style/SaqueStyled';
  
  const Saque = () => {
    return (
      <Container>
        <Card>
          <Title>Saque Bancário</Title>
          <Form>
            <InputGroup>
              <Label>Conta</Label>
              <Input type="text" placeholder="123456-7" />
            </InputGroup>
            <InputGroup>
              <Label>Valor</Label>
              <Input type="number" placeholder="R$ 0,00" />
            </InputGroup>
            <Button type="submit">Sacar</Button>
          </Form>
        </Card>
      </Container>
    );
  };
  
  export default Saque;
  