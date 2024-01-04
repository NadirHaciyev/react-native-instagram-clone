import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Logo, MessageIcon} from '@/components/icons';
import {colors, gStyles} from '@/constants';
import Container from '@/components/common/Container';
import {useNavigation} from '@react-navigation/native';
import useAppSelector from '@/hooks/useAppSelector';

function MessagesNavigationBar() {
  const navigation = useNavigation<any>();
  const user = useAppSelector(state => state.user.user);

  return (
    <View style={styles.innerContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="white" size={28} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.title}>{user?.user_name}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="videocam-outline" color="white" size={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="create-outline" color="white" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    height: 36,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default MessagesNavigationBar;
