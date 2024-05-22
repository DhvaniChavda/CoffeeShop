import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {COLOR, SIZES} from 'src/theme';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';

const Details = ({route}: any) => {
  const [details, setDetails] = useState(STRING.homeDetails);
  const [qty, setQty] = useState<number>(1);
  const onBackPress = () => {
    goBack();
  };
  const onMinusClick = () => {
    setQty(prevQty => (prevQty == 1 ? 1 : prevQty - 1));
  };
  const onAddClick = () => {
    setQty(prevQty => prevQty + 1);
  };
  const onAddToCartClick = () => {
    navigate(Routes.Cart);
  };
  const renderIngredientsContainer = () => {
    return (
      <View style={styles.vIngredients}>
        <Text style={styles.tIngredientsTitle}>{STRING.home.ingredients}</Text>
      </View>
    );
  };
  const renderCurvedLine = () => {
    return (
      <>
        <ImageBackground source={APP_IMAGES.ic_curved} style={styles.iCurved}>
          <View style={styles.vMilkCan}>
            <Image source={APP_IMAGES.ic_milk_can} style={styles.iMilkCan} />
          </View>
          <Text style={styles.tIngredientsName}>{details.ingredients}</Text>
        </ImageBackground>
      </>
    );
  };
  const renderSizeContainer = () => {
    return (
      <View style={styles.vSize}>
        <Text style={styles.tSize}>{STRING.home.size(details.name)}</Text>
        <View style={styles.vRowContainer}>
          <View>
            <View
              style={[
                styles.vCup,
                {
                  height: SIZES.countPixelRatio(70),
                  width: SIZES.countPixelRatio(70),
                },
              ]}>
              <Image
                source={APP_IMAGES.ic_cup}
                style={[
                  styles.iCup,
                  {
                    height: SIZES.countPixelRatio(40),
                    width: SIZES.countPixelRatio(40),
                    tintColor: COLOR.background,
                  },
                ]}
              />
            </View>
            <Text style={styles.tSmall}>{STRING.home.small}</Text>
          </View>
          <View>
            <View
              style={[
                styles.vCup,
                {
                  height: SIZES.countPixelRatio(100),
                  width: SIZES.countPixelRatio(100),
                },
              ]}>
              <Image
                source={APP_IMAGES.ic_cup}
                style={[
                  styles.iCup,
                  {
                    height: SIZES.countPixelRatio(60),
                    width: SIZES.countPixelRatio(60),
                    tintColor: COLOR.background,
                  },
                ]}
              />
            </View>
            <Text style={styles.tSmall}>{STRING.home.medium}</Text>
          </View>
          <View>
            <View
              style={[
                styles.vCup,
                {
                  height: SIZES.countPixelRatio(150),
                  width: SIZES.countPixelRatio(150),
                },
              ]}>
              <Image
                source={APP_IMAGES.ic_cup}
                style={[
                  styles.iCup,
                  {
                    height: SIZES.countPixelRatio(80),
                    width: SIZES.countPixelRatio(80),
                    tintColor: COLOR.background,
                  },
                ]}
              />
            </View>
            <Text style={styles.tSmall}>{STRING.home.large}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderQtyContainer = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.countPixelRatio(120),
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.toMinus}
          activeOpacity={0.8}
          onPress={onMinusClick}>
          <Image source={APP_IMAGES.ic_minus} style={styles.iMinus} />
        </TouchableOpacity>
        <Text style={styles.tSize}>{qty < 0 ? qty : qty}</Text>
        <TouchableOpacity
          style={styles.toMinus}
          activeOpacity={0.8}
          onPress={onAddClick}>
          <Image source={APP_IMAGES.ic_add} style={styles.iMinus} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: SIZES.countPixelRatio(30),
        }}>
        <Text
          style={[
            styles.tSize,
            {textAlign: 'left', marginRight: SIZES.countPixelRatio(20)},
          ]}>
          {'$'}
          {details.price}
        </Text>
        <ThemeButton
          title={STRING.home.add_to_cart}
          customStyle={{flex: 1, backgroundColor: COLOR.primary}}
          onPress={onAddToCartClick}
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={styles.saContainer}
      forceInset={{top: 'never', bottom: 'never'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />

      <View style={styles.saContainer}>
        <ImageBackground
          source={APP_IMAGES.ic_details}
          style={styles.iBgImage}
          imageStyle={styles.iBgImage}>
          <ToolbarBackWithTitle
            title={route.params.data.name}
            isRightIcon={true}
            rightIcon={APP_IMAGES.ic_heart}
            onBackPress={onBackPress}
            backgroundColor={{backgroundColor: 'transparent'}}
            viewCustomStyle={{marginTop: SIZES.countPixelRatio(30)}}
          />
        </ImageBackground>

        <ImageBackground
          source={APP_IMAGES.ic_round}
          style={styles.iRound}
          imageStyle={styles.iRound}>
          <ScrollView
            style={styles.vRound}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            {renderIngredientsContainer()}
            {renderCurvedLine()}
            {renderSizeContainer()}
            {renderQtyContainer()}
            {renderButtonContainer()}
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default Details;
