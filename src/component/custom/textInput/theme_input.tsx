import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IThemeButtonProps {
  //   ref: any;
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
      // ref,
      blurOnSubmit,
      autoFocus,
      maxLength,
      onFocus,
      viewCustomStyle,
      inputStyle,
      onSubmitEditing,
    }: IThemeButtonProps,
    ref: any,
  ) => {
    return (
      <View style={[styles.vEmailContainer, viewCustomStyle]}>
        <TextInput
          value={value}
          onChangeText={(value: string) => {
            onChangeText(value, type);
          }}
          style={[styles.tInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLOR.gray_82}
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
    );
  },
);
const styles = StyleSheet.create({
  vEmailContainer: {
    backgroundColor: COLOR.black_bg,
    borderRadius: SIZES.countPixelRatio(10),
    paddingVertical: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.smartScale(10),
  },
  tInput: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.MEDIUM,
    color: COLOR.white,
  },
});
