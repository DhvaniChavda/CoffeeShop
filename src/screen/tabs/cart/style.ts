import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.brown,
  },
  vContainer: {
    flex: 1,
  },
  vHeader: {
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  tMyOrder: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.white,
  },
  tYouHave: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.white,
    marginBottom: SIZES.countPixelRatio(20),
  },
  listCurve: {
    backgroundColor: COLOR.white,
    borderTopLeftRadius: SIZES.countPixelRatio(10),
    borderTopRightRadius: SIZES.countPixelRatio(10),
  },
  toHiddenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    alignSelf: 'flex-end',
  },
  iDelete: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  vTotal: {
    backgroundColor: COLOR.primary,
    marginHorizontal: SIZES.countPixelRatio(20),
    paddingHorizontal: SIZES.countPixelRatio(25),
    paddingVertical: SIZES.countPixelRatio(20),
  },
  vRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vSeprator: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: COLOR.background,

    borderStyle: 'dashed',
    marginHorizontal: SIZES.countPixelRatio(10),
    flex: 1,
  },
  tSub: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.background,
  },
  tPrice: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(17),
    color: COLOR.background,
  },
  toOrder: {
    backgroundColor: 'transparent',
    borderColor: COLOR.primary,
    marginHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(20),
    borderWidth: 1,
  },
  tOrder: {
    color: COLOR.white,
  },
});
export default styles;
