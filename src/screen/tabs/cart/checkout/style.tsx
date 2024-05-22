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
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  tHeaderTitle: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.white,
  },
  vRow: {
    flexDirection: 'row',
    paddingVertical: SIZES.countPixelRatio(20),
  },
  vIcon: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    borderRadius: SIZES.countPixelRatio(50),
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.countPixelRatio(20),
  },
  iIcon: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  tTitle: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.white,
  },
  tSubTitle: {
    fontFamily: FONTS.REGULAR,
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.white,
  },
  toButton: {
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(20),
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(100),
    alignSelf: 'center',
  },
  tButton: {
    fontFamily: FONTS.MEDIUM,
    color: COLOR.black,
    fontSize: SIZES.countPixelRatio(10),
  },
  toPayment: {
    backgroundColor: COLOR.primary,
    marginBottom: SIZES.countPixelRatio(20),
  },
});
export default styles;
