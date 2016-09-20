import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 222,
    marginLeft: -40
  },
  logotype: {
    marginTop: 8,
    fontSize: 40,
    color: '#FFFFFF'
  },
  main: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    color: '#5E9ECA',
  },
  button: {
    height: 40,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#5E7944',
  },
  buttonText: {
    color: '#1B211D'
  }
});

export default styles;
