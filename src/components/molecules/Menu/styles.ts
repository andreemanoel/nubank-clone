import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  contentContainerStyle: {
    alignItems: 'center',
  },

  code: {
    backgroundColor: '#fff',
    padding: 10,
    alignSelf: 'center',
  },

  nav: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255, 0.8)',
  },

  navIem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.8)',
  },

  navText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 20,
  },

  signOutButton: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 15,
  },

  signOutButtonText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
