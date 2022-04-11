import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export type MenuCircleProps = {
  icon?: string;
  text?: string;
  show?: boolean;
};

const MenuCircle: React.FC<MenuCircleProps> = ({
  icon = '',
  text = '',
  show = true,
}) => {
  return (
    <View style={styles.menu}>
      {show && (
        <>
          <TouchableOpacity style={styles.circle}>
            <Icon name={icon} size={25} color="#000" />
          </TouchableOpacity>
          <Text style={styles.text}>{text}</Text>
        </>
      )}
    </View>
  );
};

export default MenuCircle;
