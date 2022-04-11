import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export type TabItemProps = {
  icon: string;
  title: string;
  route?: string;
};
const TabItem: React.FC<TabItemProps> = ({icon, title, route = ''}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (route) {
      navigation.navigate(route as never);
    }
  };

  return (
    <TouchableOpacity style={styles.tabItem} onPress={() => handleNavigation()}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.tabText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
