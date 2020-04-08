import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
const friends = [
    { name: 'Friend #1', age: '49' },
    { name: 'Friend #2', age: '89' },
    { name: 'Friend #3', age: '57' },
    { name: 'Friend #4', age: '52' },
    { name: 'Friend #5', age: '2' },
    { name: 'Friend #6', age: '54' },
    { name: 'Friend #7', age: '45' },
    { name: 'Friend #8', age: '22' },
    { name: 'Friend #9', age: '43' }
];
    return (
			<FlatList
				keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item }) => {
        return <Text style={styles.textStyle}>
					{item.name} - Age {item.age}
					</Text>
        }} 
      />
    );
}

const styles = StyleSheet.create({
textStyle:{
	marginVertical:50
}

});

export default ListScreen;