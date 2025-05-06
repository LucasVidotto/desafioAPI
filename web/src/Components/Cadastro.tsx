import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  FormCard,
  Title,
  Input,
  Label,
  Button,
  Row,
  Select,
  ErrorText,
} from '../Style/ContaStyled';
import {Toggle} from '../Style/AuthStyled';


const baseURlPessoa = 'http://localhost:3000/cadastros';

interface AuthScreenProps {
  onClick: () => void;
}

const Cadastro= ({onClick}:AuthScreenProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    tipoConta: '',
    password: '',
    dataNascimento: '',
    numConta: 0,
  });
  const [errors, setErrors] = useState<string | null>(null);

  const handlerCadastro = async () => {
    if (formData.tipoConta === 'corrente'){
      setFormData(prev => ({ ...prev, numConta: 1 }));
    }else{
      setFormData(prev => ({ ...prev, numConta: 2 }));
    }
    Axios.post(baseURlPessoa, {
      nome: formData.nome,
      cpf: formData.cpf,
      email: formData.email,
      tipoConta: formData.numConta,
      senha: formData.password,
      dataNascimento: formData.dataNascimento,

    })
  }

  //ecebe as informações digitadas pelo usuarios no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  //verifica se os campos estão preenchidos corretamente
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, cpf, email, tipoConta, password, dataNascimento } = formData;

    if (!nome || !cpf || !email || !tipoConta || !password || !dataNascimento) {
      setErrors('Preencha todos os campos!');
      return;
    }

    setErrors(null);
    console.log('Dados enviados:', formData);
    alert('Conta cadastrada com sucesso!');
    handlerCadastro();
    navigate('/dashboard')
  };

  return (
    <>
      <FormCard onSubmit={handleSubmit}>
        <Title>Criar Conta Bancária</Title>

        <Label>Nome completo</Label>
        <Input type="text" name="nome" value={formData.nome} onChange={handleChange} />

        <Label>CPF</Label>
        <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />

        <Label>Email</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />

        <Label>Senha</Label>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} />

        <Label>Data Nascimento</Label>
        <Input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />

        <Label>Tipo de Conta</Label>
        <Select name="tipoConta" value={formData.tipoConta} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="corrente">Conta Corrente</option>
          <option value="poupanca">Conta Poupança</option>
        </Select>

        {errors && <ErrorText>{errors}</ErrorText>}

        <Row>
          <Button type="submit">Cadastrar</Button>
        </Row>

         <Toggle onClick={() => onClick()}>
            Já tem cadastro? Entre aqui
          </Toggle>
      </FormCard>
    </>
  );
};

export default Cadastro;
