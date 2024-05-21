import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IBackToolbarProps {
  title: string;
  isRightIcon?: boolean;
  rightIcon?: any;
  onBackPress: () => void;
  backgroundColor?: any;
  viewCustomStyle?: object;
  onRightIconPress?: () => void;
  isFromTab?: boolean;
}
export default ({
  title,
  isRightIcon,
  rightIcon,
  onBackPress,
  backgroundColor,
  viewCustomStyle,
  onRightIconPress,
  isFromTab,
}: IBackToolbarProps) => {
  return (
    <View
      style={[
        styles.vMainContainer,
        {backgroundColor: backgroundColor ? backgroundColor : COLOR.brown},
        viewCustomStyle,
      ]}>
      {isFromTab ? (
        <View style={styles.toBack}></View>
      ) : (
        <TouchableOpacity
          style={styles.toBack}
          activeOpacity={0.8}
          onPress={onBackPress}>
          <Image source={APP_IMAGES.ic_back} style={styles.iBack} />
        </TouchableOpacity>
      )}
      <Text style={styles.tTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.toBack}
        activeOpacity={0.8}
        onPress={onRightIconPress}>
        {isRightIcon && <Image source={rightIcon} style={styles.iRightIcon} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    paddingHorizontal: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.brown,
    flexDirection: 'row',
    height: SIZES.countPixelRatio(100),
    borderBottomLeftRadius: SIZES.countPixelRatio(20),
    borderBottomRightRadius: SIZES.countPixelRatio(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toBack: {
    height: SIZES.countPixelRatio(35),
    width: SIZES.countPixelRatio(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iBack: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.BOLD,
    color: COLOR.white,
  },
  iRightIcon: {
    height: SIZES.countPixelRatio(22),
    width: SIZES.countPixelRatio(22),
    resizeMode: 'contain',
  },
});
