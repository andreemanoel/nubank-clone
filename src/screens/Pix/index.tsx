import React from 'react';
import {Text, View} from 'react-native';
import CardMenu from '../../components/molecules/CardMenu';
import Container from '../../components/organisms/Container';
import HeaderScreen from '../../components/organisms/HeaderScreen';
import styles from './styles';

// import { Container } from './styles';

const Pix: React.FC = () => {
  return (
    <Container backgroundColor="#fff" justifyContent="flex-start" padding>
      <HeaderScreen />
      <View style={styles.container}>
        <Text style={[styles.title, {fontSize: 30}]}>Área Pix</Text>
        <Text style={styles.subTitle}>
          Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar
          nada por isso.
        </Text>
        <CardMenu />
      </View>
    </Container>
  );
};

export default Pix;
