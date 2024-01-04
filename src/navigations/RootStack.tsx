import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import MessagesScreen from '@/screens/Chat/MessagesScreen';
import ChatScreen from '@/screens/Chat';
import {fetchMeAndUpdate} from '@/store/userSlice';
import useAppDispatch from '@/hooks/useAppDispatch';

const Stack = createNativeStackNavigator();
function RootStack() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMeAndUpdate);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
