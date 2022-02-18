import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export type CardHeaderProps = {
  visibly: boolean;
  setVisibly: (visibly: boolean) => void;
};

const CardHeader: React.FC<CardHeaderProps> = ({visibly, setVisibly}) => {
  return (
    <View style={styles.cardHeader}>
      <View style={styles.buttonContainer}>
        <Icon name="coins" size={25} color="#666" />
        <Text style={styles.text}>NuConta</Text>
      </View>
      <TouchableOpacity onPress={() => setVisibly(!visibly)}>
        {!visibly ? (
          <IconM name="visibility" size={28} color="#666" />
        ) : (
          <IconM name="visibility-off" size={28} color="#666" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
