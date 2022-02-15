import React from 'react';
import {View} from 'react-native';
import Card from '../Card';
import Menu from '../Menu';
import styles from './styles';

// import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <View style={styles.content}>
      <Menu />
      <Card />
    </View>
  );
};

export default Content;
