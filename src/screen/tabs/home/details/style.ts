import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vMainContainer: {
    backgroundColor: COLOR.brown,
    // marginHorizontal: SIZES.countPixelRatio(20),
  },
  iBgImage: {
    height: SIZES.countPixelRatio(335),
    width: '100%',
  },

  iRound: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: SIZES.countPixelRatio(145),
    bottom: 0,
    left: 0,
    right: 0,
  },
  vRound: {
    flex: 1,
    position: 'absolute',
    top: SIZES.countPixelRatio(145),
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(150),
  },
  vIngredients: {
    marginTop: SIZES.countPixelRatio(30),
    alignItems: 'center',
  },
  tIngredientsTitle: {
    fontFamily: FONTS.BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(24),
  },
  iCurved: {
    height: SIZES.countPixelRatio(65),
    width: '100%',
    marginTop: SIZES.countPixelRatio(50),
    alignItems: 'center',
  },
  iMilkCan: {
    height: SIZES.countPixelRatio(35),
    width: SIZES.countPixelRatio(35),
    resizeMode: 'contain',
  },
  vMilkCan: {
    backgroundColor: COLOR.primary,
    height: SIZES.countPixelRatio(60),
    width: SIZES.countPixelRatio(60),
    borderRadius: SIZES.countPixelRatio(60),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: SIZES.countPixelRatio(-30),
  },
  tIngredientsName: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(20),
    top: SIZES.countPixelRatio(50),
  },
  tSize: {
    fontFamily: FONTS.BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(24),
    textAlign: 'center',
  },
  vSize: {
    marginTop: SIZES.countPixelRatio(50),
  },
  vCup: {
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.countPixelRatio(10),
  },
  iCup: {
    resizeMode: 'contain',
  },
  vRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: SIZES.countPixelRatio(30),
  },
  tSmall: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.primary,
    textAlign: 'center',
  },
  toMinus: {
    backgroundColor: COLOR.primary,
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    borderRadius: SIZES.countPixelRatio(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iMinus: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
});
export default styles;
