/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiPower, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  SectionCard,
} from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <div>
              <span>Bem vindo,</span>
              <Link to="/">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <SectionCard>
          <div>
            <h2> Logística </h2>
          </div>
          <div>
            <Link to="/bi/logistica">
              {' '}
              acessar <FiArrowRight />{' '}
            </Link>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> Custo de Logística </h2>
          </div>
          <div>
            <Link to="/bi/custo-logistica">
              {' '}
              acessar <FiArrowRight />{' '}
            </Link>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> DRE </h2>
          </div>
          <div>
            <Link to="/bi/dre">
              {' '}
              acessar <FiArrowRight />{' '}
            </Link>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> Geolocalização </h2>
          </div>
          <div>
            <Link to="/bi/geolocalizacao">
              {' '}
              acessar <FiArrowRight />{' '}
            </Link>
          </div>
        </SectionCard>
      </Content>
    </Container>
  );
};

export default Dashboard;
