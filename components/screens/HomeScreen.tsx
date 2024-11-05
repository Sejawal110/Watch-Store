import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Constants/Colors'
import { spacing, fontsize, iconSizes } from '../Constants/Dimensions'
import * as Font from 'expo-font';
import CategorySlider from '../CategorySlider';
import ProductCard from '../ProductCard';
import { smartWatches } from '../data/SmartWatchData';
import { Headphones } from '../data/Headphones';
import {boatWatches} from '../data/BoatWatches';
import { onePlus } from '../data/OnePlusWatches';
import { XiaomiWatches } from '../data/XiaomiWatches';
import { NoiseWatches } from '../data/NoiseWatches';
import { FastrackWatches } from '../data/FastrackWatches';


export default function HomeScreen() {

  const [data, setData] = useState(smartWatches);
  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');


  const handleUpdateCategory = (newCategroy: any) => {
    if (newCategroy === 'Smart Watch') {
      setData(smartWatches); 
    }
    else if (newCategroy === 'Headphones') {
      setData(Headphones);
    }

    else if (newCategroy === 'boAt') {
      setData(boatWatches)
    }

    else if (newCategroy === 'OnePlus') {
      setData(onePlus)
    }

    else if (newCategroy === 'Xiaomi') {
      setData(XiaomiWatches);
    }

    else if (newCategroy === 'Noise') {
      setData(NoiseWatches);
    }

    else if (newCategroy === 'Fastrack') {
      setData(FastrackWatches);
    }


    setSelectedCategory(newCategroy)
  }


  const [fonstLoaded] = Font.useFonts({
    'Soul': require('../../assets/fonts/Raleway-Bold.ttf'),
    'Medium': require('../../assets/fonts/Raleway-Medium.ttf')
  })

  if (!fonstLoaded) {
    return;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Your suitable watch now </Text>


      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.mainInputContainer}>
              <View style={styles.inputWrapper}>
                <Image
                  style={styles.searchIcon}
                  source={require('../../assets/images/search.png')}
                />
                <TextInput
                  placeholder='Search about Products'

                  style={styles.inputField} />
              </View>
              <View style={styles.categoryContainer}>
                <Image
                  style={styles.searchIcon}
                  source={require('../../assets/images/category.png')}
                />
              </View>
            </View>
            <CategorySlider selectedCategory={selectedCategory} handleUpdateCategory={handleUpdateCategory}  />
          </>
        }
        data={data} renderItem={({ item, index }) => (
          <ProductCard item={item} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 500,
          padding: spacing.md
        }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bacground,
    
  },

  header: {
    fontSize: fontsize.xxl,
    color: Colors.black,
    fontFamily: 'Soul',
    padding: spacing.md
  },

  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.phtext,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 44,
    paddingHorizontal: spacing.md
  },
  searchIcon: {
    height: iconSizes.md,
    width: iconSizes.md,
  },

  inputField: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontsize.md,
    fontFamily: 'Medium'
  },
  categoryContainer: {
    paddingHorizontal: 8,
    
  },
})