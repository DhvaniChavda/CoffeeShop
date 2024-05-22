import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.brown,
  },
  vContainer: {
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(20),
  },
});
export default styles;
