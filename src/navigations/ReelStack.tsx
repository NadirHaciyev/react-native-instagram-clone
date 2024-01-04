import ReelsScreen from '@/screens/ReelsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();
function ReelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ReelsScreen} />
    </Stack.Navigator>
  );
}

export default ReelStack;
