import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ICheckoutItemProps {
  item: any;
  index: number;
}

export default ({item, index}: ICheckoutItemProps) => {
  return (
    <View style={styles.vMainRow}>
      <View style={styles.vIcon}>
        <Image source={item.image} style={styles.iIcon} />
      </View>
      <View>
        <Text style={styles.tName}>{item.item_name}</Text>
        <Text style={styles.tWith}>
          {'with '}
          {item.ingridients}
        </Text>
        <Text style={styles.tPrice}>
          {'$ '}
          {item.price}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  vMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vIcon: {
    height: SIZES.countPixelRatio(150),
    width: SIZES.countPixelRatio(150),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(10),
    marginRight: SIZES.countPixelRatio(20),
  },
  iIcon: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    resizeMode: 'contain',
  },
  toMinus: {
    backgroundColor: COLOR.background,
    height: SIZES.countPixelRatio(45),
    width: SIZES.countPixelRatio(45),
    borderRadius: SIZES.countPixelRatio(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iMinus: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  tSize: {
    fontFamily: FONTS.BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(24),
    textAlign: 'center',
  },
  tName: {
    fontFamily: FONTS.BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(20),
  },
  tWith: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(13),
  },
  tPrice: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    fontSize: SIZES.countPixelRatio(18),
  },
});
