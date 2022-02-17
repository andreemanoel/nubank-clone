import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';
import styles from './styles';

// import { Container } from './styles';

const CardContent: React.FC = () => {
  const {client} = useAppSelector(state => state.form);

  return (
    <View style={styles.cardContent}>
      <Text style={styles.title}>Saldo disponível</Text>
      <Text style={styles.description}>{`R$${client.client_valor}`}</Text>
    </View>
  );
};

export default CardContent;
