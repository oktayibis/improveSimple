import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  image: {
    width: width * 0.6,
    height: width * 0.5,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 15,
  },
  container: {
    marginTop: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
