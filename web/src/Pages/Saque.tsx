import Nav from '../Components/Nav';
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
import Axios from 'axios';
import { useState } from 'react';
import { useContaStore } from '../Store/contaStore';
import {ErrorText } from '../Style/ContaStyled';

const baseURlPost = 'http://localhost:3000/transacoes';
  
  const Saque = () => {
    const [deposito,setDeposito] = useState({
            tipoConta: 0,
            valor: 0.0,
            cpf: '',
            dataTransacao: new Date().toISOString().split('T')[0], // '2025-05-05'
            tipoDeposito: 'saque'
        });
        const {idConta,tipoConta,saldo } = useContaStore();
        const [errors, setErrors] = useState<string | null>(null);
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setDeposito(prev => ({ ...prev, [name]: value }));
        };
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            const {valor,cpf, dataTransacao, tipoDeposito} = deposito;
            if(!tipoConta || tipoConta === 0 || !valor || valor === 0 ){
                setErrors('preencha todos os campos!');
                console.log(cpf,tipoConta, valor,idConta)
                return;
            }
            setErrors(null);
           if(saldo >= valor){
            try {
              const response = await Axios.post(baseURlPost,{idConta, valor, dataTransacao, tipoDeposito});
              if (response.data){
                  console.log('dados:', response.data);
              }
              } catch (error) {
              console.error('Erro ao buscar usuários:', error);
            }
           }else{
            alert('Saldo Insuficiente\n Você possui R$ '+saldo);
           }
    
        }

    return (
      <Container>
        <Nav />
        <Card>
          <Title>Saque Bancário</Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Tipo Conta</Label>
              <Input type="text" placeholder="001" name="tipoConta" onChange={handleChange}/>
            </InputGroup>
            <InputGroup>
              <Label>Valor</Label>
              <Input type="number" placeholder="R$ 0,00" name="valor" onChange={handleChange}/>
            </InputGroup>

            {errors && <ErrorText>{errors}</ErrorText>}

            <Button type="submit">Sacar</Button>
          </Form>
        </Card>
      </Container>
    );
  };
  
  export default Saque;
  