import React from 'react';
import {Image, Text, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';

import styles from './styles';

const Logo: React.FC = () => {
  const {client} = useAppSelector(state => state.form);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Nubank_Logo.png')} />
      <Text style={styles.title}>{client.client_nome}</Text>
    </View>
  );
};

export default Logo;
