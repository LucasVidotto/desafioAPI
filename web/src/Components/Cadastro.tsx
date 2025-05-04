import React, { useState } from 'react';
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

interface AuthScreenProps {
  onClick: () => void;
}

const Cadastro= ({onClick}:AuthScreenProps) => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    accountType: '',
    password: '',
  });

  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, cpf, email, accountType, password } = formData;

    if (!name || !cpf || !email || !accountType || !password) {
      setErrors('Preencha todos os campos!');
      return;
    }

    setErrors(null);
    console.log('Dados enviados:', formData);
    alert('Conta cadastrada com sucesso!');
  };

  return (
    <>
      <FormCard onSubmit={handleSubmit}>
        <Title>Criar Conta Bancária</Title>

        <Label>Nome completo</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />

        <Label>CPF</Label>
        <Input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />

        <Label>Email</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />

        <Label>Tipo de Conta</Label>
        <Select name="accountType" value={formData.accountType} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="corrente">Conta Corrente</option>
          <option value="poupanca">Conta Poupança</option>
        </Select>
        <Label>Senha</Label>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} />

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
