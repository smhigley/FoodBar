import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
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
  title: {
    fontSize: 24
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
  },
  // results listing
  resultBox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 6,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  resultThumb: {
    flex: 1,
    resizeMode: 'cover'
  },
  resultText: {
    flex: 4,
    paddingLeft: 8
  },
  resultTitle: {
    fontSize: 24
  },
  resultMeta: {
    fontSize: 14,
    color: '#333'
  }
});

export default styles;
