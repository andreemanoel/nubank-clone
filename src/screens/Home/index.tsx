import React from 'react';
import Content from '../../components/molecules/Content';
import Header from '../../components/molecules/Header';
import Tabs from '../../components/molecules/Tabs';
import Container from '../../components/organisms/Container';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Tabs />
    </Container>
  );
};

export default Home;
