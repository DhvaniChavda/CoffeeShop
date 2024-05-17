import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {ENUM, STRING} from 'src/utils';

interface IOrderItemProps {
  item: any;
  index: number;
}

export default ({item, index}: IOrderItemProps) => {
  const renderStatusContainer = (type: number) => {
    switch (type) {
      case ENUM.my_order.in_progress:
        return <Text style={styles.tQty}>{STRING.my_order.in_progress}</Text>;
        break;
      case ENUM.my_order.delivered:
        return <Text style={styles.tQty}>{STRING.my_order.delivered}</Text>;
        break;
    }
  };

  return (
    <View style={styles.vMainContainer}>
      <View style={styles.vImage}>
        <Image source={item.image} style={styles.iImage} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.tName}>{item.name}</Text>
        <Text style={styles.tQty}>
          {STRING.my_order.qty}: {item.qty}
        </Text>
        <Text style={styles.tName}>
          {'$'}
          {item.price}
        </Text>
        {renderStatusContainer(item.order_status)}
      </View>
      {item.order_status == ENUM.my_order.in_progress ? (
        <TouchableOpacity style={styles.toTrack} activeOpacity={0.8}>
          <Text style={styles.tTrack}>{STRING.my_order.track}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.toTrack,
            {
              backgroundColor: COLOR.white,
              borderWidth: SIZES.countPixelRatio(2),
              borderColor: COLOR.primary,
            },
          ]}
          activeOpacity={0.8}>
          <Text style={[styles.tTrack, {color: COLOR.primary}]}>
            {STRING.my_order.complete}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  vMainContainer: {
    // backgroundColor: 'pink',
    marginHorizontal: SIZES.smartWidthScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  vImage: {
    height: SIZES.countPixelRatio(104),
    width: SIZES.countPixelRatio(104),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary,
    borderRadius: SIZES.countPixelRatio(20),
    marginRight: SIZES.countPixelRatio(10),
  },
  iImage: {
    height: SIZES.countPixelRatio(90),
    width: SIZES.countPixelRatio(90),
    resizeMode: 'contain',
  },
  iNext: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.brown,
  },
  tQty: {
    fontSize: SIZES.countPixelRatio(13),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.black49,
  },
  toTrack: {
    backgroundColor: COLOR.primary,
    paddingVertical: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(15),
    height: SIZES.smartScale(33),
    justifyContent: 'center',
    width: SIZES.smartWidthScale(90),
  },
  tTrack: {
    fontSize: SIZES.countPixelRatio(12),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    textAlign: 'center',
  },
});
