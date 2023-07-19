import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AvatarWithoutSharingProps {
  size: number;
  image: string;
}

function AvatarWithoutSharing({size, image}: AvatarWithoutSharingProps) {
  return (
    <Image
      style={{borderRadius: size}}
      source={{
        width: size,
        height: size,
        uri: image,
      }}
    />
  );
}

export default AvatarWithoutSharing;
