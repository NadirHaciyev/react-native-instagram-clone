import {gStyles, colors} from '@/constants';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  extraStyles?: any;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress: () => void;
}

function Button({
  type = 'primary',
  size = 'md',
  color = 'white',
  extraStyles,
  title,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[size], styles[type], extraStyles]}
      {...props}>
      {leftIcon && leftIcon}
      <Text style={[styles.title, {color}]}>{title}</Text>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 999,
    ...gStyles.flexCenter,
  },
  primary: {
    backgroundColor: colors.button_primary,
  },
  secondary: {
    backgroundColor: colors.button_secondary,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: colors.transparent,
    alignSelf: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Button;
