import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Login from '@/screens/auth/Login';
import Register from '@/screens/auth/Register';
import PasswordReset from '@/screens/auth/PasswordReset';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
}

export default AuthStack;
