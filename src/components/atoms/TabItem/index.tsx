import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export type TabItemProps = {
  icon: string;
  title: string;
};
const TabItem: React.FC<TabItemProps> = ({icon, title}) => {
  return (
    <View style={styles.tabItem}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.tabText}>{title}</Text>
    </View>
  );
};

export default TabItem;
