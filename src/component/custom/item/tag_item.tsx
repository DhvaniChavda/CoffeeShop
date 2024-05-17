import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ITagItemProps {
  item: any;
  index: number;
  onTagClick: (arg: number) => void;
}

export default ({item, index, onTagClick}: ITagItemProps) => {
  return (
    <TouchableOpacity onPress={() => onTagClick(index)}>
      <Text style={item.isSelected ? styles.tActiveTitle : styles.tTitle}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tTitle: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.white_smoke,
  },
  tActiveTitle: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.primary,
  },
});
