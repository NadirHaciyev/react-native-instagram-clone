import React from 'react';
import {View} from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  extraStyles?: {
    [key: string]: string | number;
  };
}

function Container({children, extraStyles}: ContainerProps) {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        width: '100%',
        ...extraStyles,
      }}>
      {children}
    </View>
  );
}

export default Container;
