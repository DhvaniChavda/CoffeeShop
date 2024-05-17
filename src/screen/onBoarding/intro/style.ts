import {Platform, StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vMainContainer: {
    flex: 1,
  },
  vIntroContainer: {
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  iIntro: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: SIZES.countPixelRatio(20),
  },
  tTitle: {
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(36),
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
  },
  tDesc: {
    color: COLOR.primary,
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    lineHeight: SIZES.countPixelRatio(22),
  },
  vTextContainer: {
    marginTop: SIZES.countPixelRatio(250),
    marginHorizontal: SIZES.countPixelRatio(20),
  },

  vSkip: {
    height: SIZES.countPixelRatio(45),
    alignItems: 'center',
    marginHorizontal: SIZES.countPixelRatio(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: SIZES.countPixelRatio(50),
    left: 0,
    right: 0,
  },
  tSkip: {
    color: COLOR.white,
    fontFamily: FONTS.BOLD,
    fontSize: SIZES.countPixelRatio(14),
  },
  vDot: {
    width: SIZES.smartScale(90),
  },
  vDotInner: {
    flexDirection: 'row',
  },
  activePaginationDots: {
    height: SIZES.countPixelRatio(3),
    width: SIZES.smartWidthScale(25),
    backgroundColor: COLOR.primary,
    marginLeft: SIZES.countPixelRatio(10),
  },
  paginationDots: {
    height: SIZES.countPixelRatio(3),
    width: SIZES.countPixelRatio(12),
    backgroundColor: COLOR.whiteFourteen,
    marginLeft: SIZES.smartWidthScale(10),
  },
  toRegister: {
    backgroundColor: COLOR.primary,
    marginVertical: SIZES.countPixelRatio(10),
  },
  tRegister: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.brown,
  },
  vButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    marginHorizontal: SIZES.countPixelRatio(20),
    bottom: SIZES.countPixelRatio(50),
  },
  toSignIn: {
    borderWidth: SIZES.countPixelRatio(2),
    borderColor: COLOR.primary,
    backgroundColor: 'transparent',
  },
  tSignIn: {
    color: COLOR.primary,
    fontSize: SIZES.countPixelRatio(20),
  },
});
export default styles;
