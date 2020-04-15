import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity  } from 'react-native';

const RestaurantScreen = () => {

    const recipes = [
        { name: 'Roasted Lemon Artichoke and Browned Butter Pasta', today: '49' },
        { name: 'Creamy Roasted Red Pepper Pasta with Grilled Chicken', today: '89' },
        { name: 'Philly Cheesesteak Pasta', today: '57' },
        { name: 'Creamy Chipotle Sweet Potato Penne Pasta', today: '52' },
        { name: 'Bang Bang Shrimp Pasta', today: '2' },
        { name: 'Pasta With Olives, Anchovies, Tomatoes, and Breadcrumbs', today: '54' },
        { name: 'Mexican Corn Pasta', today: '45' },
        { name: 'Chicken Parmesan Pasta', today: '22' },
        { name: 'Bucatini with Winter Pesto and Sweet Potatoes', today: '43' }
    ];

    return (    
                    <FlatList
                        keyExtractor={friend => friend.name}
                data={recipes} 
                renderItem={({ item }) => {
                return <Text style={styles.textStyle}>
                            {item.name} - Today's score {item.today}
                            </Text>
                }} 
              />
            );
}

const styles = StyleSheet.create({

    
});

export default RestaurantScreen;