import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import {COLOR} from 'src/theme';

import {SafeAreaView} from 'react-native-safe-area-context';
import {APP_IMAGES} from 'src/assets/images';
import {ENUM, STRING} from 'src/utils';
import {ThemeInput} from 'src/component/custom/textInput';
import {ThemeButton} from 'src/component/custom/button';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

const Register = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<any>('');
  const [confirmPassword, setConfirmPassword] = useState<any>('');
  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const onChangeText = (text: string, type: number): void => {
    switch (type) {
      case ENUM.register.fullName:
        setName(text);
        break;
      case ENUM.register.email:
        setEmail(text);
        break;
      case ENUM.register.password:
        setPassword(text);
        break;
      case ENUM.register.confirmPass:
        setConfirmPassword(text);
        break;
    }
  };

  const onLoginClick = () => {
    navigate(Routes.Login);
  };
  const onRegisterClick = () => {
    navigate(Routes.Dashboard);
  };

  const renderHeaderContainer = () => {
    return (
      <View style={styles.vHeader}>
        <Image source={APP_IMAGES.ic_logo} style={styles.iLogo} />
        <Text style={styles.tWelcome}>
          {STRING.register.register_your_account}
        </Text>
      </View>
    );
  };
  const renderInputContainer = () => {
    return (
      <View>
        <ThemeInput
          ref={nameRef}
          value={name}
          onChangeText={onChangeText}
          placeholder={STRING.register.ph_full_name}
          returnKeyType={'next'}
          keyboardType={'default'}
          onSubmitEditing={() => emailRef?.current?.focus()}
          blurOnSubmit={false}
          type={ENUM.register.fullName}
        />
        <ThemeInput
          ref={emailRef}
          value={email}
          onChangeText={onChangeText}
          placeholder={STRING.login.ph_email}
          returnKeyType={'next'}
          keyboardType={'email-address'}
          onSubmitEditing={() => passwordRef?.current?.focus()}
          blurOnSubmit={false}
          type={ENUM.register.email}
        />
        <ThemeInput
          ref={passwordRef}
          value={password}
          onChangeText={onChangeText}
          placeholder={STRING.login.ph_password}
          returnKeyType={'next'}
          keyboardType={'default'}
          onSubmitEditing={() => confirmPasswordRef?.current?.focus()}
          blurOnSubmit={false}
          type={ENUM.register.password}
          isSecure={true}
        />
        <ThemeInput
          ref={confirmPasswordRef}
          value={confirmPassword}
          onChangeText={onChangeText}
          placeholder={STRING.register.ph_confirm_password}
          returnKeyType={'done'}
          keyboardType={'default'}
          onSubmitEditing={() => Keyboard.dismiss()}
          blurOnSubmit={false}
          type={ENUM.register.confirmPass}
          isSecure={true}
        />
      </View>
    );
  };

  const renderSocialContainer = () => {
    return (
      <View style={styles.vSocialRow}>
        <TouchableOpacity style={styles.vSocialBg} activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_facebook} style={styles.iFacebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.vSocialBg} activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_google} style={styles.iGoogle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.vSocialBg} activeOpacity={0.8}>
          <Image source={APP_IMAGES.ic_twitter} style={styles.iTwitter} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.intro_slider.register}
        customStyle={styles.toSignIn}
        onPress={onRegisterClick}
      />
    );
  };
  const renderLoginWithContainer = () => {
    return (
      <View style={styles.vRowContainer}>
        <View style={styles.vLine} />
        <Text style={styles.tLoginWith}>{STRING.register.register_with}</Text>
        <View style={styles.vLine} />
      </View>
    );
  };
  const renderAccountContainer = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onLoginClick}>
        <Text style={styles.tDontHaveAc}>
          {STRING.register.already_have_ac}

          <Text style={{color: COLOR.primary}}> {STRING.register.login}</Text>
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.SaContainer}>
      <StatusBar
        backgroundColor={COLOR.black}
        barStyle={'light-content'}
        translucent
      />

      <ImageBackground
        source={APP_IMAGES.ic_login}
        style={styles.iLogin}
        resizeMode="cover">
        <View style={styles.vMainContainer}>
          {renderHeaderContainer()}
          {renderInputContainer()}

          {renderButtonContainer()}
        </View>
        {renderLoginWithContainer()}
        <View style={[styles.vMainContainer, {flex: 1}]}>
          {renderSocialContainer()}
          <View style={{flex: 1}} />
          {renderAccountContainer()}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Register;
