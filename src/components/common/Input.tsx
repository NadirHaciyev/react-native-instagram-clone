import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {colors} from '@/constants';

interface FormInputProps {
  size?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

// Todo : Fix the type of styles
function Input({
  placeholder,
  size = 'md',
  leftIcon,
  rightIcon,
  ...props
}: FormInputProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={() => inputRef.current?.focus()}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        // @ts-ignore
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={colors.grey_400}
        onFocus={() => console.log('focuesd')}
        // onBlur={() => Keyboard.dismiss()}
        {...props}
      />
      {rightIcon && rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    position: 'relative',
  },
  leftIconContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 16,
    top: '50%',
    transform: [{translateY: -11}],
  },
  input: {
    paddingVertical: 4,
    height: '100%',
    borderWidth: 1,
    fontSize: 20,
    fontWeight: 'semibold',
    borderColor: colors.grey_700,
    color: colors.white,
    backgroundColor: colors.grey_900,
    borderRadius: 10,
    paddingHorizontal: 54,
  },
});

export default Input;
