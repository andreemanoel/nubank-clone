import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  FormAppVendaRoute,
  PickerRoute,
  PixRoute,
} from '../../../services/routes';
import TabItem from '../../atoms/TabItem';
import styles from './styles';
// import { Container } from './styles';

const Tabs: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <TabItem icon="api" title="Área pix" route={PixRoute.name} />
        <TabItem
          icon="person-add"
          title="Indicar amigos"
          route={PickerRoute.name}
        />
        <TabItem
          icon="chat-bubble-outline"
          title="Cobrar"
          route={FormAppVendaRoute.name}
        />
        <TabItem icon="arrow-downward" title="Depositar" />
        <TabItem icon="arrow-upward" title="Transferir" />
        <TabItem icon="lock" title="Bloquear cartão" />
      </ScrollView>
    </View>
  );
};

export default Tabs;
