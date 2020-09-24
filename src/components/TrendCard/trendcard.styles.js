import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  trendContainer: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginLeft: '5%',
  },
  image: {
    width: 50,
    height: 80,
    borderRadius: 5,
  },
  content: {
    justifyContent: 'center',
    minWidth: 200,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 14,
  },
  brandText: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.softRed,
    marginTop: 10,
  },
  priceFooter: {
    justifyContent: 'center',
  },
  priceText: {
    backgroundColor: Colors.softRed,
    padding: 5,
    borderRadius: 10,
    color: '#fff',
  },
});
