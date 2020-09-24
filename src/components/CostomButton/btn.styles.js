import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.softRed,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10, 
  },
  label: {
    textAlign: 'center',
    color: 'white',
  },
});
