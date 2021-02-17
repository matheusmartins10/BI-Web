/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header/index';

const CustoLogistica = () => {
  return (
    <>
      <Header message="Custo de Logística" />
      <Container>
        <iframe
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTdlOTliYTEtZmNmYi00NmJjLTgwYzktMjczZjQ2NmVmZmZkIiwidCI6ImQxNjAwOTNlLTdhMDYtNDUwNS1iMzY1LTlhMWNkNjE1OGYxNyJ9&pageName=ReportSection948f0cf67a6f28eb5003"
          frameBorder="0"
          allowFullScreen
        />
      </Container>
    </>
  );
};

export default CustoLogistica;
