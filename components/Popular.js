import {Image} from 'react-native';
import React from 'react';
import { HStack, ScrollView, Text, View, VStack } from 'native-base';


const Popular = () => {
  return (
    <View mt="2">
      <HStack justifyContent="space-between" p="4" alignItems="center"  >
        <Text color="white" fontSize="18" fontWeight="bold">
          Popular singles
        </Text>
        <Text color="white">View all</Text>
      </HStack>
      <ScrollView ml="4" >
        
        <HStack mt="2">
          <Image
            source={require('../assets/images/image2.png')}
            style={{height: 75, width: 75, borderRadius: 20}}
          />
          <VStack justifyContent="center" pl="6">
            <Text color="white" fontWeight="bold" fontSize="16">
              King Of Screens
            </Text>
            <Text color="white">2015 - Easy living</Text>
          </VStack>
        </HStack>
        <HStack mt="2">
          <Image
            source={require('../assets/images/image2.png')}
            style={{height: 75, width: 75, borderRadius: 20}}
          />
          <VStack justifyContent="center" pl="6">
            <Text color="white" fontWeight="bold" fontSize="16">
              King Of Screens
            </Text>
            <Text color="white">2015 - Easy living</Text>
          </VStack>
        </HStack>
        <HStack mt="2">
          <Image
            source={require('../assets/images/image2.png')}
            style={{height: 75, width: 75, borderRadius: 20}}
          />
          <VStack justifyContent="center" pl="6">
            <Text color="white" fontWeight="bold" fontSize="16">
              King Of Screens
            </Text>
            <Text color="white">2015 - Easy living</Text>
          </VStack>
        </HStack>
      </ScrollView>
    </View>
  );
};

export default Popular;
