import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20,
  },

  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },

  tabItem: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between',
  },

  tabText: {
    fontSize: 13,
    color: '#fff',
  },
});

export default styles;
