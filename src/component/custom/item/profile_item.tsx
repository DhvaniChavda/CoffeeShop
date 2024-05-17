import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IProfileItemProps {
  item: any;
  index: number;
  onItemClick: (arg: number) => void;
}

export default ({item, index, onItemClick}: IProfileItemProps) => {
  return (
    <TouchableOpacity
      style={styles.vMainContainer}
      activeOpacity={0.8}
      onPress={() => onItemClick(index)}>
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
    alignItems: 'center',
    marginBottom: SIZES.countPixelRatio(20),
  },
  vIcon: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(50),
    marginRight: SIZES.countPixelRatio(15),
  },
  iIcon: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  iNext: {
    height: SIZES.countPixelRatio(18),
    width: SIZES.countPixelRatio(12),
    resizeMode: 'contain',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.white,
    flex: 1,
  },
});
