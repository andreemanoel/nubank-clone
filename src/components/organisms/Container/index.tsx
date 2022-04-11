import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export type ContainerProps = {
  padding?: boolean;
  backgroundColor?: string;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
};

const Container: React.FC<ContainerProps> = ({
  children,
  padding = false,
  backgroundColor = '#8D00DA',
  justifyContent = 'center',
}) => {
  return (
    <View
      style={[
        styles.container,
        padding && styles.padding,
        {
          backgroundColor: backgroundColor,
          justifyContent: justifyContent,
        },
      ]}>
      {children}
    </View>
  );
};

export default Container;
