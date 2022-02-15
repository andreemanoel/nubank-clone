import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const CardContent: React.FC = () => {
  return (
    <View style={styles.cardContent}>
      <Text style={styles.title}>Saldo disponível</Text>
      <Text style={styles.description}>R$7.000,00</Text>
    </View>
  );
};

export default CardContent;
