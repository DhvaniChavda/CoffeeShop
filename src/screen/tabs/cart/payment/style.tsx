import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.brown,
  },
  vContainer: {
    flex: 1,
    backgroundColor: COLOR.brown,
    alignItems: 'center',
    marginTop: '30%',
  },
  vCheck: {
    height: SIZES.countPixelRatio(150),
    width: SIZES.countPixelRatio(150),
    borderRadius: SIZES.countPixelRatio(90),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    marginBottom: SIZES.countPixelRatio(30),
  },
  iCheck: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    resizeMode: 'contain',
  },
  tPayment: {
    fontSize: SIZES.countPixelRatio(25),
    color: COLOR.white,
    textAlign: 'center',
    fontFamily: FONTS.SEMI_BOLD,
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.white,
    textAlign: 'center',
    fontFamily: FONTS.MEDIUM,
  },
  toTrack: {
    marginHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.primary,
  },
});
export default styles;
