import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, SIZES} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, ENUM, STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {SearchInput, ThemeInput} from 'src/component/custom/textInput';
import {DrinkItem, FavoriteItem} from 'src/component/custom/item';
import {useIsFocused} from '@react-navigation/native';
import {Routes} from 'src/navigation/route';

const Wishlist = () => {
  const searchRef = useRef<TextInput>(null);
  const isVisible = useIsFocused();
  const [search, setSearch] = useState<string>('');
  const [favoriteList, setFavoriteList] = useState(DUMMYSTRING.drink_list);

  useEffect(() => {
    if (isVisible) {
      const favoriteDrinks = DUMMYSTRING.drink_list.filter(
        drink => drink.isFavorite,
      );
      console.log('favoriteDrinksfavoriteDrinks', favoriteDrinks);

      setFavoriteList(favoriteDrinks);
    }
  }, [isVisible]);
  const onBackPress = () => {
    goBack();
  };
  const onLikeClick = (index: number) => {
    favoriteList[index].isFavorite = !favoriteList[index].isFavorite;
    favoriteList.splice(index, 1);
    setFavoriteList([...favoriteList]);
  };
  const renderSearchContainer = () => {
    return (
      <SearchInput
        ref={searchRef}
        value={search}
        onChangeText={(text: string) => {
          setSearch(text);
        }}
        placeholder={STRING.favorite.ph_search}
        returnKeyType={'done'}
        keyboardType={'default'}
        onSubmitEditing={() => Keyboard.dismiss()}
        blurOnSubmit={false}
        viewCustomStyle={{marginBottom: SIZES.countPixelRatio(50)}}
      />
    );
  };
  const renderListContainer = () => {
    return (
      <FlatList
        data={favoriteList}
        renderItem={renderFavoriteItem}
        numColumns={2}
        columnWrapperStyle={{columnGap: SIZES.countPixelRatio(20)}}
        contentContainerStyle={{rowGap: SIZES.countPixelRatio(20)}}
        keyExtractor={(_, index) => index.toString()}
      />
    );
  };
  const renderFavoriteItem = ({item, index}: {item: any; index: number}) => {
    return <FavoriteItem item={item} index={index} onLikeClick={onLikeClick} />;
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <StatusBar
        backgroundColor={COLOR.brown}
        barStyle={'light-content'}
        translucent={true}
      />
      <ToolbarBackWithTitle
        title={STRING.favorite.favorite}
        isRightIcon={true}
        rightIcon={APP_IMAGES.ic_notification}
        onBackPress={onBackPress}
        onRightIconPress={() => {
          navigate(Routes.Notification);
        }}
        isFromTab={true}
      />
      <View style={styles.vContainer}>
        {renderSearchContainer()}
        {renderListContainer()}
      </View>
    </SafeAreaView>
  );
};
export default Wishlist;
