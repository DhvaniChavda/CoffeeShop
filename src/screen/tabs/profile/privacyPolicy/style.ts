import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.white,
  },
  tData: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
    marginBottom: SIZES.countPixelRatio(15),
  },
  vData: {
    marginVertical: SIZES.countPixelRatio(30),
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.black,
    opacity: 0.5,
  },
});
export default styles;
