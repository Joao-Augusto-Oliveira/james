import logoImg from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ButtonNav } from '../ButtonNav';

import * as S from './styles';

interface HeaderProps {
  isAddProduct?: boolean;
}

export function Header({isAddProduct = false}: HeaderProps) {
  return (
    <>
    {isAddProduct ? (
      <S.Container>
      <S.Content>
        <img src={logoImg} alt="logo" />
          <NavLink to="/criar-novo-produto" exact>
            <ButtonNav name='Cadastrar Produto' />
          </NavLink>
      </S.Content>
    </S.Container> ) : (
       <S.Container>
       <S.Content>
         <img src={logoImg} alt="logo" />
           <NavLink to="/" exact>
             <ButtonNav name='Listar Produtos' />
           </NavLink>
       </S.Content>
     </S.Container>
    )}

  </>
  )
}
