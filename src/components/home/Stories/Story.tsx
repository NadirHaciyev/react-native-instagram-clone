import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '@/components/common/Avatar/Avatar';

interface StoryProps {
  name: string;
  image: string;
  hasSharing: boolean;
}

function Story({name, image, hasSharing}: StoryProps) {
  return (
    <View style={[styles.story, {width: 68}]}>
      <Avatar size={68} image={image} hasSharing={hasSharing} />
      <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  story: {
    marginHorizontal: 10,
    alignItems: 'center',
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: 'white',
  },
});

export default Story;
