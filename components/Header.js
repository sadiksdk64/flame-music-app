import React from 'react';
import { Text, View } from 'native-base';
import {Image} from 'react-native';

const Header = ({text}) => {
    return (
        <View>
            <Image source={require('./../assets/images/cover.jpeg')} style={{height:300}} />
            <View position="absolute" justifyContent="flex-end" h="300" pl="4" pb="8">
                <Text  color="white" fontSize="26" fontWeight="bold">{text}</Text>
                <View alignItems="flex-start">
                    <View borderRadius="30" pl="4" pr="4" p="1" bg="#27D999" >
                        <Text>Subscribe</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header;