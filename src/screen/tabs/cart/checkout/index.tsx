import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {DUMMYSTRING, STRING} from 'src/utils';
import {CheckoutItem, SettingItem} from 'src/component/custom/item';
import {APP_IMAGES} from 'src/assets/images';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';

interface ICheckOutProps {
  route?: any;
}

const Checkout = ({route}: ICheckOutProps) => {
  const [details, setDetails] = useState(DUMMYSTRING.checkOutDetails);
  const onBackPress = () => {
    goBack();
  };
  const renderHeaderContainer = (
    headerTitle: string,
    icon: any,
    title: string,
    subTitle: string,
    buttonTitle: string,
  ) => {
    return (
      <View>
        <Text style={styles.tHeaderTitle}>{headerTitle}</Text>
        <View style={styles.vRow}>
          <View style={styles.vIcon}>
            <Image source={icon} style={styles.iIcon} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.tTitle}>{title}</Text>
            <Text style={styles.tSubTitle}> {subTitle}</Text>
          </View>
          <TouchableOpacity style={styles.toButton} activeOpacity={0.8}>
            <Text>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderListContainer = () => {
    return (
      <>
        <Text style={styles.tHeaderTitle}>{STRING.checkout.product_list}</Text>
        <FlatList
          data={details.cart_list}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{rowGap: 20}}
          style={{marginBottom: 20}}
        />
      </>
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <CheckoutItem item={item} index={index} />;
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.checkout.continue_payment}
        customStyle={styles.toPayment}
        onPress={() => {
          navigate(Routes.Payment);
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
        title={STRING.checkout.checkout}
        onBackPress={onBackPress}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderHeaderContainer(
          STRING.checkout.deliver_address,
          APP_IMAGES.ic_map,
          STRING.checkout.home,
          details.address,
          STRING.checkout.Change,
        )}
        {renderHeaderContainer(
          STRING.checkout.add_payment,
          APP_IMAGES.ic_add,
          STRING.checkout.add_card,
          details.card_details,
          STRING.checkout.add,
        )}
        {renderListContainer()}
        {renderButtonContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Checkout;
