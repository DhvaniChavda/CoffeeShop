import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, SIZES} from 'src/theme';
import {HomeToolBar} from 'src/component/custom/toolbar';
import {APP_IMAGES} from 'src/assets/images';
import {DUMMYSTRING, STRING} from 'src/utils';
import {DrinkItem, HomeTagItem} from 'src/component/custom/item';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

const Home = () => {
  const [tagList, setTagList] = useState(DUMMYSTRING.home_tag_list);

  const [drinkList, setDrinkList] = useState(DUMMYSTRING.drink_list);
  useEffect(() => {
    if (tagList.length > 0) {
      onTagClick(0); // Select the first item
    }
  }, []);
  const onNotificationClick = () => {
    navigate(Routes.Notification);
  };
  const onSearchClick = () => {};
  const onTagClick = (index: number) => {
    const updatedTags = tagList.map((item, tagIndex) => {
      if (tagIndex === index) {
        return {...item, isSelected: true};
      } else {
        return {...item, isSelected: false};
      }
    });
    setTagList(updatedTags);
  };
  const onLikeClick = (index: number) => {
    drinkList[index].isSelected = !drinkList[index].isSelected;
    setDrinkList([...drinkList]);
  };
  const renderBannerContainer = () => {
    return (
      <View style={styles.vBanner}>
        <View style={{flex: 1}}>
          <Text style={styles.tDiscount}>{STRING.home.discount}</Text>
          <Text style={styles.tDesc}>{STRING.home.banner_desc}</Text>
        </View>

        <Image source={APP_IMAGES.ic_coffee} style={styles.iCoffee} />
      </View>
    );
  };
  const renderTagListContainer = () => {
    return (
      <FlatList
        data={tagList}
        renderItem={renderTagItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
      />
    );
  };
  const renderTagItem = ({item, index}: {item: any; index: number}) => {
    return <HomeTagItem item={item} index={index} onTagClick={onTagClick} />;
  };
  const renderDrinksListConainer = () => {
    return (
      <FlatList
        data={drinkList}
        renderItem={renderDrinksItem}
        numColumns={2}
        style={{
          marginHorizontal: SIZES.countPixelRatio(20),
          marginBottom: SIZES.countPixelRatio(20),
        }}
        columnWrapperStyle={{columnGap: SIZES.countPixelRatio(20)}}
        contentContainerStyle={{rowGap: SIZES.countPixelRatio(20)}}
      />
    );
  };
  const renderDrinksItem = ({item, index}: {item: any; index: number}) => {
    return <DrinkItem item={item} index={index} onLikeClick={onLikeClick} />;
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <StatusBar
        backgroundColor={COLOR.brown}
        barStyle={'light-content'}
        translucent={true}
      />
      <HomeToolBar
        onNotificationClick={onNotificationClick}
        onSearchClick={onSearchClick}
      />
      <ScrollView
        style={styles.vMainContainer}
        showsVerticalScrollIndicator={false}>
        {renderBannerContainer()}
        {renderTagListContainer()}
        {renderDrinksListConainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
