import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    flex: 1,
  },
  flatlist: {
    rowGap: SIZES.countPixelRatio(10),
    paddingVertical: SIZES.countPixelRatio(20),
  },
});
export default styles;
