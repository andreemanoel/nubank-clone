import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  title: {
    // fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 20,
  },

  subTitle: {
    fontSize: 19,
    color: '#929292',
  },

  containerMenu: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 15,
  },

  circle: {
    height: 70,
    width: 70,
    marginBottom: 10,
    borderRadius: 35,
    backgroundColor: '#F1F0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    alignItems: 'center',
  },
});

export default styles;
