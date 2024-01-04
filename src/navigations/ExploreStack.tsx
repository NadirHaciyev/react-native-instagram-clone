import ExploreScreen from '@/screens/ExploreScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();
function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ExploreScreen} />
    </Stack.Navigator>
  );
}

export default ExploreStack;
