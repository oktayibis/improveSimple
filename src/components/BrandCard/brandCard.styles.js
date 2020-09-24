import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../constant/theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  brandCardContainer: {
    width: width * 0.45,
    height: width * 0.7,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 5,
    marginRight: 20,
    marginBottom: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 3,
    elevation: 5,

    borderColor: '#eee',
    borderWidth: 0.3,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: width * 0.35,
    height: width * 0.5,
    resizeMode: 'cover',
  },
  heart: {
    marginTop: 20,
  },
  content: {
    margin: 5,
  },
  nameText: {
    fontWeight: '600',
  },
  brandText: {
    color: Colors.softRed,
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  priceText: {
    fontWeight: '600',
  },
  discountText: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.light,
  },
});
