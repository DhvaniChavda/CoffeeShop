import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, SIZES} from 'src/theme';
import {STRING} from 'src/utils';
import {ThemeButton} from 'src/component/custom/button';
import {replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

const Intro = () => {
  const scrollViewRef = useRef(null);
  const [sliderPage, setSliderPage] = useState({currentPage: 0});
  const {currentPage: pageIndex} = sliderPage;
  const onRegisterClick = () => {
    replace(Routes.Register);
  };
  const onLoginClick = () => {
    replace(Routes.Login);
  };

  const onScrollPage = (event: any) => {
    const {currentPage} = sliderPage;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / SIZES.WIDTH);
    if (indexOfNextScreen !== currentPage) {
      setSliderPage({
        ...sliderPage,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const renderImageContainer = () => {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={event => {
          onScrollPage(event);
        }}>
        <View style={styles.vIntroContainer}>
          <ImageBackground source={APP_IMAGES.ic_intro1} style={styles.iIntro}>
            <View style={styles.vTextContainer}>
              <Text style={styles.tTitle}>{STRING.intro_slider.intro1}</Text>
              <Text style={styles.tDesc}>{STRING.intro_slider.desc}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.vIntroContainer}>
          <ImageBackground source={APP_IMAGES.ic_intro2} style={styles.iIntro}>
            <View style={styles.vTextContainer}>
              <Text style={styles.tTitle}>{STRING.intro_slider.intro2}</Text>
              <Text style={styles.tDesc}>{STRING.intro_slider.desc}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.vIntroContainer}>
          <ImageBackground source={APP_IMAGES.ic_intro3} style={styles.iIntro}>
            <View style={styles.vTextContainer}>
              <Text style={styles.tTitle}>{STRING.intro_slider.intro3}</Text>
              <Text style={styles.tDesc}>{STRING.intro_slider.desc}</Text>
            </View>
          </ImageBackground>
        </View>
      </Animated.ScrollView>
    );
  };

  const renderSkipContainer = () => {
    return (
      <TouchableOpacity style={styles.vSkip} activeOpacity={0.8}>
        <View style={styles.vDot}>
          <View style={styles.vDotInner}>
            {Array.from(Array(3).keys()).map((key, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  pageIndex === index
                    ? styles.activePaginationDots
                    : styles.paginationDots,
                ]}
                key={index}
                onPress={() => {
                  if (index != pageIndex) {
                    if (scrollViewRef.current !== null) {
                      scrollViewRef.current.scrollTo({
                        x: SIZES.WIDTH * index,
                        animated: true,
                      });
                    }
                  }
                }}
              />
            ))}
          </View>
        </View>
        {pageIndex < 2 && (
          <Text style={styles.tSkip}>{STRING.intro_slider.skip}</Text>
        )}
      </TouchableOpacity>
    );
  };

  const renderButtonContainer = () => {
    return (
      pageIndex == 2 && (
        <View style={styles.vButton}>
          <ThemeButton
            title={STRING.intro_slider.register}
            customStyle={styles.toRegister}
            titleStyle={styles.tRegister}
            onPress={onRegisterClick}
          />
          <ThemeButton
            title={STRING.intro_slider.sign_in}
            customStyle={styles.toSignIn}
            titleStyle={styles.tSignIn}
            onPress={onLoginClick}
          />
        </View>
      )
    );
  };
  return (
    <>
      <StatusBar
        backgroundColor={COLOR.black}
        barStyle={'light-content'}
        translucent={true}
      />
      <SafeAreaView style={styles.SaContainer}>
        <View style={styles.vMainContainer}>{renderImageContainer()}</View>
        {renderSkipContainer()}
        {renderButtonContainer()}
      </SafeAreaView>
    </>
  );
};

export default Intro;
