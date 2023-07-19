import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Screens
import ExploreScreen from '@/screens/ExploreScreen';
import CreatePostScreen from '@/screens/CreatePostScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import ReelsScreen from '@/screens/ReelsScreen';

// Navigators
import HomeNavigator from './HomeNavigator';

// Icons
import HomeIcon from '@/components/icons/HomeIcon';
import ReelIcon from '@/components/icons/ReelIcon';
import AddCircleIcon from '@/components/icons/AddCircleIcon';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              size={24}
              stroke="white"
              strokeWidth={2}
              fill={focused ? '#fff' : 'none'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'search' : 'search-outline'}
              color="white"
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="create-post"
        component={CreatePostScreen}
        options={{
          tabBarIcon: () => (
            <AddCircleIcon stroke="white" size={28} strokeWidth={2} />
          ),
        }}
      />
      <Tab.Screen
        name="reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ReelIcon
              size={focused ? 36 : 32}
              stroke={focused ? 'black' : 'white'}
              strokeWidth={focused ? 1.5 : 2}
              fill={focused ? '#fff' : 'none'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.profileContainer,
                {backgroundColor: focused ? 'white' : 'transparent'},
              ]}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-19/348245583_9183207558417423_375795560488454375_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=In1_3BCr3tgAX-soD4L&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfByG2Tig7hpu4Wdi9P7gEz7PZLlEmZVM2O1HbeJXFT4gg&oe=64BB0BEB&_nc_sid=ee9879',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  createPostContainer: {borderWidth: 2, borderColor: 'white', borderRadius: 7},

  profileContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 32,
  },
});

export default RootNavigator;
