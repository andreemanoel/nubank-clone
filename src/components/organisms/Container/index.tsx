import React from 'react';
import {View} from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Container: React.FC = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
