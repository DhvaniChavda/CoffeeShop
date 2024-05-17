import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  flatlist: {
    marginVertical: SIZES.countPixelRatio(20),
  },
  vSeprator: {
    height: SIZES.smartScale(1),
    backgroundColor: COLOR.sepratorColor,
  },
});
export default styles;
