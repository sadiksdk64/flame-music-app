import {Modal, Pressable, ScrollView, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Image} from 'react-native';
import * as Progress from 'react-native-progress';

const MusicPlayer = ({open, setOpen}) => {
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
      <View
        w="full"
        h="full"
        style={{marginBottom: 0, marginTop: 0}}
        bg="#1f1f1f"
        borderBottomRadius="40">
        <Modal.Body>
          <View>
            <Pressable onPress={() => setOpen(false)}>
              <View>
                <Image
                  source={require('../assets/images/closeline.png')}
                  style={{
                    height: 6,
                    width: 60,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              </View>
            </Pressable>
            <View mt="2">
              <Image
                source={require('../assets/images/favorite.png')}
                style={{
                  height: 35,
                  width: 35,
                  marginLeft: 'auto',
                  marginRight: 0,
                }}
              />
            </View>
            <View mt="12">
              <ScrollView horizontal={true} justifySelf="center">
                <Image
                  source={require('../assets/images/image1.png')}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 20,
                  }}
                />
                <Image
                  source={require('../assets/images/image1.png')}
                  style={{
                    height: 250,
                    width: 250,
                    borderRadius: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 20,
                  }}
                />
                <Image
                  source={require('../assets/images/image1.png')}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 20,
                  }}
                />
              </ScrollView>
            </View>
            <View alignItems="center">
              <Text color="white" fontWeight="bold" fontSize="22" mt="5">
                Eternal Chains
              </Text>
              <Text color="white" fontSize="16" mt="1">
                Animal
              </Text>
            </View>
            <View mt="12" mb="12">
              <Progress.Bar
                progress={0.6}
                width={null}
                color="#27D999"
                unfilledColor="#1b513e"
                borderWidth={0}
              />
              <View flexDirection="row" justifyContent="space-between">
                <Text color="white" fontSize="16" mt="1" >2:53</Text>
                <Text color="white" fontSize="16" mt="1" >4:47</Text>
              </View>
            </View>

            <View
              alignItems="center"
              flexDirection="row"
              justifyContent="space-around">
              <Image
                source={require('../assets/images/shuffle.png')}
                style={{height: 30, width: 30}}
              />
              <Image
                source={require('../assets/images/previous.png')}
                style={{height: 30, width: 30}}
              />
              <View bg="white" p="5" borderRadius="40">
                <Image
                  source={require('../assets/images/pause.png')}
                  style={{height: 30, width: 30}}
                />
              </View>
              <Image
                source={require('../assets/images/next.png')}
                style={{height: 30, width: 30}}
              />
              <Image
                source={require('../assets/images/repeat.png')}
                style={{height: 30, width: 30}}
              />
            </View>
          </View>
        </Modal.Body>
      </View>
    </Modal>
  );
};

export default MusicPlayer;
