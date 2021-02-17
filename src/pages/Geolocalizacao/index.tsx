/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header/index';

const Geolocalizacao = () => {
  return (
    <>
      <Header message="Geolocalização" />
      <Container>
        <iframe
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiMjM5OWUzY2EtZGQwNi00YWQ4LWI1MmUtOGYzNzk0NDc2N2UxIiwidCI6ImQxNjAwOTNlLTdhMDYtNDUwNS1iMzY1LTlhMWNkNjE1OGYxNyJ9&pageName=ReportSectionf3fe14f04e2d9e9d9503"
          frameBorder="0"
          allowFullScreen
        />
      </Container>
    </>
  );
};

export default Geolocalizacao;
