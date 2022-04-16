import React from 'react';
import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import Header from '../../components/Header';
import Discography from '../../components/Discography';
import Popular from '../../components/Popular';

const Home = () => {
    return (
        <View bg="#121212" h="full" w="full">
            <Header text="F.L.A.M.E"/>
            <Discography />
            <Popular />
        </View>
    )
}

export default Home;