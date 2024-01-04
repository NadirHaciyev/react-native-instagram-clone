import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Logo, MessageIcon} from '@/components/icons';
import {colors, gStyles} from '@/constants';
import Container from '@/components/common/Container';
import {useNavigation} from '@react-navigation/native';

function NavigationBar() {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Logo width={104} height={30} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" color="white" size={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <MessageIcon />
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 15,
                backgroundColor: colors.red,
                position: 'absolute',
                top: -5,
                right: -5,
                ...gStyles.flexCenter,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
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
});

export default NavigationBar;
