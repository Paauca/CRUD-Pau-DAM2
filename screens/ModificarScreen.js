import React, { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import styles from "./styles/ModificarStyle"; // Asegúrate de tener tus estilos adecuados.
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModificarScreen = ({ navigation }) => {
    const [usernameToModify, setUsernameToModify] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleModify = async () => {
        try {
            // Verificamos si el usuario existe antes de intentar modificarlo
            const storedUsername = await AsyncStorage.getItem("username");

            if (storedUsername === usernameToModify) {
                // Modifica los datos del usuario en el almacenamiento local.
                await AsyncStorage.setItem("password", newPassword);
                await AsyncStorage.setItem("email", newEmail);
                console.log("Usuario modificado correctamente");
            } else {
                console.log("El usuario no existe");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Modificar Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario a modificar"
                placeholderTextColor="#888"
                value={usernameToModify}
                onChangeText={setUsernameToModify}
            />
            <TextInput
                style={styles.input}
                placeholder="Nueva Contraseña"
                placeholderTextColor="#888"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nuevo Correo electrónico"
                keyboardType="email-address"
                placeholderTextColor="#888"
                value={newEmail}
                onChangeText={setNewEmail}
            />
            <Button title="Modificar Usuario" onPress={handleModify} />
        </View>
    );
};

export default ModificarScreen;
