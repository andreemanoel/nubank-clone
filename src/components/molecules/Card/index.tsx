import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import CardContent from '../CardContent';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import styles from './styles';

const Card: React.FC = () => {
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );
  const onHandleChangeState = (event: any) => {
    console.log(event);
  };
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandleChangeState}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <CardHeader />
        <CardContent />
        <CardFooter />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Card;
