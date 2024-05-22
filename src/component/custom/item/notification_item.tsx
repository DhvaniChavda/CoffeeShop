import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {ENUM, METHOD} from 'src/utils';

interface INotificationItemProps {
  item: any;
  index: number;
}

export default ({item, index}: INotificationItemProps) => {
  const renderImageContainer = (type: number) => {
    switch (type) {
      case ENUM.notification.delivered:
        return (
          <View style={styles.vImage}>
            <Image source={APP_IMAGES.ic_cycle} style={styles.iCycle} />
          </View>
        );
        break;
      case ENUM.notification.discount:
        return (
          <View style={styles.vImage}>
            <Image source={APP_IMAGES.ic_percentage} style={styles.iCycle} />
          </View>
        );
        break;
      case ENUM.notification.product_launch:
        return (
          <View style={styles.vImage}>
            <Image
              source={APP_IMAGES.ic_launch_product}
              style={styles.iCycle}
            />
          </View>
        );
        break;
    }
  };

  return (
    <View style={styles.vMainContainer}>
      {renderImageContainer(item.type)}
      <View style={styles.vText}>
        <Text style={styles.tTitle}>{item.title}</Text>
        <Text style={styles.tDesc} numberOfLines={2}>
          {item.desc}
        </Text>
      </View>
      <Text style={styles.tHour}>{METHOD.formattedTime(item.created_at)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    marginHorizontal: SIZES.countPixelRatio(20),
    flexDirection: 'row',
    marginVertical: SIZES.countPixelRatio(10),
    alignItems: 'center',
  },
  vImage: {
    height: SIZES.countPixelRatio(75),
    width: SIZES.countPixelRatio(75),
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.countPixelRatio(75),
    marginRight: SIZES.countPixelRatio(15),
  },
  iCycle: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  vText: {
    flex: 1,
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(10),
    color: COLOR.brown,
    fontFamily: FONTS.REGULAR,
  },
  tHour: {
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.grey_8d,
    fontFamily: FONTS.SEMI_BOLD,
    marginLeft: SIZES.smartWidthScale(40),
  },
});
