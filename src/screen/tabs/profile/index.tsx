import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {STRING} from 'src/utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {APP_IMAGES, DUMMY_IMAGES} from 'src/assets/images';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ProfileItem} from 'src/component/custom/item';
import {ModalLogout} from 'src/component/custom/modal';

const Profile = () => {
  const [list, setList] = useState(STRING.profile_list);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const onBackPress = () => {
    goBack();
  };
  const onCloseListener = () => {
    setIsLogoutModal(false);
  };
  const onYesClick = () => {
    setIsLogoutModal(false);
  };
  const onNoClick = () => {
    setIsLogoutModal(false);
  };
  const onItemClick = (index: number) => {
    if (index == list.length - 1) {
      console.log('logout press>>>>>');
      setIsLogoutModal(true);
    } else {
      navigate(list[index].route, {title: list[index].name});
    }
  };
  const renderProfileContainer = () => {
    return (
      <View style={styles.vProfile}>
        <ImageBackground
          source={DUMMY_IMAGES.ic_dummy_profile}
          style={styles.iProfile}>
          <TouchableOpacity style={styles.toEdit} activeOpacity={0.8}>
            <Image source={APP_IMAGES.ic_edit} style={styles.iEdit} />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.tName}>{STRING.home.name}</Text>
      </View>
    );
  };
  const renderProfileListContainer = () => {
    return (
      <FlatList
        data={list}
        renderItem={renderProfileItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
      />
    );
  };
  const renderProfileItem = ({item, index}: {item: any; index: number}) => {
    return <ProfileItem item={item} index={index} onItemClick={onItemClick} />;
  };
  return (
    <SafeAreaView style={styles.saContainer}>
      <StatusBar
        backgroundColor={COLOR.brown}
        barStyle={'light-content'}
        translucent={true}
      />
      <ToolbarBackWithTitle
        title={STRING.profile.profile}
        isRightIcon={true}
        rightIcon={APP_IMAGES.ic_notification}
        onBackPress={onBackPress}
      />

      <ScrollView style={styles.vContainer}>
        <View style={styles.vContainer}>
          {renderProfileContainer()}
          {renderProfileListContainer()}
        </View>
      </ScrollView>
      {isLogoutModal && (
        <ModalLogout
          isModalOpen={isLogoutModal}
          onCloseListener={onCloseListener}
          title={STRING.profile.logout_title}
          info={STRING.profile.logout_info}
          onYesClick={onYesClick}
          onNoClick={onNoClick}
        />
      )}
    </SafeAreaView>
  );
};
export default Profile;
