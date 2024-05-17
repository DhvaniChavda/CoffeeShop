import React, {useEffect, useState} from 'react';
import {SectionList, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, METHOD, STRING} from 'src/utils';
import {goBack} from 'src/navigation/RootNavigation';
import moment from 'moment';
import {NotificationItem} from 'src/component/custom/item';

const Notification = () => {
  const [notificationList, setNotificationList] = useState<any>([]);
  const [customnotifList, setCustomNotifList] = useState<any>([]);
  useEffect(() => {
    DUMMYSTRING.notification_list.map((item: any, index: number) => {
      console.log('item===>', item);

      if (customnotifList.length > 0) {
        console.log('else custom list==>', customnotifList, item);

        var fi = customnotifList.findIndex(
          (e: any) =>
            moment(e.created_at).format('DD/MM/YYYY') ==
            moment(item.created_at).format('DD/MM/YYYY'),
        );
        console.log('findIndexfindIndex===>', fi);
        if (fi !== -1) {
          customnotifList[fi].data.push(item);
        } else {
          customnotifList.push({created_at: item.created_at, data: [item]});
        }
      } else {
        customnotifList.push({created_at: item.created_at, data: [item]});
      }
    });
    console.log('customList===>', customnotifList);
    setNotificationList([...customnotifList]);
  }, []);
  const onBackPress = () => {
    goBack();
  };
  const RenderDate = ({title}: any) => {
    return (
      <View style={styles.vRowContainer}>
        <Text style={styles.tToday}>
          {METHOD.convertNotificationDate(title)}
        </Text>
        <Text style={styles.tMark}>{STRING.notification.mark_all_read}</Text>
      </View>
    );
  };
  const renderListItem = ({item, index}: {item: any; index: number}) => {
    return <NotificationItem item={item} index={index} />;
  };
  const renderSeprator = () => {
    return <View style={styles.vSeprator} />;
  };
  const renderListContainer = () => {
    return (
      <SectionList
        stickySectionHeadersEnabled={false}
        bounces={false}
        sections={notificationList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListItem}
        renderSectionHeader={({section: {created_at}}) => (
          <RenderDate title={created_at} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeprator}
        style={styles.flatlist}
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
        title={STRING.notification.Notification}
        onBackPress={onBackPress}
      />
      <View style={styles.vContainer}>
        {notificationList.length > 0 && renderListContainer()}
      </View>
    </SafeAreaView>
  );
};
export default Notification;
