import {Card,Container,Title,FormDeposito,Input,GrupoInput,Button} from '../Style/DepositoStyled';
import { useContaStore } from '../Store/contaStore';
import {ErrorText } from '../Style/ContaStyled'
import Axios from 'axios';
import { useState } from 'react';
const baseURlPost = 'http://localhost:3000/transacoes';

const Deposito = () => {
    const [deposito,setDeposito] = useState({
        tipoConta: 0,
        valor: 0,
        cpf: '',
        dataTransacao: new Date().toISOString().split('T')[0], // '2025-05-05'
        tipoDeposito: 'deposito'
    });
    const {idConta,tipoConta } = useContaStore();
    const [errors, setErrors] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDeposito(prev => ({ ...prev, [name]: value }));
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {valor,cpf, dataTransacao, tipoDeposito} = deposito;
        if(!cpf || !tipoConta || tipoConta === 0 || !valor || valor === 0 ){
            setErrors('preencha todos os campos!');
            return;
        }
        setErrors(null);
        console.log(idConta,valor, dataTransacao)
        try {
            const response = await Axios.post(baseURlPost,{idConta, valor, dataTransacao, tipoDeposito});
            if (response.data){
                console.log('dados:', response.data);
                /* const {pessoa, conta} = response.data; // recebe dados do banco
                const { idPessoa, nome, cpf, dataNascimento, email  } = pessoa;//separa para pessoa */
                /* takeData(idPessoa,nome, cpf, dataNascimento, email);
                takeConta(idConta, saldo, limiteSaqueDiario,tipoConta); */
            }
            } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }

    }
    return (
        <Container>
            <Card>
            <Title> Depósito</Title>
            <FormDeposito onSubmit={handleSubmit}>
               <GrupoInput>
                <label htmlFor="">CPF</label>
                    <Input type="text" placeholder='111111111' name="cpf" onChange={handleChange}/>

                    <label htmlFor="">Conta</label>
                    <Input type="number" placeholder='1' name="tipoConta"  onChange={handleChange}/>

                    <label htmlFor="">Valor</label>
                    <Input type="number" placeholder='R$ 0,00' name="valor"  onChange={handleChange}/>

                     {errors && <ErrorText>{errors}</ErrorText>}

                    <Button type="submit">Depositar</Button>
               </GrupoInput>
            </FormDeposito>
            </Card>
        </Container>
    );
}

export default Deposito;