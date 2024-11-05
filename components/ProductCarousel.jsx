import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { spacing } from './Constants/Dimensions';
import Colors from './Constants/Colors';



const screenWidth = Dimensions.get('window').width;

export default function ProductCarousel({ images }) {

    const [activeSlider, setActiveSlider] = useState(0);

    const OnChangeRef = useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveSlider(viewableItems.viewableItems[0].index)
        }

    })

    return (
        <>
        <FlatList
            data={images}
            
            renderItem={({item}) => {
                return (
                    <View style={styles.productImagesWrapper}>
                        <Image source={{ uri: item }} style={styles.productImage} />
                    </View>
                )
            }}
            
            horizontal
            onViewableItemsChanged={OnChangeRef.current}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment='center'
            snapToInterval={screenWidth}
            decelerationRate={'fast'}
            
            
        />

        <View style={styles.pagination}>
           {
            images.map((_, index) => (
                <View 
                key={index}
                style={[styles.dot, index === activeSlider && {
                    width: 20,
                    borderRadius: 32
                },

                {
                    backgroundColor: index === activeSlider ? Colors.Purple : Colors.gray
                }
            
            ]} />
            ))
           }
        </View>



        </>
    )
}

const styles = StyleSheet.create({
    productImagesWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        paddingTop: spacing.sm
    },
    productImage: {
        height: 350,
        width: 350,
        resizeMode: 'cover',
        borderRadius: 10
    },

    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: spacing.md
    },
    dot: {
        width: 10,
        height:10,
        borderRadius: 5,
        marginHorizontal: spacing.xs,
        backgroundColor: Colors.gray
    },
})