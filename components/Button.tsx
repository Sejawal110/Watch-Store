import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import Colors from './Constants/Colors';
import { fontsize, spacing } from './Constants/Dimensions';
import * as Font from 'expo-font';

export default function Button() {

    const [fonstLoaded] = Font.useFonts({
        'Soul': require('../assets/fonts/Raleway-Bold.ttf'),
        'Medium': require('../assets/fonts/Raleway-Medium.ttf')
      })
    
      if (!fonstLoaded) {
        return;
      }



  return (
    <View style={styles.container} >
      <LinearGradient colors={[ '#8743FF', '#4136F1']} 
      start={{
        x: 0,
        y: 0.5
      }} 
      end={{
        x: 1,
        y: 0
      }}
      style={styles.addToCartButton}
      >
      <Feather name="shopping-cart" size={24} color={Colors.bacground} />
      <Text style={styles.addToCartTxt}>Add to Cart | $498.76</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100

    },

    addToCartTxt: {
        color: Colors.bacground,
        fontFamily: 'Soul',
        fontSize: fontsize.md
    },

    addToCartButton: {
        width: '90%',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: spacing.md,
        gap: spacing.sm,
        position: 'relative',
        bottom: 90
    },
})