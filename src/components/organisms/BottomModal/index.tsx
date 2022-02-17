import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const {height} = Dimensions.get('screen');

export type BottomModalProps = {
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  onRequestClose,
  children,
}) => {
  const modalContentHeight = useRef(
    height > 640 ? height * 0.5 : height * 0.6,
  ).current;

  const translate = useRef(new Animated.Value(modalContentHeight)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: translate}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, {dy}) => {
        if (dy >= 100) {
          hideModal();
          return;
        }

        timing(0);
      },
    }),
  ).current;

  const timing = (to: number, then?: () => void) => {
    Animated.timing(translate, {
      toValue: to,
      useNativeDriver: true,
      duration: 400,
    }).start(then);
  };

  const hideModal = () => {
    timing(modalContentHeight, () => onRequestClose());
  };

  useEffect(() => {
    if (visible) {
      timing(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal transparent visible={visible} style={styles.modal}>
      <View style={[StyleSheet.absoluteFill, styles.container]}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.overlay,
            {
              opacity: translate.interpolate({
                inputRange: [0, modalContentHeight],
                outputRange: [0.4, 0],
              }),
            },
          ]}>
          <TouchableOpacity
            onPress={hideModal}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              height: modalContentHeight,
              opacity: translate.interpolate({
                inputRange: [0, modalContentHeight],
                outputRange: [1, 0],
              }),
              transform: [
                {
                  translateY: translate.interpolate({
                    inputRange: [0, modalContentHeight],
                    outputRange: [0, modalContentHeight],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <Animated.View {...panResponder.panHandlers}>
            <Icon name="grip-lines" style={styles.icon} />
          </Animated.View>
          <View style={styles.content}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomModal;
