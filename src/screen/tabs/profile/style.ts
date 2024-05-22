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
  vProfile: {
    marginVertical: SIZES.countPixelRatio(30),
    alignItems: 'center',
  },
  iEdit: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iProfile: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    borderRadius: SIZES.countPixelRatio(100),
    resizeMode: 'cover',
    marginBottom: SIZES.countPixelRatio(15),
  },
  toEdit: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  tName: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
  },
  flatlist: {
    marginHorizontal: SIZES.countPixelRatio(20),
  },
});
export default styles;
