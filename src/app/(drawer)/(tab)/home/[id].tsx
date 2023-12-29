import {Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { drawerItems } from 'src/platform/drawer/constance';

export default function details() {
  const {id} = useLocalSearchParams();

  

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Id: {id}</Text>
    </View>
  );

}

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  // const posts = await getPosts();
  
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  // return posts.map(post => ({ id: post.id }));

  return drawerItems.flatMap(d=>[{id:d.id}, ...d.items.map(it=>({id:it.id}))]);
}

