import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vMainContainer: {
    paddingHorizontal: SIZES.countPixelRatio(20),
  },
  iLogo: {
    height: SIZES.countPixelRatio(44),
    width: SIZES.countPixelRatio(54),
    resizeMode: 'contain',
  },
  iLogin: {
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  tWelcome: {
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.white,
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: 'center',
    marginVertical: SIZES.countPixelRatio(20),
  },
  vHeader: {
    alignItems: 'center',
    marginTop: SIZES.smartScale(50),
  },
  tForgot: {
    fontSize: SIZES.countPixelRatio(13),
    fontFamily: FONTS.BOLD,
    textAlign: 'right',
    color: COLOR.primary,
  },
  toSignIn: {
    backgroundColor: COLOR.primary,
    marginVertical: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(20),
  },
  tLoginWith: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: 'center',
    color: COLOR.white,
    paddingHorizontal: SIZES.countPixelRatio(10),
  },
  vRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vLine: {
    backgroundColor: COLOR.primary,
    height: SIZES.countPixelRatio(3),
    flex: 1,
  },
  vSocialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.smartScale(25),
  },
  vSocialBg: {
    height: SIZES.smartScale(64),
    width: SIZES.smartWidthScale(99),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.black_bg,
    borderRadius: SIZES.countPixelRatio(10),
  },
  iFacebook: {
    height: SIZES.countPixelRatio(44),
    width: SIZES.countPixelRatio(22),
    resizeMode: 'contain',
  },
  iTwitter: {
    height: SIZES.countPixelRatio(26),
    width: SIZES.countPixelRatio(39),
    resizeMode: 'contain',
  },
  iGoogle: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(23),
    resizeMode: 'contain',
  },
  tDontHaveAc: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: 'center',
    color: COLOR.white,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: SIZES.countPixelRatio(50),
  },
});
export default styles;
