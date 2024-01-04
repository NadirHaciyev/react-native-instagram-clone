import {useRef} from 'react';
import {StyleSheet, View, TextInput, Keyboard} from 'react-native';
import {useFormik} from 'formik';
import useAppDispatch from '@/hooks/useAppDispatch';

import {useAuth} from '@/context/AuthContext';
import FormInput from '@/components/common/Inputs/FormInput';
import {login} from '@/store/userSlice';
import Button from '@/components/common/Button';
import useAppSelector from '@/hooks/useAppSelector';

type FormValues = {
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
  email: '',
  password: '',
};

function Form() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.user.loading);

  const {handleSubmit, handleChange, values}: FormikProps = useFormik({
    initialValues,
    onSubmit: values => {
      dispatch(login(values));
      console.log(values);
    },
  });

  return (
    <View style={styles.form}>
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
        title={loading === 'pending' ? 'Loading...' : 'Log in'}
        onPress={handleSubmit}
      />
      <Button title="Forgot password?" type="ghost" onPress={() => {}} />
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
