// Importaciones de React y React Native para sazonar nuestra app:
import { useState } from "react"; // El useState, para mantener las cosas frescas y actualizadas.
import { Button, View, Text, TextInput } from "react-native"; // Los ingredientes básicos de la interfaz de usuario.
import styles from "./styles/AddStyle"; // Traemos los estilos desde AddStyle para que todo se vea apetitoso.
import AsyncStorage from "@react-native-async-storage/async-storage"; // El lugar secreto donde guardamos nuestras recetas (o datos).


const AddScreen = ({ navigation }) => {
    // Ingredientes (estados) para nuestra receta de registro de usuario:
    const [username, setUsername] = useState(""); // Para el nombre de usuario.
    const [password, setPassword] = useState(""); // No te olvides de la contraseña.
    const [email, setEmail] = useState(""); // Y el email, ¡esencial!

    // La función handleRegister se encarga de mezclar todo y guardarlo:
    const handleRegister = async () => {
        try {
            // Guarda los ingredientes en el almacenamiento local.
            await AsyncStorage.setItem("username", username);
            await AsyncStorage.setItem("password", password);
            await AsyncStorage.setItem("email", email);
            console.log("guardado correctamente"); // ¡Listo! El registro está en el horno.
        } catch (error) {
            // Si algo se quema, aquí te enterarás.
            console.log(error);
        }
    };
    
    // El montaje de los componentes de nuestra interfaz:
    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Crear Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}// Aquí cambia el nombre de usuario.
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"

                secureTextEntry={true}// ¡Ojo! Que no vean tu contraseña.
                value={password}
                onChangeText={setPassword}// Cambia la contraseña aquí.
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail} // Aquí va el email.
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
}
// Exportamos nuestro platillo principal para que pueda ser servido en otros lugares.
export default AddScreen;