import {NavigationContainer} from '@react-navigation/native';
import useAppSelector from '@/hooks/useAppSelector';

// Stacks
import AuthStack from './AuthStack';
import RootStack from './RootStack';

function RootNavigator() {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <RootStack />}
    </NavigationContainer>
  );
}

export default RootNavigator;
