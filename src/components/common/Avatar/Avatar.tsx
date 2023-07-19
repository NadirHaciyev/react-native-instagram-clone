import React from 'react';
import {Text, View} from 'react-native';
import AvatarWithSharing from './AvatarWithSharing';
import AvatarWithoutSharing from './AvatarWithoutSharing';

interface AvatarProps {
  size: number;
  image: string;
  hasSharing: boolean;
}

function Avatar({size, image, hasSharing}: AvatarProps) {
  return (
    <View>
      {hasSharing ? (
        <AvatarWithSharing size={size} image={image} />
      ) : (
        <AvatarWithoutSharing size={size} image={image} />
      )}
    </View>
  );
}

export default Avatar;
