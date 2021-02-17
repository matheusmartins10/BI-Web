import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { HeaderContainer, HeaderContent, Profile } from './styles';

interface Message {
  message?: string;
}

const Header = ({ message }: Message) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="BI" />

        <Profile>
          <div>
            <span>Bem vindo,</span>
            <Link to="/profile">
              <strong> {message} </strong>
            </Link>
          </div>
        </Profile>
        <Link to="/dashboard">
          <FiHome />
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
