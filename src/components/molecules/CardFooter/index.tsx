import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const CardFooter: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.annotation}>
        Transferência de R$20,00 recebido de Maria Eloiza hoje às 16:47h
      </Text>
    </View>
  );
};

export default CardFooter;
