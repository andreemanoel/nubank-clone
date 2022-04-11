import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

// import { Container } from './styles';

const FormAppVenda: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <>
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
    </>
  );
};
export default FormAppVenda;
