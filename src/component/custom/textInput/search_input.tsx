import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface ISearchInputProps {
  value: string;
  onChangeText: (text: string, type?: any) => void;
  placeholder?: string;
  customStyle?: object;
  returnKeyType?: any;
  keyboardType?: any;
  type?: number;
  isSecure?: boolean;
  blurOnSubmit?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  onFocus?: () => void;
  viewCustomStyle?: object;
  inputStyle?: object;
  onSubmitEditing?: () => void;
}
export default React.forwardRef(
  (
    {
      placeholder,
      returnKeyType,
      keyboardType,
      value,
      onChangeText,
      type,
      isSecure,
      blurOnSubmit,
      autoFocus,
      maxLength,
      onFocus,
      viewCustomStyle,
      inputStyle,
      onSubmitEditing,
    }: ISearchInputProps,
    ref: any,
  ) => {
    return (
      <View style={styles.vRowContainer}>
        <View style={[styles.vInput, viewCustomStyle]}>
          <TextInput
            value={value}
            onChangeText={(value: string) => {
              onChangeText(value, type);
            }}
            style={[styles.tInput, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={COLOR.background}
            numberOfLines={1}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            secureTextEntry={isSecure}
            ref={ref}
            blurOnSubmit={blurOnSubmit}
            autoFocus={autoFocus ? autoFocus : false}
            spellCheck={true}
            autoCorrect={true}
            maxLength={maxLength}
            onPressIn={onFocus}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <TouchableOpacity style={styles.toSearch} activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_search} style={styles.iSearch} />
        </TouchableOpacity>
      </View>
    );
  },
);
const styles = StyleSheet.create({
  vRowContainer: {flexDirection: 'row'},
  vInput: {
    backgroundColor: COLOR.white,
    borderRadius: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.smartScale(10),
    flex: 1,
  },
  tInput: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.background,
  },
  iSearch: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    tintColor: COLOR.background,
  },
  toSearch: {
    backgroundColor: COLOR.primary,
    position: 'absolute',
    right: 0,
    width: SIZES.countPixelRatio(70),
    height: SIZES.countPixelRatio(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: SIZES.countPixelRatio(10),
    borderBottomRightRadius: SIZES.countPixelRatio(10),
    // top: 0,
    // bottom: 0,
  },
});
