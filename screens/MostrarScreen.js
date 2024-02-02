
import { View, Text } from "react-native"; // Importa los componentes básicos de la interfaz de usuario.
import styles from "./styles/GastosStyle"; // Importa estilos personalizados desde GastosStyle.
import AsyncStorage from "@react-native-async-storage/async-storage"; // Permite almacenar datos de manera local.
import { useEffect, useState } from "react"; // ¡Trae a la fiesta los hooks de React!

const MostrarScreen = ({ navigation }) => {

    const [storedUsername, setstoreUsername] = useState('');
    const [storedEmail, setStoredEmail] = useState('');

    const handleLogin = async () => {
        try {
            // Intenta obtener los datos del almacenamiento local y actualizar los estados.
            const username = await AsyncStorage.getItem("username");
            const email = await AsyncStorage.getItem("email");
            setstoreUsername(username);
            setStoredEmail(email);
        } catch (error) {
            // Si algo sale mal, no entres en pánico, solo registra el error.
            console.log(error);
        }
    }

    useEffect(() => {
        handleLogin()
    }, [])

    // El renderizado del componente: una elegante pantalla para mostrar los datos.
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Usuarios </Text>
            <Text style={styles.title}>{storedUsername}</Text>
            <Text style={styles.title}>{storedEmail}</Text>
        </View>
    );
}


export default MostrarScreen;