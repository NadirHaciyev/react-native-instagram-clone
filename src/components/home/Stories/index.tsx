import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Story from './Story';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Nadir adsf asdf  asdf',
    hasSharing: false,
    profile_image:
      'https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-19/348245583_9183207558417423_375795560488454375_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=In1_3BCr3tgAX-soD4L&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfByG2Tig7hpu4Wdi9P7gEz7PZLlEmZVM2O1HbeJXFT4gg&oe=64BB0BEB&_nc_sid=ee9879',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Ziyaddin',
    hasSharing: true,
    profile_image:
      'https://instagram.fgyd20-2.fna.fbcdn.net/v/t51.2885-19/292077748_715036829560927_8713408740059657637_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hWTR6uz9jOAAX_MbrCW&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDn9yjb7IHiiBbgNeHzThsCGoQ69_i7n467Fx7Ja2S6Yg&oe=64BD5A3B&_nc_sid=8b3546',
  },
  {
    id: '3ac68afc-c655-48d3-a4f8-fbd91aa97f63',
    name: 'Kamal',
    hasSharing: true,
    profile_image:
      'https://instagram.fgyd20-2.fna.fbcdn.net/v/t51.2885-19/195813663_482981322973680_5963846433184005492_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Jv-6pf2tyAgAX-Kzg9C&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA20xFkdVpj6-vtkMbDDf0bLyabiKP1yuUDGban1H2CEQ&oe=64BC2FD4&_nc_sid=8b3546',
  },
  {
    id: '3ac68afc-c655-88d3-a4f8-fbd91aa97f63',
    name: 'Clark',
    hasSharing: true,
    profile_image:
      'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=ARUhzX2WTD4AX-S-h4F&edm=AAAAAAABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfA40MHh8d0jN1sjmy-fEZAvcxbmJGfwbfgr4KOHjJIsdw&oe=64BD35CF',
  },
  {
    id: '3ac68afc-c655-48d3-a4f8-fbd91aa97563',
    name: 'Elvar',
    hasSharing: true,
    profile_image:
      'https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-19/14727608_241864912883201_8332615305930997760_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=M9HXwFQxTjQAX9pg81s&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfD3hKy_byeBSgpBiQn31PmfLGk2XyYt8WYeYxqIqIHNMQ&oe=64BC1F1C&_nc_sid=c9086e',
  },
  {
    id: '3ac68afc-t655-88d3-a4f8-fbd91aa97f63',
    name: 'Instagram',
    hasSharing: true,
    profile_image:
      'https://instagram.fgyd20-1.fna.fbcdn.net/v/t51.2885-19/281440578_1088265838702675_6233856337905829714_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgyd20-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=mjyaPHgLPKkAX-WvF5J&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDCzViC8SP7buDFf4A0LJ0nMk9-rKneOEfWxA6r_VRpzw&oe=64BCFDD8&_nc_sid=b41fef',
  },
];

function Stories() {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({item}) => (
          <Story
            hasSharing={item.hasSharing}
            image={item.profile_image}
            name={item.name}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
}

export default Stories;
