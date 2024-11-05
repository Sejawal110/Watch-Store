import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { fontsize, spacing } from './Constants/Dimensions'
import * as Font from 'expo-font';
import Colors from './Constants/Colors';
import { catgory } from './data/CategoryData';

export default function CategorySlider({selectedCategory, handleUpdateCategory}: {selectedCategory: any, handleUpdateCategory: any }) {

    

   


    const [fonstLoaded] = Font.useFonts({
        'Soul': require('../assets/fonts/Raleway-SemiBold.ttf'),

    })

    if (!fonstLoaded) {
        return;
    }


    return <FlatList
        keyExtractor={(item) => item.id}
        data={catgory} renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() =>handleUpdateCategory(item.name)}>
                <Text style={[styles.sliderTxt, 
                    selectedCategory === item.name && {
                        color: Colors.Purple
                    }
                ]}>{item.name}</Text>

                {
                    selectedCategory === item.name && (
                        <View style={styles.sliderUnderLine} />
                    )
                }

                
            </TouchableOpacity>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={
            <View style={{
                paddingHorizontal: spacing.sm
            }}  />
        }
        
    />
}

const styles = StyleSheet.create({
    sliderTxt: {
        fontSize: 18,
        fontFamily: 'Soul',
        color: Colors.gray,
        marginTop: 25
    },

    sliderUnderLine: {
        borderBottomColor: Colors.Purple,
        borderBottomWidth: 2,
        width: '50%',
        marginTop: spacing.sm
    },

    
})