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
  iTrack: {
    height: SIZES.countPixelRatio(250),
    width: SIZES.countPixelRatio(300),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  vRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.countPixelRatio(25),
  },
  vClock: {
    height: SIZES.countPixelRatio(70),
    width: SIZES.countPixelRatio(70),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(35),
    marginRight: SIZES.countPixelRatio(20),
  },
  iClock: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  tEstimated: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.white,
  },
  tDeliveryTime: {
    fontFamily: FONTS.BOLD,
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.primary,
  },
  vCheck: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    borderRadius: SIZES.countPixelRatio(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    marginRight: SIZES.countPixelRatio(20),
  },
  iCheck: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  tOrder: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.white,
  },
  tDate: {
    fontFamily: FONTS.LIGHT,
    fontSize: SIZES.countPixelRatio(13),
    color: COLOR.white,
  },
});
export default styles;
