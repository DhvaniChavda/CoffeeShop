import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ModalBox from 'src/component/library/modalBox';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

interface IModalProps {
  isModalOpen: boolean;
  onCloseListener: () => void;
  title: string;
  info: string;
  onYesClick: () => void;
  onNoClick: () => void;
}

export default ({
  isModalOpen,
  onCloseListener,
  title,
  info,
  onYesClick,
  onNoClick,
}: IModalProps): JSX.Element => {
  return (
    <ModalBox
      isOpen={isModalOpen}
      onClosed={onCloseListener}
      position="center"
      entry="bottom"
      coverScreen={true}
      swipeToClose={false}
      backButtonClose={true}
      style={styles.modalContainer}>
      <View style={styles.vContainer}>
        <Text style={styles.tTitle}>{title}</Text>
        <Text style={styles.tInfo}>{info}</Text>
        <View style={styles.vButtonRow}>
          <TouchableOpacity
            style={styles.toYes}
            onPress={onYesClick}
            activeOpacity={0.8}>
            <Text style={styles.tYes}>{STRING.profile.yes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toNo}
            onPress={onNoClick}
            activeOpacity={0.8}>
            <Text style={styles.tNo}>{STRING.profile.no}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalBox>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    height: undefined,
    backgroundColor: 'transparent',
  },
  vContainer: {
    backgroundColor: COLOR.primary,
    marginHorizontal: SIZES.smartWidthScale(20),
    paddingVertical: SIZES.smartScale(25),
    paddingHorizontal: SIZES.smartWidthScale(30),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
    textAlign: 'center',
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.background,
    textAlign: 'center',
  },
  vButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: SIZES.smartScale(45),
    marginTop: SIZES.countPixelRatio(20),
  },
  toYes: {
    backgroundColor: COLOR.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.smartWidthScale(20),
  },
  toNo: {
    backgroundColor: 'transparent',
    flex: 1,
    borderWidth: SIZES.countPixelRatio(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tYes: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.white,
  },
  tNo: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.brown,
  },
});
