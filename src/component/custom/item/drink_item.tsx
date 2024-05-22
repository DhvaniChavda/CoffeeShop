import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ITagItemProps {
  item: any;
  index: number;
  onLikeClick: (arg: number) => void;
  viewCustomstyle?: object;
  onItemClick: (arg: any) => void;
}

export default ({
  item,
  index,
  onLikeClick,
  viewCustomstyle,
  onItemClick,
}: ITagItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.vMainContainer, viewCustomstyle]}
      activeOpacity={0.8}
      onPress={() => onItemClick(item)}>
      <Image source={item.image} style={styles.iImage} />
      <TouchableOpacity
        style={styles.toLike}
        onPress={() => onLikeClick(index)}>
        <Image
          source={item.isFavorite ? APP_IMAGES.ic_like_red : APP_IMAGES.ic_like}
          style={styles.iLike}
        />
      </TouchableOpacity>
      <View style={styles.vRow}>
        <View style={styles.vText}>
          <Text style={styles.tName}>{item.name}</Text>
          <Text style={styles.tDesc}>{item.desc}</Text>
        </View>
        <Text style={styles.tPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(15),
    paddingTop: SIZES.countPixelRatio(10),
  },
  iImage: {
    height: SIZES.smartScale(81),
    width: SIZES.smartWidthScale(95),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  toLike: {
    position: 'absolute',
    right: SIZES.countPixelRatio(15),
    top: SIZES.countPixelRatio(10),
  },
  iLike: {
    height: SIZES.smartScale(20),
    width: SIZES.smartWidthScale(20),
    resizeMode: 'contain',
  },
  vRow: {
    flexDirection: 'row',
  },
  vText: {
    width: SIZES.smartWidthScale(101),
    height: SIZES.smartScale(55),
    marginRight: SIZES.countPixelRatio(10),
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(9),
    fontFamily: FONTS.REGULAR,
    color: COLOR.background,
  },
  tPrice: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.background,
  },
});
