import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';

import {colors} from '@/constants';

interface FormInputProps {
  htmlRef?: any;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

function FormInput({placeholder, htmlRef, ...props}: FormInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // @ts-ignore
        ref={htmlRef}
        placeholder={placeholder}
        placeholderTextColor={colors.grey_400}
        onFocus={() => console.log('focuesd')}
        // onBlur={() => Keyboard.dismiss()}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  input: {
    height: '100%',
    borderWidth: 1,
    fontSize: 16,
    borderColor: colors.grey_700,
    color: colors.white,
    backgroundColor: colors.grey_900,
    borderRadius: 10,
    paddingHorizontal: 14,
  },
});

export default FormInput;
