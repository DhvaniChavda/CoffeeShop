import React, {useEffect} from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import {navigate, replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import styles from './style';
import {COLOR} from 'src/theme';
import {APP_IMAGES} from 'src/assets/images';
import {ThemeButton} from 'src/component/custom/button';
import {STRING} from 'src/utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = () => {
  const onGetStartedClick = () => {
    replace(Routes.Intro);
    // replace(Routes.Dashboard);
  };
  return (
    <SafeAreaView
      style={styles.SaContainer}
      // forceInset={{top: 'always', bottom: 'never'}}
    >
      <StatusBar
        backgroundColor={COLOR.black}
        barStyle={'light-content'}
        translucent
      />
      <View style={styles.vContainer}>
        <ImageBackground
          source={APP_IMAGES.ic_splash}
          style={styles.iSplash}
          resizeMode="cover">
          <Image
            source={APP_IMAGES.ic_coffeescriptLogo}
            style={styles.iCoffeeLogo}
          />
          <ThemeButton
            title={STRING.splash.get_started}
            customStyle={styles.toGetStarted}
            onPress={onGetStartedClick}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default Splash;
