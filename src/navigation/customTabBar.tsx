import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from 'src/navigation/RootNavigation';
import {updateCurrentTab} from 'src/redux/action/commonAction';
import {COLOR, SIZES} from 'src/theme';
import {STRING} from 'src/utils';

const CustomTabBar = (props: any) => {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: any) => state.commonReducer.currentTab,
  );
  const handleFocusOnIcon = (item: any, index: number) => {
    navigate(item.route);
    dispatch(updateCurrentTab(index));
  };
  return (
    <View style={styles.VContainer}>
      {STRING.bottom_tab.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.toTabContainer}
            onPress={() => {
              handleFocusOnIcon(item, index);
            }}>
            {currentTab == index ? (
              <View style={styles.vTabContainer}>
                <Image source={item.icon} style={styles.activeIcon} />
              </View>
            ) : (
              <Image source={item.icon} style={styles.iIcon} />
            )}
          </TouchableOpacity>
        );
      })}
      {/* {currentTab == index && ( */}
      <View
        style={[
          styles.mountain,
          {left: (SIZES.WIDTH / STRING.bottom_tab.length) * currentTab},
        ]}
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  VContainer: {
    backgroundColor: COLOR.primary,
    height: SIZES.countPixelRatio(75),
    flexDirection: 'row',
    // paddingHorizontal: SIZES.countPixelRatio(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  toTabContainer: {
    height: SIZES.countPixelRatio(75),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iIcon: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
  activeIcon: {
    tintColor: COLOR.white,
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  vTabContainer: {
    height: SIZES.countPixelRatio(50),
    backgroundColor: COLOR.background,
    width: SIZES.countPixelRatio(50),
    borderRadius: SIZES.countPixelRatio(25),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  // mountain: {
  //   position: 'absolute',
  //   top: -13,
  //   marginLeft: 15,
  //   // right: 0,
  //   width: 70,
  //   height: 35, // Adjust the height of the mountain as needed
  //   backgroundColor: 'transparent',
  //   borderBottomLeftRadius: 70, // Adjust the radius to make the mountain-like shape
  //   borderBottomRightRadius: 70, // Adjust the radius to make the mountain-like shape
  //   borderBottomWidth: 13, // Adjust the thickness of the mountain
  //   borderBottomColor: COLOR.primary, // Match the background color
  //   transform: [{rotate: '180deg'}], // Rotate the curve 180 degrees to make it point upwards
  // },
  mountain: {
    position: 'absolute',
    top: -8,
    marginLeft: 20,
    width: 60,
    height: 30,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomWidth: 8,
    borderBottomColor: COLOR.primary,
    transform: [{rotate: '180deg'}],
    zIndex: -1,
  },
});
export default CustomTabBar;
