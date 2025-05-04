import {
    Container,
} from '../Style/ContaStyled';

import { useState } from 'react';
import Cadastro from '../Components/Cadastro';
import Login from '../Components/Login';

const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <Container>
            {isLogin ? (
                <Login onClick={() => setIsLogin(!isLogin)}/>
            ) : (
                <Cadastro onClick={() => setIsLogin(!isLogin)}/>
            )}
        </Container>
    )
}

export default AuthScreen;
