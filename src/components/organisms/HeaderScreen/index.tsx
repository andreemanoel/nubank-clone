import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
// import { Container } from './styles';

const HeaderScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="close" size={28} color="#838383" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="help-outline" size={28} color="#838383" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderScreen;
