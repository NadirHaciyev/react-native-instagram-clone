import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AvatarWithSharingProps {
  size: number;
  image: string;
}

function AvatarWithSharing({size, image}: AvatarWithSharingProps) {
  return (
    <LinearGradient
      colors={['#DE0046', '#F7A34B']}
      style={[
        styles.gradient,
        {
          width: size,
          height: size,
          borderRadius: size,
        },
      ]}>
      <Image
        style={[styles.avatar, {borderRadius: size}]}
        source={{
          width: size - 4,
          height: size - 4,
          uri: image,
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default AvatarWithSharing;
