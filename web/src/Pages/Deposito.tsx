import {Card,Container,Title,FormDeposito,Input,GrupoInput,Button} from '../Style/DepositoStyled'

const Deposito = () => {
    return (
        <Container>
            <Card>
            <Title> Depósito</Title>
            <FormDeposito>
               <GrupoInput>
                <label htmlFor="">Agência</label>
                    <Input type="text" placeholder='0001' name='agencia'/>

                    <label htmlFor="">Conta</label>
                    <Input type="text" placeholder='123456-7' name='conta'/>

                    <label htmlFor="">Valor</label>
                    <Input type="number" placeholder='R$ 0,00'/>

                    <Button type="submit">Depositar</Button>
               </GrupoInput>
            </FormDeposito>
            </Card>
        </Container>
    );
}

export default Deposito;