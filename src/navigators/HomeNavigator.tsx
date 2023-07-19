import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import {Image} from 'react-native';
import Logo from '@/components/icons/Logo';
import {Text} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageIcon from '@/components/icons/MessageIcon';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Logo width={104} height={30} />,
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              <Icon name="heart-outline" color="white" size={28} />
              <View>
                <MessageIcon />
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                    1
                  </Text>
                </View>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
