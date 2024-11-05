import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './Constants/Colors'
import { spacing } from './Constants/Dimensions'
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';



export default function ProductCard({item}: {item: any}) {

    const navigation: any = useNavigation();

    const [fonstLoaded] = Font.useFonts({
        'Soul': require('../assets/fonts/Raleway-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Raleway-Medium.ttf'),

    })

    if (!fonstLoaded) {
        return;
    }

    const productDetailsScreenHandler = () => {
        navigation.navigate('Product-Details', {item})
    }


  return (
    <TouchableOpacity style={styles.container} onPress={productDetailsScreenHandler} >
        <View style={styles.imgContainer}>
            <Image 
            source={{uri:item.image }} 
            style={styles.imgStyles}
            />
        </View>

        <View style={styles.contentContainer}>
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: Colors.bacground,
        elevation: 6,
        borderRadius: 12,
        marginVertical: spacing.sm
    },

    imgContainer: {
        borderRadius: 12,
        backgroundColor: '#C5D3E8',
        margin: spacing.md, 
    },
    imgStyles: {
        height: 130,
        width: '100%',
        
        resizeMode: 'center',
    },

    contentContainer: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md
    },
    name: {
        color: Colors.black,
        fontSize: 17,
        fontFamily: 'Soul'
    },
    brand: {
        color: Colors.gray,
        fontSize: 16,
        fontFamily: 'Medium',
        paddingVertical: spacing.xs
    },
    price: {
        color: Colors.Purple,
        fontSize: 19,
        fontFamily: 'Medium',
    },
})