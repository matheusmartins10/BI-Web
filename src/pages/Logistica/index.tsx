/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header/index';

const Logistica = () => {
  return (
    <>
      <Header message="Logistica" />
      <Container>
        <iframe
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYWZmZDc2NGYtNmIyNy00NjgzLTg1YTUtYjQzMmRjNzNmYWRkIiwidCI6ImQxNjAwOTNlLTdhMDYtNDUwNS1iMzY1LTlhMWNkNjE1OGYxNyJ9&pageName=ReportSection"
          frameBorder="0"
          allowFullScreen
        />
      </Container>
    </>
  );
};

export default Logistica;
