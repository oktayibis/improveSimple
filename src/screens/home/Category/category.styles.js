import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  navLink: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: width * 0.04,
  },
  navLinkSelected: {
    color: Colors.softRed,
  },
});
