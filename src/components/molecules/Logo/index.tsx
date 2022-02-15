import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Nubank_Logo.png')} />
      <Text style={styles.title}>André</Text>
    </View>
  );
};

export default Logo;
