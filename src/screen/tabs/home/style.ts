import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.brown,
  },
  vMainContainer: {
    backgroundColor: COLOR.brown,
    // marginHorizontal: SIZES.countPixelRatio(20),
  },
  vBanner: {
    backgroundColor: COLOR.banner,
    height: SIZES.smartScale(146),
    borderRadius: SIZES.countPixelRatio(10),
    padding: SIZES.countPixelRatio(20),
    flexDirection: 'row',
    marginVertical: SIZES.countPixelRatio(20),
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  iCoffee: {
    height: SIZES.smartScale(129),
    width: SIZES.smartWidthScale(129),
    resizeMode: 'cover',
  },
  tDiscount: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(9),
    fontFamily: FONTS.REGULAR,
    color: COLOR.white,
  },
  flatlist: {
    paddingHorizontal: SIZES.countPixelRatio(20),
    columnGap: SIZES.countPixelRatio(25),
    paddingBottom: SIZES.countPixelRatio(20),
  },
  vMainDrinks: {
    marginHorizontal: SIZES.countPixelRatio(20),
    backgroundColor: 'red',
  },
  vRowDrinks: {
    flexDirection: 'row',
  },
});
export default styles;
