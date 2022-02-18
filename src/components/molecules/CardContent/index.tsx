import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';
import styles from './styles';

export type CardContentProps = {
  visibly: boolean;
};

const CardContent: React.FC<CardContentProps> = ({visibly}) => {
  const {client} = useAppSelector(state => state.form);

  return (
    <View style={styles.cardContent}>
      {!visibly ? (
        <View style={styles.box} />
      ) : (
        <>
          <Text style={styles.title}>Saldo disponível</Text>
          <Text style={styles.description}>{`R$${client.client_valor}`}</Text>
        </>
      )}
    </View>
  );
};

export default CardContent;
