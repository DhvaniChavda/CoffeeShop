import React, {useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {goBack} from 'src/navigation/RootNavigation';
import {STRING} from 'src/utils';
import {SettingItem} from 'src/component/custom/item';

interface ISettingProps {
  route?: any;
}

const SettingScreen = ({route}: ISettingProps) => {
  const [list, setList] = useState(STRING.setting_list);
  const onBackPress = () => {
    goBack();
  };
  const renderSeprator = () => {
    return <View style={styles.vSeprator}/>;
  };
  const renderListContainer = () => {
    return (
      <FlatList
        data={list}
        renderItem={renderSettingItem}
        style={styles.flatlist}
        ItemSeparatorComponent={renderSeprator}
      />
    );
  };
  const renderSettingItem = ({item, index}: {item: any; index: number}) => {
    return <SettingItem item={item} index={index} />;
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
      <View style={styles.saContainer}>{renderListContainer()}</View>
    </SafeAreaView>
  );
};
export default SettingScreen;
