import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../Logo';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </View>
  );
};

export default Header;
