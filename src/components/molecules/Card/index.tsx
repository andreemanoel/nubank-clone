import React from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import CardContent from '../CardContent';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import styles from './styles';

type ContextType = {
  translateX: number;
  translateY: number;
  startY: number;
};

const Card: React.FC = () => {
  const translateY = useSharedValue(0);
  // const startY = useSharedValue(translateY);

  const animatedEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.startY = translateY.value;
    },
    onActive: (event, contexto) => {
      console.log(event.translationY, translateY.value);
      if (event.translationY + translateY.value < -30) {
        return (translateY.value = withSpring(0));
      }
      if (event.translationY + translateY.value > 430) {
        return (translateY.value = withSpring(400));
      }
      translateY.value = event.translationY + contexto.startY;
    },
    onEnd: event => {
      if (event.translationY > 30) {
        return (translateY.value = withSpring(400));
      }
      if (event.translationY < -30) {
        return (translateY.value = withSpring(0));
      }
    },
  });

  const rstyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={animatedEvent}>
      <Animated.View style={[styles.card, rstyle]}>
        <CardHeader />
        <CardContent />
        <CardFooter />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Card;
