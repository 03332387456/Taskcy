import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import rncStyles from 'rncstyles';
import Button from '../Components/Buttons';


const ThirdScreen = ({ navigation }: any) => {
    return (
        <>
            <Image
                style={[rncStyles.h50, rncStyles.w100]}
                source={{ uri: 'data:image/jpeg;base64,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' }}
            />
            <View style={[rncStyles.border, rncStyles.bgWhite, rncStyles.h75, rncStyles.w100]}>
                <Text style={[rncStyles.fs3, rncStyles.bgWhite, { color: "#CC7DFF" }, rncStyles.p1]}>Task Management</Text>
                <Text style={[rncStyles.fs1, rncStyles.bgWhite, { color: "#000" }, rncStyles.textBold, rncStyles.p1]}>Work more Structured abd Organaized</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Task Quickly") }}
                    style={[rncStyles.btn, rncStyles.f3, rncStyles.p2, rncStyles.my2, { color: "#000", backgroundColor: "#CC7DFF" },]}>
                    <Text style={[rncStyles.f3, rncStyles.textBold, rncStyles.textCenter]}>Next</Text></TouchableOpacity>
            </View>

        </>


    );
};



export default ThirdScreen;
