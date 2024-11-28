import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, SectionList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { dataSource } from './components/datasource'; // Import dataSource from dataSource.js
import ImageExistCheck from './ImageExistCheck';
import styles from './components/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Awesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    const renderItem = ({ item, index, section }) => {
        let imageName = "https://cats.com/wp-content/uploads/2020/10/" + item.link + "-compressed-1-540x360.jpg";

        return (
            <TouchableOpacity
                style={styles.cat}
                onPress={() =>
                    navigation.navigate('Edit', {
                        index: index,
                        type: section.title,
                        key: item.key,
                        link: item.link
                    })
                }
            >
                <Text style={styles.catName}>{item.key}</Text>
                <ImageExistCheck imageName={item.link} />
            </TouchableOpacity>
        );
    };

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

            {/* Add Cat Button */}
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Add');}}>
                <View style={styles.buttonContent}>
                    <AntDesign name="smileo" style={styles.iconSizeColor} />
                    <Text style={styles.buttonText}>ADD CAT</Text>
                    <Awesome name="dribbble" style={styles.iconSizeColor2} />
                </View>
            </TouchableOpacity>

            {/* SectionList to display Cat data by type */}
            <SectionList
                sections={dataSource}  // Use dataSource here
                keyExtractor={(item) => item.key }  // Unique key for each item
                renderItem={renderItem}  // Render each item using renderItem function
                renderSectionHeader={renderSectionHeader}  // Custom header with conditional background color
                contentContainerStyle={styles.scrollContainer}
            />
            </ImageBackground>
        </View>
    );
}

export default Home;