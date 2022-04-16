import React,{useState} from 'react';
import {Image, NativeModules} from 'react-native';
import { Button, HStack, Modal, Pressable, ScrollView, Text, View } from 'native-base';
import MusicPlayer from './MusicPlayer';

const Discography = () => {
  const { MusicModule } = NativeModules;
  const [open, setOpen] = useState(false);
  const openModal = () => {
    MusicModule.playSong();
    console.log("modal open")
    setOpen(true);
  };
  return (
    <View mt="2">
      <HStack justifyContent="space-between" p="4" alignItems="center">
          <HStack alignItems="center">
            <Image source={require('../assets/images/music.png')} style={{height: 20, width: 20, borderRadius: 20}} />
            <Text color="white" fontSize="18" fontWeight="bold" pl="2">
            Discography
            </Text>
          </HStack>
    
        <Text color="white">View all</Text>
      </HStack>
      <ScrollView horizontal={true} flexDirection="row" mt="1">
        
        <View rounded="xl" ml="4"  >
          <Pressable onPress={() => openModal()}>
          <Image
            source={require('../assets/images/image1.png')}
            style={{height: 175, width: 150, borderRadius: 20}}
          />
          </Pressable>
          <Text mt="1" color="white" fontWeight="bold">
            Paint It
          </Text>
          <Text color="white" fontWeight="300">
            2021
          </Text>
          
        </View>
        <View rounded="xl" ml="4">
          <Image
            source={require('../assets/images/image1.png')}
            style={{height: 175, width: 150, borderRadius: 20}}
          />
          <Text mt="1" color="white" fontWeight="bold">
            Paint It
          </Text>
          <Text color="white" fontWeight="300">
            2021
          </Text>
        </View>
        <View rounded="xl" ml="4">
          <Image
            source={require('../assets/images/image1.png')}
            style={{height: 175, width: 150, borderRadius: 20}}
          />
          <Text mt="1" color="white" fontWeight="bold">
            Paint It
          </Text>
          <Text color="white" fontWeight="300">
            2021
          </Text>
        </View>
      </ScrollView>


      <MusicPlayer open={open} setOpen={setOpen}/>
      

    </View>
  );
};

export default Discography;
