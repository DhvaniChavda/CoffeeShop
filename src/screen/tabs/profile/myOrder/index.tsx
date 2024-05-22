import React, {useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {goBack} from 'src/navigation/RootNavigation';
import {DUMMYSTRING} from 'src/utils';
import {OrderItem} from 'src/component/custom/item';
interface IMyOrderProps {
  route?: any;
}
const MyOrder = ({route}: IMyOrderProps) => {
  const [orderList, setOrderList] = useState(DUMMYSTRING.my_order_list);
  const onBackPress = () => {
    goBack();
  };
  const renderOrderListContainer = () => {
    return (
      <FlatList
        data={orderList}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderOrderItem = ({item, index}: {item: any; index: number}) => {
    return <OrderItem item={item} index={index} />;
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <StatusBar
        backgroundColor={COLOR.brown}
        barStyle={'light-content'}
        translucent={true}
      />
      <ToolbarBackWithTitle
        title={route.params.title}
        onBackPress={onBackPress}
      />
      <View style={styles.vContainer}>{renderOrderListContainer()}</View>
    </SafeAreaView>
  );
};
export default MyOrder;
