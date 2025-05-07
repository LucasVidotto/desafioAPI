import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthScreen from '../Pages/Autenticar';
import Menu from '../Pages/Menu';
import NotFound from '../Components/NotFound';
import Deposito from '../Pages/Deposito';
import Saque from '../Pages/Saque';
import ExtratoTransacao from '../Pages/ExtratoTransacao';
import Extrato from '../Components/Extratos';
import ContaDetalhe from '../Pages/ContaDetalhe';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/dashboard" element={<Menu />} />
        <Route path='/deposito' element={<Deposito />} />
        <Route path='/saque' element={<Saque />} />
        <Route path="/transacao" element={<ExtratoTransacao/>} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/conta" element={<ContaDetalhe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
