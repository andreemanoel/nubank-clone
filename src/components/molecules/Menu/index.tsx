import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Menu: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.code}>
        <QRCode value="https://rocketseat.com.br" color="#8b10ae" />
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
          console.log('saiu');
        }}
        style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;
