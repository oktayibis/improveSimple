import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Margins} from '../../constant/theme';

export const styles = StyleSheet.create({
  category: {
    marginHorizontal: Margins.marginHorizantal,
  },
  verticalImage: {
    marginLeft: Margins.marginLeft,
  },
  main: {
    marginHorizontal: Margins.marginHorizantal,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  trending: {
    marginHorizontal: Margins.marginHorizantal,
  },
  brands: {
    marginLeft: Margins.marginLeft,
  },
  newsletter: {
    marginHorizontal: Margins.marginHorizantal,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginVertical: Margins.marginHorizantal,
  },
  title: {
    fontWeight: '600',
    fontSize: FontSizes.regular,
  },
  link: {
    color: Colors.softRed,
    fontWeight: '600',
    fontSize: FontSizes.regular,
  },
});
