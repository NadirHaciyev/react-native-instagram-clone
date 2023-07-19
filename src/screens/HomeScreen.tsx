import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stories from '@/components/home/Stories';

function HomeScreen() {
  return (
    <View style={styles.main}>
      <Stories />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default HomeScreen;
