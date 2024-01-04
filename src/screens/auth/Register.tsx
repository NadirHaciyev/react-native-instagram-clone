import {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import useAppDispatch from '@/hooks/useAppDispatch';
import Form from '@/components/auth/register/Form';
import {colors} from '@/constants';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

function Register({navigation}: {navigation: NavigationProp<any, any>}) {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidHide', () => setIsShow(true));

    const hide = Keyboard.addListener('keyboardDidShow', () =>
      setIsShow(false),
    );

    return () => {
      hide.remove();
      show.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={[{display: isShow ? 'flex' : 'none'}, styles.language]}>
            English
          </Text>
          <Image
            style={{
              width: 70,
              height: 70,
              display: isShow ? 'flex' : 'none',
            }}
            source={require('@/../assets/logo.png')}
          />
        </View>

        <View style={styles.form}>
          <Container>
            <Form />
          </Container>
        </View>

        <View style={[{display: isShow ? 'flex' : 'none'}, styles.bottom]}>
          <Container>
            <Button
              extraStyles={{
                borderColor: colors.button_primary,
              }}
              color={colors.button_primary}
              title="Have an account"
              type="outline"
              onPress={() => navigation.navigate('Login')}
            />
            <Text style={styles.metaText}>Meta</Text>
          </Container>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey_950,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    gap: 50,
  },
  language: {
    color: colors.grey_600,
    fontSize: 16,
    marginTop: 20,
  },

  form: {flex: 1, justifyContent: 'center', width: '100%'},

  bottom: {
    gap: 10,
    width: '100%',
    justifyContent: 'flex-end',
  },
  metaText: {
    textAlign: 'center',
    color: colors.grey_300,
    fontSize: 20,
  },
});

export default Register;
