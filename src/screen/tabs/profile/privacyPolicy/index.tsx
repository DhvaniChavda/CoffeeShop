import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {goBack} from 'src/navigation/RootNavigation';
import {STRING} from 'src/utils';
interface IPolicyProps {
  route?: any;
}
const PrivacyPolicy = ({route}: IPolicyProps) => {
  const onBackPress = () => {
    goBack();
  };
  const renderDataContainer = () => {
    return (
      <View style={styles.vData}>
        <Text style={styles.tData}>{STRING.privacy_policy.tnc}</Text>
        <Text style={styles.tDesc}>{STRING.privacy_policy.desc}</Text>
      </View>
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
        title={route.params.title}
        onBackPress={onBackPress}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderDataContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default PrivacyPolicy;
