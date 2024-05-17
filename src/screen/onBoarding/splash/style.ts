import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  iSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iCoffeeLogo: {
    height: SIZES.countPixelRatio(157),
    width: SIZES.countPixelRatio(210),
    resizeMode: 'contain',
  },
  toGetStarted: {
    paddingHorizontal: SIZES.countPixelRatio(80),
    position: 'absolute',
    bottom: SIZES.smartScale(50),
  },
});
export default styles;
