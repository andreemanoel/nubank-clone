import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Container from '../../components/organisms/Container';
import {FormRoute} from '../../services/routes';
import styles from './styles';

const InitialScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      rotation.value = withRepeat(withTiming(10), 6, true);
    }, 1000);

    setTimeout(() => {
      navigation.dispatch({
        ...StackActions.replace(FormRoute.name as never),
      });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  return (
    <Container>
      <View style={styles.container}>
        <Animated.Image
          source={require('../../assets/Nubank_Logo.png')}
          style={[styles.image, animatedStyle]}
        />
      </View>
    </Container>
  );
};

export default InitialScreen;
