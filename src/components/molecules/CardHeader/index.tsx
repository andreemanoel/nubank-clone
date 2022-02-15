import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const CardHeader: React.FC = () => {
  return (
    <View style={styles.cardHeader}>
      <Icon name="attach-money" size={28} color="#666" />
      <Icon name="visibility-off" size={28} color="#666" />
    </View>
  );
};

export default CardHeader;
