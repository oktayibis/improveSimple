import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FontSizes, Margins} from '../../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    marginVertical: Margins.marginHorizantal,
  },
  navLink: {
    fontSize: FontSizes.bigger,
    fontWeight: '600',
    marginRight: width * 0.04,
  },
  navLinkSelected: {
    color: Colors.softRed,
  },
});
