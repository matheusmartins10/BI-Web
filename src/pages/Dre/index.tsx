/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header/index';

const Dre = () => {
  return (
    <>
      <Header message="DRE" />
      <Container>
        <iframe
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiN2NjNzdkMmYtOTExYS00YWMxLWJjYTItODg5ZWYyOTYwM2I2IiwidCI6ImQxNjAwOTNlLTdhMDYtNDUwNS1iMzY1LTlhMWNkNjE1OGYxNyJ9"
          frameBorder="0"
          allowFullScreen
        />
      </Container>
    </>
  );
};

export default Dre;
