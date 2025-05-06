import React, { useState } from 'react';
import { useUserStore } from '../Store/userStore';
import { useContaStore } from '../Store/contaStore';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
    FormCard,
    Title,
    Input,
    Label,
    Button,
    Row,
    ErrorText,
  } from '../Style/ContaStyled'
  import {Toggle} from '../Style/AuthStyled';
  interface AuthScreenProps {
    onClick: () => void;
  }
const baseURlPost = 'http://localhost:3000/login';
const AuthScreen = ({onClick}: AuthScreenProps) => {

  const [user, setUser] = useState<{//dados para api
    idPessoa: number,
    idConta: number,
    nome :string,
    cpf:string,
    dataNascimento:string,
    email:string,
    tipoConta: number,
    limiteSaqueDiario: number,
    saldo: number;
  } | null>(null);
  const  {takeData} = useUserStore();
  const {takeConta} = useContaStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cpf: '',
    senha: '',
  });//dados da página digitadas pelo usuario
  const [errors, setErrors] = useState<string | null>(null);

  //dados do preenchimento do usuario no formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  //submit dos dados comchamada do banco e  verificação dos dados
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {cpf, senha } = formData;
    if (!cpf || !senha) {
      setErrors('Preencha todos os campos!');
      return;
    }
    setErrors(null);
    try {
      //dados da pessoa
      const response = await Axios.post(baseURlPost,{cpf, senha});
      
      if (response.data){
        console.log('dados:', response.data);
        const {pessoa, conta} = response.data; // recebe dados do banco
        const { idPessoa, nome, cpf, dataNascimento, email  } = pessoa;//separa para pessoa
        const {idConta,saldo ,limiteSaqueDiario,tipoConta, flagAtivo} = conta; //separa para conta
        if(flagAtivo === true){
          setUser({ idPessoa,idConta, nome, cpf, dataNascimento, email , limiteSaqueDiario, tipoConta,saldo });
          takeData(idPessoa,nome, cpf, dataNascimento, email);
          takeConta(idConta, saldo, limiteSaqueDiario,tipoConta);
          setTimeout(() => {
            navigate('/dashboard');
          }, 500); 
        }else{
        alert('Sua conta está Desativada')
        }
        /*  */
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
    console.log(user)
  };
  return (
    <>
        <FormCard onSubmit={handleSubmit}>
          <Title>
              Entrar na Conta
          </Title>

          <Label>CPF </Label>
          <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
          <Label>Senha</Label>
          <Input type="password" name="senha" value={formData.senha} onChange={handleChange} />

          {errors && <ErrorText>{errors}</ErrorText>}
          <Row>
            <Button type="submit">Cadastrar</Button>
          </Row>
            
          <Toggle onClick={() => onClick()}>
              Não tem uma conta? Cadastre-se
          </Toggle>
        </FormCard>
    </>
  );
};

export default AuthScreen;