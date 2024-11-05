import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header'
import ProductCarousel from '../../components/ProductCarousel'
import { fontsize, iconSizes, spacing } from '../Constants/Dimensions';
import Colors from '../Constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import Button from '../Button';





const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2'
  },

  {
    colorName: 'Bright Orange',
    colorValue: '#F25745'
  },

  {
    colorName: 'Black',
    colorValue: '#000000'
  },
]


export default function ProductDetailScreen() {
  const item = useRoute().params?.item;

  const [fonstLoaded] = Font.useFonts({
    'Soul': require('../../assets/fonts/Raleway-Bold.ttf'),
    'Medium': require('../../assets/fonts/Raleway-Medium.ttf'),
    'Semi': require('../../assets/fonts/Raleway-SemiBold.ttf'),
    'Regular': require('../../assets/fonts/Raleway-Regular.ttf')
  });

  const [selectedColor, setSelectedColor] = useState('')
  const [selectedTab, setSelectedTab] = useState('Details')

  if (!fonstLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} >
      
      <ProductCarousel images={item.images} />
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>


        <View style={styles.ratingWrapper}>
          <AntDesign name="star" size={iconSizes.sm} color={Colors.yellow} />
          <Text style={styles.rating}>4.8</Text>
        </View>

      </View>

      <View style={styles.colorContainer}>
        <Text style={styles.colorHeader}>Colors</Text>
        
          <FlatList data={colorsData} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedColor(item.colorValue)} style={[styles.selectColor,
            item.colorValue === selectedColor && {
            borderColor: Colors.Purple
            }
            ]}>
              <View style={[styles.circleColor, {
                backgroundColor: item.colorValue
              }]} 
              
              />
              <Text style={styles.colorText}>{item.colorName}</Text>

            </TouchableOpacity>
          )} 
          horizontal
          ItemSeparatorComponent={() => <View style={{width: spacing.md}} />}
          />
        </View>

        <View style={styles.detailsReviewTabs}>
          <TouchableOpacity onPress={() => {setSelectedTab('Details')}}>
            <Text style={[styles.tabText, selectedTab === 'Details' && {color: Colors.Purple} ]}>Details</Text>
            {selectedTab === 'Details' && <View style={styles.underline} /> }
            
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {setSelectedTab('Review')}}>
            <Text style={[styles.tabText, selectedTab === 'Review' && {color: Colors.Purple}]}>Review </Text>
            {
              selectedTab === 'Review' &&  <View style={styles.underline} />
            }
           
          </TouchableOpacity>
        </View>

        <Text style={styles.detailsContent}>
          {selectedTab === 'Details' ? item.details: item.review}
        </Text>
        </ScrollView>

       <Button />
        
        
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: Colors.bacground
  },

  titleContainer: {
    flexDirection: 'row',
  },

  titleWrapper: {
    flex: 1
  },
  title: {
    fontFamily: 'Soul',
    color: Colors.black,
    fontSize: fontsize.lg
  },
  brand: {
    fontFamily: 'Medium',
    color: Colors.gray,
    fontSize: fontsize.md,
    paddingVertical: spacing.sm
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: Colors.bg,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md
  },
  rating: {
    color: Colors.gray,
    fontFamily: 'Medium',
    fontSize: fontsize.md
  },

  colorContainer: {
  paddingTop: 1
  },
  colorHeader: {
    fontSize: fontsize.lg,
    fontFamily: 'Semi',
    color: Colors.black,
    paddingBottom: spacing.md
  },
  
  selectColor: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: Colors.Purple,
    borderRadius: spacing.md / 2,
  },

  colorText: {
    fontSize: 14,
    fontFamily: 'Medium',
    color: Colors.black
  },

  detailsReviewTabs: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    gap: spacing.lg
  },

  tabText: {
    fontSize: fontsize.md,
    fontFamily: 'Medium',
    color: Colors.gray
  },

  underline: {
    borderBottomColor: Colors.Purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.xs
  },

  detailsContent: {
    color: Colors.gray,
    fontFamily: 'Regular',
    fontSize: fontsize.md,
    paddingVertical: spacing.xs,
    paddingBottom: 200
  },

 

})