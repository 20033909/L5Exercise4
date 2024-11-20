import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, SectionList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { dataSource } from './components/datasource'; // Import dataSource from dataSource.js
import styles from './components/styles';
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {

    const renderItem = ({ item }) => (
        <View style={styles.cat}>

            <Text style={styles.catName}>{item.key}</Text>

            <Image source={{ uri: item.link }} style={styles.catImage} />
        </View>
    );

    // Render the section header with a conditional background color
    const renderSectionHeader = ({ section: { title } }) => {
        let headerStyle = styles.sectionHeader; // Default section header style

        // Set background color based on the title of the section
        if (title === 'Shorthair') {
            headerStyle = { ...headerStyle, ...styles.shortHairHeader };
        } else if (title === 'Longhair') {
            headerStyle = { ...headerStyle, ...styles.longHairHeader };
        }

        return (
            <View style={headerStyle}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://images.pexels.com/photos/7419427/pexels-photo-7419427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.backgroundImage}
            >

            <StatusBar style="auto" />

            {/* Add Pokemon Button */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <View style={styles.buttonContent}>
                    <Icon name="shoppingcart" style={styles.iconSizeColor} />
                    <Text style={styles.buttonText}>ADD CAT</Text>
                    <Icon name="shoppingcart" style={styles.iconSizeColor} />
                </View>
            </TouchableOpacity>

            {/* SectionList to display Pokémon data by type */}
            <SectionList
                sections={dataSource}  // Use dataSource here
                keyExtractor={(item, index) => item.key + index}  // Unique key for each item
                renderItem={renderItem}  // Render each item using renderItem function
                renderSectionHeader={renderSectionHeader}  // Custom header with conditional background color
                contentContainerStyle={styles.scrollContainer}
            />
            </ImageBackground>
        </View>
    );
}