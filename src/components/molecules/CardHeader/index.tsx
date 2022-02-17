import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const CardHeader: React.FC = () => {
  return (
    <View style={styles.cardHeader}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon name="attach-money" size={28} color="#666" />
        <Text style={styles.text}>NuConta</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="visibility-off" size={28} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
