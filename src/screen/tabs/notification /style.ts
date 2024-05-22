import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(30),
  },
  tToday: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
    opacity: 0.5,
  },
  tMark: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
    opacity: 0.7,
  },
  vSeprator: {
    height: SIZES.smartScale(1),
    backgroundColor: COLOR.sepratorColor,
  },
  flatlist: {
    marginVertical: SIZES.countPixelRatio(20),
  },
});
export default styles;
