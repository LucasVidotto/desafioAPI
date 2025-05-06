import {FiLogOut} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  UserSection,
  ProfilePic,
  UserInfo,
  UserName,
  AccountInfo,
} from '../../Style/MenuStyled';
import { useUserStore } from '../../Store/userStore';
import { useContaStore } from '../../Store/contaStore';

interface Props {
  conta : string
}

const HeaderMenu = ({conta} : Props) =>{
  const navigate = useNavigate();
   const {nome,resetData} = useUserStore();
   const {resetConta} = useContaStore();
  const handlerOut =() =>{//deslogar
    alert('Você saiu da conta!');
    resetData();
    resetConta();
    navigate('/auth'); // Redireciona para a página de autenticação
  }
    return(
      <Header>
      <UserSection>
        <ProfilePic src="https://i.pravatar.cc/150?img=4" />
        <UserInfo>
          <UserName>{nome}</UserName>
          <AccountInfo>Tipo Conta : {conta}</AccountInfo>
        </UserInfo>
      </UserSection>
  
      <button onClick={handlerOut}><FiLogOut /> Sair</button>
  </Header>
    )
}

export default HeaderMenu;