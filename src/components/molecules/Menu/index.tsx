import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FormRoute} from '../../../services/routes';

import styles from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.code}>
        <QRCode
          value="https://api.whatsapp.com/send?phone=5543998196642"
          color="#8D00DA"
        />
      </View>

      <View style={styles.nav}>
        <View style={styles.navIem}>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>
        <View style={styles.navIem}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Perfil</Text>
        </View>
        <View style={styles.navIem}>
          <Icon name="credit-card" size={20} color="#fff" />
          <Text style={styles.navText}>Configurar cartão</Text>
        </View>
        <View style={styles.navIem}>
          <Icon name="smartphone" size={20} color="#fff" />
          <Text style={styles.navText}>Configurações do app</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.dispatch({
            ...StackActions.replace(FormRoute.name),
          });
        }}
        style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;
