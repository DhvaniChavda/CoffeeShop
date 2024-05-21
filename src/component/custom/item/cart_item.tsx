import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ICartItemProps {
  item: any;
  index: number;
}

export default ({item, index}: ICartItemProps) => {
  const [qty, setQty] = useState<number>(1);

  const onMinusClick = () => {
    setQty(prevQty => (prevQty == 1 ? 1 : prevQty - 1));
  };
  const onAddClick = () => {
    setQty(prevQty => prevQty + 1);
  };
  return (
    <View style={styles.vMainRow}>
      <Image source={item.image} style={styles.iIcon} />
      <View style={{flex: 1}}>
        <Text style={styles.tName}>{item.item_name}</Text>
        <Text style={styles.tWith}>
          {'with'}
          {item.ingridients}
        </Text>
        <Text style={styles.tPrice}>
          {'$'}
          {item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: SIZES.smartWidthScale(15),
          width: SIZES.smartWidthScale(120),
        }}>
        <TouchableOpacity
          style={styles.toMinus}
          activeOpacity={0.8}
          onPress={onMinusClick}>
          <Image source={APP_IMAGES.ic_minus} style={styles.iMinus} />
        </TouchableOpacity>
        <Text style={styles.tSize}>{qty < 0 ? qty : qty}</Text>
        <TouchableOpacity
          style={styles.toMinus}
          activeOpacity={0.8}
          onPress={onAddClick}>
          <Image source={APP_IMAGES.ic_add} style={styles.iMinus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  vMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
    marginBottom: SIZES.countPixelRatio(15),
    borderRadius: SIZES.countPixelRatio(10),
    marginHorizontal: SIZES.countPixelRatio(20),
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
    fontSize: SIZES.countPixelRatio(18),
  },
  tWith: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.background,
    fontSize: SIZES.countPixelRatio(13),
  },
  tPrice: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.background,
    fontSize: SIZES.countPixelRatio(18),
  },
});
