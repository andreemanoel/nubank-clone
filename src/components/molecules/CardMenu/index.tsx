import React from 'react';
import {Text, View} from 'react-native';
import MenuCircle from '../MenuCircle';
import styles from './styles';

const CardMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar</Text>
      <View style={styles.containerMenu}>
        <MenuCircle icon="file-upload" text="Transferir" />
        <MenuCircle icon="filter-none" text="Pix Copia e Cola" />
        <MenuCircle icon="qr-code" text="Ler QR code" />
      </View>
      <Text style={styles.title}>Receber</Text>
      <View style={styles.containerMenu}>
        <MenuCircle icon="local-atm" text="Cobrar" />
        <MenuCircle icon="file-download" text="Depositar" />
        <MenuCircle show={false} />
      </View>
    </View>
  );
};

export default CardMenu;
