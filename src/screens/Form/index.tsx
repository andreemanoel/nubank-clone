import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Container from '../../components/organisms/Container';
import {HomeRoute} from '../../services/routes';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setClient} from '../../store/slices/form.slice';
import styles from './styles';

// import { Container } from './styles';

const Form: React.FC = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const {client} = useAppSelector(state => state.form);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleEntrar = () => {
    dispatch(setClient({client_nome: nome, client_valor: valor}));
    navigation.dispatch({
      ...StackActions.replace(HomeRoute.name as never),
    });
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Nubank_Logo.png')}
            style={styles.image}
          />
        </View>
        <TextInput
          placeholder="Nome"
          onChangeText={val => setNome(val)}
          value={client.client_nome}
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="Saldo"
          onChangeText={val => setValor(val)}
          value={client.client_valor}
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleEntrar()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Form;
