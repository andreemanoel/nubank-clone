import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: '#000',
  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 8,
  },
  icon: {
    fontSize: 22,
    alignSelf: 'center',
  },
  content: {
    padding: 12,
  },
});

export default styles;
