import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, Image} from 'react-native';
import {dataSource} from "./components/datasource";
import styles from "./components/styles";


const Edit = ({route, navigation}) => {
    const [breed, setBreed] = useState(route.params.key);
    const [imageName, setImageName] = useState(route.params.link);

    return (
        <View style={styles.addupdateContainer}>
            <Text style={styles.addupdatelabels}>Breed:</Text>
            <TextInput
                value={breed}
                style={{ borderWidth: 1, backgroundColor: '#fff' }}
                onChangeText={(value) => setBreed(value)}

            />
            <Text style={styles.addupdatelabels}>Image Name:</Text>
            <TextInput
                value={imageName}
                style={{ borderWidth: 1, backgroundColor: '#fff' }}
                onChangeText={(value) => setImageName(value)}

            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 50, flex: 1, marginRight: 10 }}>
                    <Button
                        color="salmon"
                        title="SAVE"
                        onPress={() => {
                            let indexnum = 0;
                            if(route.params.type === "Longhair") {
                                indexnum = 1;
                            }
                            dataSource[indexnum].data[route.params.index].key = breed;
                            dataSource[indexnum].data[route.params.index].link = imageName;
                            navigation.navigate('Home');
                        }}
                        />
                </View>
                <View style={{ marginTop: 50, flex: 1 }}>
                    <Button
                        color="salmon"
                        title="DELETE"
                        onPress={() => {
                            let indexnum = 0;
                            if(route.params.type === "Longhair") {
                                indexnum = 1;
                            }
                            Alert.alert("Are you sure?", '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        dataSource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                    }
                                },
                                {text: 'No'}
                            ]);
                        }}
                    />
                </View>
            </View>
            <Image
                source={require('./assets/editpagecat.png')}  // Provide the path to your PNG image
                style={{
                    position: 'absolute',
                    bottom: 60,  // Adjust bottom spacing
                    right: 50,   // Adjust right spacing
                    width: 120,   // Set width of the image
                    height: 120,  // Set height of the image
                    resizeMode: 'contain'  // Optional: maintain aspect ratio
                }}
            />
        </View>
    );

};

export default Edit;