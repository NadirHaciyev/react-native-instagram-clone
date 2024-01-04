import {useRef} from 'react';
import {StyleSheet, View, TextInput, Keyboard} from 'react-native';
import {useFormik} from 'formik';
import useAppDispatch from '@/hooks/useAppDispatch';

import {useAuth} from '@/context/AuthContext';
import FormInput from '@/components/common/Inputs/FormInput';
import {register} from '@/store/userSlice';
import Button from '@/components/common/Button';
import useAppSelector from '@/hooks/useAppSelector';

type FormValues = {
  full_name: string;
  user_name: string;
  email: string;
  password: string;
};

interface FormikProps {
  handleSubmit: () => void;
  handleChange: (text: string) => any;
  values: FormValues;
}

// interface FormProps {
//   inputRef: any;
//   onFocus: (isFocus: boolean) => void;
// }

const initialValues: FormValues = {
  full_name: '',
  user_name: '',
  email: '',
  password: '',
};

function Form() {
  const loading = useAppSelector(state => state.user.loading);
  const dispatch = useAppDispatch();

  const {handleSubmit, handleChange, values}: FormikProps = useFormik({
    initialValues,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <View style={styles.form}>
      <FormInput
        onChangeText={handleChange('full_name')}
        value={values.full_name}
        placeholder="Full Name"
      />
      <FormInput
        onChangeText={handleChange('user_name')}
        value={values.user_name}
        placeholder="User Name"
      />
      <FormInput
        onChangeText={handleChange('email')}
        value={values.email}
        placeholder="Email"
      />
      <FormInput
        onChangeText={handleChange('password')}
        value={values.password}
        placeholder="Password"
      />
      <Button
        title={loading === 'pending' ? 'Loading...' : 'Sign up'}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    gap: 14,
  },
});

export default Form;
