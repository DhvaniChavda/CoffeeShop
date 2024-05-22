import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES, DUMMY_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IHomeProps {
  onNotificationClick: () => void;
  onSearchClick: () => void;
  name?: string;
}
export default ({name, onNotificationClick, onSearchClick}: IHomeProps) => {
  return (
    <View style={styles.vMainContainer}>
      <View style={styles.vRowContainer}>
        <Image source={DUMMY_IMAGES.ic_dummy_profile} style={styles.iProfile} />
        <View style={styles.vText}>
          <Text style={styles.tName}>{STRING.home.name}</Text>
          <Text style={styles.tGoodMorning}>{STRING.home.good_morning}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.toImage}
          onPress={onSearchClick}>
          <Image source={APP_IMAGES.ic_search} style={styles.iSearch} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.toImage}
          onPress={onNotificationClick}>
          <Image source={APP_IMAGES.ic_notification} style={styles.iSearch} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    marginHorizontal: SIZES.countPixelRatio(20),
    marginTop: SIZES.smartScale(20),
  },
  vRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iProfile: {
    height: SIZES.countPixelRatio(65),
    width: SIZES.countPixelRatio(65),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(15),
  },
  vText: {
    flex: 1,
  },
  tName: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
  },
  tGoodMorning: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.LIGHT,
    color: COLOR.white_light,
  },
  iSearch: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  toImage: {
    height: SIZES.countPixelRatio(65),
    width: SIZES.countPixelRatio(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
