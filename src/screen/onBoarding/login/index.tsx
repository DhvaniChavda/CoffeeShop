import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  StatusBar,
  Text,
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

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onChangeText = (text: string, type: number): void => {
    switch (type) {
      case ENUM.login.email:
        setEmail(text);
        break;
      case ENUM.login.password:
        setPassword(text);
        break;
    }
  };
  const onRegisterClick = () => {
    navigate(Routes.Register);
  };

  const onLoginClick = () => {
    navigate(Routes.Dashboard);
  };
  const renderHeaderContainer = () => {
    return (
      <View style={styles.vHeader}>
        <Image source={APP_IMAGES.ic_logo} style={styles.iLogo} />
        <Text style={styles.tWelcome}>{STRING.login.welcome}</Text>
      </View>
    );
  };
  const renderInputContainer = () => {
    return (
      <View>
        <ThemeInput
          ref={emailRef}
          value={email}
          onChangeText={onChangeText}
          placeholder={STRING.login.ph_email}
          returnKeyType={'next'}
          keyboardType={'email-address'}
          onSubmitEditing={() => passwordRef?.current?.focus()}
          blurOnSubmit={false}
          type={ENUM.login.email}
        />
        <ThemeInput
          ref={passwordRef}
          value={password}
          onChangeText={onChangeText}
          placeholder={STRING.login.ph_password}
          returnKeyType={'done'}
          keyboardType={'default'}
          onSubmitEditing={() => Keyboard.dismiss()}
          blurOnSubmit={false}
          type={ENUM.login.password}
          isSecure={true}
        />
      </View>
    );
  };
  const renderForgotPasswordContainer = () => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.tForgot}>{STRING.login.forgot_password}</Text>
      </TouchableOpacity>
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
        title={STRING.intro_slider.sign_in}
        customStyle={styles.toSignIn}
        onPress={onLoginClick}
      />
    );
  };
  const renderLoginWithContainer = () => {
    return (
      <View style={styles.vRowContainer}>
        <View style={styles.vLine} />
        <Text style={styles.tLoginWith}>{STRING.login.login_with}</Text>
        <View style={styles.vLine} />
      </View>
    );
  };
  const renderAccountContainer = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onRegisterClick}>
        <Text style={styles.tDontHaveAc}>
          {STRING.login.do_not_have_ac}

          <Text style={{color: COLOR.primary}}>
            {' '}
            {STRING.intro_slider.register}
          </Text>
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
          {renderForgotPasswordContainer()}
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
export default Login;
