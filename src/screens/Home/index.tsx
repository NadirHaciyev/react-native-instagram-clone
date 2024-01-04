import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Stories from '@/components/home/Stories';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import {logout} from '@/store/userSlice';
import NavigationBar from '@/components/core/NavigationBar';

function HomeScreen() {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.main}>
      <NavigationBar />
      <Stories />

      <Button title="logout" onPress={() => dispatch(logout())} />

      <Text style={{color: 'white'}}>{user?.full_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default HomeScreen;
