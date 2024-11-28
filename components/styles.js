// components/styles.js
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {

        backgroundColor: '#ff7700',
        marginTop: 10,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 12,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {

        flexDirection: 'row',  // Arrange the content horizontally (row)
        justifyContent: 'space-between', // Distribute space between the icons and text
        alignItems: 'center', // Vertically center the items
        width: '90%', // Make the container take up full width
    },
    buttonText: {
        fontWeight: "800",
        fontFamily: 'sans-serif-condensed',
        color: 'blue',
        fontSize: 33,
        textAlign: 'center',
        flex: 1, // Allow the text to take up the remaining space
    },
    iconSizeColor: {
        fontSize: 30,
        color: 'purple',
        transform: [
            { rotate: '45deg' }, // Rotates the icon by 45 degrees by default
        ]
    },
    iconSizeColor2: {
        fontSize: 33, // Icon size
        color: 'purple', // Icon color (white in this case)
    },
    sectionHeader: {
        padding: 10,
        borderWidth: 0.6, // Set border width (thickness of the border)
        borderColor: '#000', // Set the border color to black
        borderTopRightRadius: 20,  // Top-left corner
        borderBottomLeftRadius: 20,  // Bottom-right corner
    },
    sectionHeaderText: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#fff', // White text for contrast

    },
    cat: {
        borderRadius: 36,
        marginVertical: 8,
        flexDirection: 'row',  // Horizontal layout
        justifyContent: 'flex-end',  // Align to the right
        padding: 10,
        backgroundColor: '#fad6e5',
        alignItems: 'center',  // Vertically center the content
        width: '100%',  // Take up full width of the container
        borderWidth: 0.7, // Set border width (thickness of the border)
        borderColor: 'grey',

    },
    catName: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: "center"
    },

    scrollContainer: {
        padding: 10,
    },
    shortHairHeader: {
        backgroundColor: 'red',  // Red background for Fire Type
    },
    longHairHeader: {
        backgroundColor: 'gold'  // Yellow background for Lightning Type
    },
    addupdateContainer: {
        padding: 20,
        backgroundColor: "#f6c492",
        flex: 1
    },
    image:{
        width: 200,
        height: 210,
        borderRadius: 27
    },
    addupdatelabels: {
        fontWeight: '300',
        fontFamily: 'Arial',
        marginVertical: 10,
        fontSize: 20
    },
    addupdatebuttons:{
        marginVertical: 10,
    },

    rnPicker: {
        borderWidth: 1,
        borderColor: '#000',
    }


});

export default styles;