import React, { useState,useEffect } from 'react';
import { useUserStore } from '../Store/userStore';
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
  
const baseURLGet = 'hhtp://localhost:3000/users';
const baseURlPost = 'http://localhost:3000/login';
const AuthScreen = ({onClick}: AuthScreenProps) => {

  const [user, setUser] = useState([]);
  const  {takeData} = useUserStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {email, senha } = formData;
    if (!email || !senha) {
      setErrors('Preencha todos os campos!');
      return;
    }

    setErrors(null);

    try {
      const response = await Axios.post(baseURlPost,{email, senha});

      if (response.data){
        setUser(response.data);

        takeData(
          response.data.nome,
          response.data.cpf,
          response.data.dataNascimento,
          response.data.email,
        )

        console.log('Usuário logado:', response.data.nome, response.data.cpf, response.data.dataNascimento, response.data.email);

        navigate('/conta');
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
    
    console.log('Dados enviados:', formData);


    navigate('/conta');
  };

 

  return (
    <>
        <FormCard onSubmit={handleSubmit}>
          <Title>
              Entrar na Conta
          </Title>

          <Label>Email</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
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
