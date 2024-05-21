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

interface IPaymentProps {
  route?: any;
}

const Payment = ({route}: IPaymentProps) => {
  const onBackPress = () => {
    goBack();
  };
  const renderPaymentInfo = () => {
    return (
      <>
        <View style={styles.vCheck}>
          <Image source={APP_IMAGES.ic_check} style={styles.iCheck} />
        </View>
        <Text style={styles.tPayment}>{STRING.payment.payment_successful}</Text>
        <Text style={styles.tInfo}>{STRING.payment.payment_info}</Text>
      </>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.payment.track_order}
        customStyle={styles.toTrack}
        onPress={() => {
          navigate(Routes.TrackOrder);
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
      <ToolbarBackWithTitle title={''} onBackPress={onBackPress} />
      <View style={styles.vContainer}>{renderPaymentInfo()}</View>
      {renderButtonContainer()}
    </SafeAreaView>
  );
};
export default Payment;
