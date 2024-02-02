import React, { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import styles from "./styles/DeleteStyle"; // Asegúrate de tener tus estilos adecuados.
import AsyncStorage from "@react-native-async-storage/async-storage";

const DeleteScreen = ({ navigation }) => {
    const [usernameToDelete, setUsernameToDelete] = useState("");

    const handleDelete = async () => {
        try {
            // Verificamos si el usuario existe antes de intentar eliminarlo
            const storedUsername = await AsyncStorage.getItem("username");

            if (storedUsername === usernameToDelete) {
                // Elimina los datos del usuario del almacenamiento local.
                await AsyncStorage.removeItem("username");
                await AsyncStorage.removeItem("password");
                await AsyncStorage.removeItem("email");
                console.log("Usuario eliminado correctamente");
            } else {
                console.log("El usuario no existe");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Eliminar Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario que quieres eliminar"
                placeholderTextColor="#888"
                value={usernameToDelete}
                onChangeText={setUsernameToDelete}
            />
            <Button title="Eliminar" onPress={handleDelete} />
        </View>
    );
};

export default DeleteScreen;
