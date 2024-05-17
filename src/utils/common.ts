import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import moment from 'moment';
import {STRING} from 'src/utils';
export default {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  convertNotificationDate: (date: string) => {
    let today = moment().startOf('day');
    let mDate = moment(date).startOf('day');
    let diffDate = today.diff(mDate, 'day');
    if (diffDate === 0) {
      return STRING.notification.today;
    } else if (diffDate === 1) {
      return STRING.notification.yesterday;
    } else {
      return moment(date).format('DD MMM YYYY');
    }
  },
  formattedTime: (date: string) => {
    const timeAgo = moment(date);
    const now = moment();
    const diffInHours = now.diff(timeAgo, 'hours');
    const diffInDays = now.diff(timeAgo, 'days');

    if (diffInHours < 24) {
      return `${diffInHours}hr`;
    } else {
      return `${diffInDays}d`;
    }
  },
};
