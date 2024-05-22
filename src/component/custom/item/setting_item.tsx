import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ISettingItemProps {
  item: any;
  index: number;
}

export default ({item, index}: ISettingItemProps) => {
  return (
    <TouchableOpacity style={styles.vMainContainer} activeOpacity={0.8}>
      <View style={styles.vIcon}>
        <Image source={item.icon} style={styles.iIcon} />
      </View>
      <Text style={styles.tName}>{item.name}</Text>
      <Image source={APP_IMAGES.ic_next} style={styles.iNext} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.countPixelRatio(20),
    alignItems: 'center',
    marginVertical: SIZES.countPixelRatio(15),
  },
  vIcon: {
    height: SIZES.countPixelRatio(74),
    width: SIZES.countPixelRatio(74),
    backgroundColor: COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(74),
    marginRight: SIZES.countPixelRatio(15),
  },
  iIcon: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  iNext: {
    height: SIZES.countPixelRatio(18),
    width: SIZES.countPixelRatio(12),
    resizeMode: 'contain',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.black,
    flex: 1,
  },
});
