import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 400,
  },
});

export default styles;
