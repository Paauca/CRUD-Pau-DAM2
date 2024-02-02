import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        width: 300,
        margin: 20,
        fontFamily: 'Arial',
    },
    input: {
        fontWeight: 'bold',
        color: '#e74c3c',
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
        color: '#c0392b',
        textAlign: 'center',
    },
});

export default styles;
