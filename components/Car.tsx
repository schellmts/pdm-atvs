import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface CarProps {
        car: string,
        brand: string,
        hp: number,
    }

export default function Car({car, brand, hp}: CarProps) {
    return (
        <View>
            <Text>Car: {car}</Text>
            <Text>Brand: {brand}</Text>
            <Text>Hp: {hp}</Text>
        </View>
    );
}

