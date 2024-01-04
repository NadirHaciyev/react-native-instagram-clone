import ProfileScreen from '@/screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
