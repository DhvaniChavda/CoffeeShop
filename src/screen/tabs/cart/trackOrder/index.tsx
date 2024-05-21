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
import {COLOR, SIZES} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {DUMMYSTRING, STRING} from 'src/utils';
import {CheckoutItem, SettingItem} from 'src/component/custom/item';
import {APP_IMAGES} from 'src/assets/images';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';

interface ITrackProps {
  route?: any;
}

const TrackOrder = ({route}: ITrackProps) => {
  const onBackPress = () => {
    goBack();
  };
  const renderImagecontianer = () => {
    return <Image source={APP_IMAGES.ic_track} style={styles.iTrack} />;
  };
  const renderEstimatedContainer = () => {
    return (
      <View style={styles.vRow}>
        <View style={styles.vClock}>
          <Image source={APP_IMAGES.ic_clock} style={styles.iClock} />
        </View>
        <View>
          <Text style={styles.tEstimated}>{STRING.track.estimated}</Text>
          <Text style={styles.tDeliveryTime}>
            {STRING.track.delivery_time(45)}
          </Text>
        </View>
      </View>
    );
  };
  const renderOrderDetail = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.vRow}>
          <View style={styles.vCheck}>
            <Image source={APP_IMAGES.ic_check} style={styles.iCheck} />
          </View>
          <View>
            <Text style={styles.tOrder}>{STRING.track.order_placed}</Text>
            <Text style={styles.tDate}>{'23 march, 2024, 04:36 PM'}</Text>
          </View>
        </View>

        <View style={styles.vRow}>
          <View style={styles.vCheck}>
            <Image source={APP_IMAGES.ic_check} style={styles.iCheck} />
          </View>
          <View>
            <Text style={styles.tOrder}>{STRING.track.in_progress}</Text>
            <Text style={styles.tDate}>{'23 march, 2024, 04:40 PM'}</Text>
          </View>
        </View>

        <View style={styles.vRow}>
          <View
            style={[
              styles.vCheck,
              {
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderColor: COLOR.primary,
              },
            ]}>
            <Image
              source={APP_IMAGES.ic_check}
              style={[styles.iCheck, {tintColor: COLOR.primary}]}
            />
          </View>
          <View>
            <Text style={styles.tOrder}>{STRING.track.on_your_way}</Text>
            <Text style={styles.tDate}>{'23 march, 2024, 05:10 PM'}</Text>
          </View>
        </View>

        <View style={styles.vRow}>
          <View
            style={[
              styles.vCheck,
              {
                backgroundColor: 'transparent',
                borderWidth: 3,
                borderColor: COLOR.primary,
              },
            ]}>
            <Image
              source={APP_IMAGES.ic_check}
              style={[styles.iCheck, {tintColor: COLOR.primary}]}
            />
          </View>
          <View>
            <Text style={styles.tOrder}>{STRING.track.deliverd}</Text>
            <Text style={styles.tDate}>{'23 march, 2024, 05:20 PM'}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.track.chat_with_rider}
        customStyle={{
          backgroundColor: COLOR.primary,
          marginBottom: SIZES.countPixelRatio(20),
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
        title={STRING.track.track_order}
        onBackPress={onBackPress}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderImagecontianer()}
        {renderEstimatedContainer()}
        {renderOrderDetail()}
        {renderButtonContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default TrackOrder;
