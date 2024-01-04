import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {AddCircleIcon, HomeIcon, ReelIcon} from '@/components/icons';
import {gStyles} from '@/constants';

// Stacks
import HomeStack from './HomeStack';
import ExploreStack from './ExploreStack';
import CreateStack from './CreateStack';
import ReelStack from './ReelStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();
function BottomTab() {
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
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon fill={focused ? '#fff' : 'none'} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
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
        name="CreateStack"
        component={CreateStack}
        options={{
          tabBarIcon: () => <AddCircleIcon />,
        }}
      />
      <Tab.Screen
        name="ReelStack"
        component={ReelStack}
        options={{
          tabBarIcon: ({focused}) => (
            <ReelIcon
              size={focused ? 36 : 32}
              color={focused ? 'black' : 'white'}
              strokeWidth={focused ? 1.5 : 2}
              fill={focused ? '#fff' : 'none'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
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
    ...gStyles.flexCenter,
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
});

export default BottomTab;
