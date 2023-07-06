import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from "@expo/vector-icons";


export default function Header2({ title, type, navigation }) {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <Ionicons
                    name='chevron-back'
                    size={37}>
                </Ionicons>
                <Text>{type}</Text>
            </TouchableOpacity>

            <Text style={{ alig: 'center' }}>{title}</Text>
            <Text style={{ width: 50 }}></Text>
        </View>
    )
}