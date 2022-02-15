import React from 'react';
import {View} from 'react-native';
import CardContent from '../CardContent';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import styles from './styles';

// import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <View style={styles.card}>
      <CardHeader />
      <CardContent />
      <CardFooter />
    </View>
  );
};

export default Card;
