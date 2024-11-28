import React, { useState } from 'react';
import { dataSource } from './components/datasource';
import {TextInput, View, Text, Button, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './components/styles';

const Add = ({ navigation }) => {
    const [breed, setBreed] = useState('');
    const [imageName, setImageName] = useState('');
    const [type, setType] = useState('Shorthair');

    return (
        <View style={styles.addupdateContainer}>
            <RNPickerSelect
                style={styles.rnPicker}
                value={type}
                onValueChange={(value) => setType(value)}  // Fixed syntax error here
                items={[
                    { label: 'Shorthair', value: 'Shorthair' },
                    { label: 'Longhair', value: 'Longhair' },
                ]}
            />

            <Text style={styles.addupdatelabels}>Breed:</Text>
            <TextInput
                style={{ borderWidth: 1, backgroundColor: '#fff' }}
                onChangeText={(value) => setBreed(value)}
                value={breed}
            />

            <Text style={styles.addupdatelabels}>Image Name:</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 50, backgroundColor: '#fff'}}
                onChangeText={(value) => setImageName(value)}
                value={imageName}
            />

            <Button
                title="Submit"
                onPress={() => {
                    // Create the new item object
                    let item = { key: breed, link: imageName };
                    let index = 0;

                    // Determine the section based on the type selected
                    if (type === 'Longhair') {
                        index = 1;  // Longhair category
                    }

                    // Add the new item to the appropriate section
                    dataSource[index].data.push(item);

                    // Navigate back to the Home screen
                    navigation.navigate('Home');

                }}
                color="salmon"
            />
            <Image
                source={require('./assets/addpagecat.png')}  // Provide the path to your PNG image
                style={{
                    position: 'absolute',
                    bottom: 18,  // Adjust bottom spacing
                    right: 50,   // Adjust left spacing
                    width: 120,   // Set width of the image
                    height: 120,  // Set height of the image
                    resizeMode: 'contain'  // Optional: maintain aspect ratio
                }}
            />
        </View>
    );
};

export default Add;