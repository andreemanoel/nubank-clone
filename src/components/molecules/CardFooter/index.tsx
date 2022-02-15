import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const CardFooter: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.annotation}>
        Transferência de R$20,00 recebido de Neymar JR hoje às 18:00h
      </Text>
    </View>
  );
};

export default CardFooter;
