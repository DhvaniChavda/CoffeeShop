import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, SIZES} from 'src/theme';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SwipeListView} from 'src/component/library/ react-native-swipe-list-view';
import {CartItem} from 'src/component/custom/item';
import {ThemeButton} from 'src/component/custom/button';
import {ModalLogout} from 'src/component/custom/modal';
import {Routes} from 'src/navigation/route';

const Cart = () => {
  const onBackPress = () => {
    goBack();
  };
  const [cartList, setCartList] = useState<Array<object>>(
    DUMMYSTRING.cart_list,
  );
  const [isRemoveCartModal, setIsRemoveCartModal] = useState<boolean>(false);

  const onCloseListener = () => {
    setIsRemoveCartModal(false);
  };
  const onYesClick = () => {
    setIsRemoveCartModal(false);
  };
  const onNoClick = () => {
    setIsRemoveCartModal(false);
  };
  const renderHeaderContainer = () => {
    return (
      <View style={styles.vHeader}>
        <Text style={styles.tMyOrder}>{STRING.cart.my_order}</Text>
        <Text style={styles.tYouHave}>{STRING.cart.you_have(3)}</Text>
      </View>
    );
  };
  const renderListContainer = () => {
    return (
      <SwipeListView
        data={cartList}
        renderItem={(data: any, rowMap: any) => renderCartItem(data)}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderHiddenItem={(data: any, rowMap: any) =>
          renderHiddenContainer(data, rowMap)
        }
        showsVerticalScrollIndicator={false}
        // style={styles.listCurve}
        leftOpenValue={0}
        rightOpenValue={SIZES.smartWidthScale(-70)}
        stopLeftSwipe={1}
      />
    );
  };
  const renderCartItem = ({item, index}: {item: any; index: number}) => {
    return <CartItem key={item.id} item={item} index={index} />;
  };
  const renderHiddenContainer = (data: any, rowMap: any) => {
    return (
      <TouchableOpacity
        style={[styles.toHiddenContainer]}
        onPress={() => {
          closeRow(rowMap, data.index);
          setIsRemoveCartModal(true);
        }}>
        <Image
          source={APP_IMAGES.ic_delete}
          tintColor={COLOR.white}
          style={styles.iDelete}
        />
      </TouchableOpacity>
    );
  };
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const renderTotalContainer = () => {
    return (
      <View style={styles.vTotal}>
        <View style={styles.vRow}>
          <Text style={styles.tSub}>{STRING.cart.sub_total}</Text>
          <View style={styles.vSeprator} />
          <Text style={styles.tPrice}>{STRING.cart.price(30)}</Text>
        </View>
        <View style={styles.vRow}>
          <Text style={styles.tSub}>{STRING.cart.shipping}</Text>
          <View style={styles.vSeprator} />
          <Text style={styles.tPrice}>{STRING.cart.price(10)}</Text>
        </View>
        <View style={styles.vRow}>
          <Text style={styles.tSub}>{STRING.cart.total}</Text>
          <View style={styles.vSeprator} />
          <Text style={styles.tPrice}>{STRING.cart.price(40)}</Text>
        </View>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.cart.finalize_order}
        customStyle={styles.toOrder}
        titleStyle={styles.tOrder}
        onPress={() => {
          navigate(Routes.Checkout);
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <StatusBar
        backgroundColor={COLOR.brown}
        barStyle={'light-content'}
        translucent={true}
      />
      <ToolbarBackWithTitle
        title={STRING.cart.cart}
        isRightIcon={true}
        rightIcon={APP_IMAGES.ic_notification}
        onRightIconPress={() => {
          navigate(Routes.Notification);
        }}
        onBackPress={onBackPress}
        isFromTab={true}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderHeaderContainer()}
        {cartList.length > 0 && renderListContainer()}
        {renderTotalContainer()}
      </ScrollView>
      {renderButtonContainer()}
      {isRemoveCartModal && (
        <ModalLogout
          isModalOpen={isRemoveCartModal}
          onCloseListener={onCloseListener}
          title={STRING.cart.remove_title}
          info={STRING.cart.remove_info}
          onYesClick={onYesClick}
          onNoClick={onNoClick}
        />
      )}
    </SafeAreaView>
  );
};
export default Cart;
