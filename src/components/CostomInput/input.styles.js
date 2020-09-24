import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  input: {
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 5,
    minWidth: '45%',
  },
});
