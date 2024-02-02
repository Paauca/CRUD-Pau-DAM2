// Importamos algunos componentes mágicos de React Native
import { Button, View, Text, Image, SafeAreaView } from "react-native";
// Aquí traemos nuestros estilos personalizados, como un traje a la medida.
import styles from "./styles/HomeStyle";
// Y aquí tenemos la imagen de portada, ¡que es como la cara de nuestro app!
import portada from '../images/home.png'

// Definimos nuestro componente HomeScreen, ¡la puerta de entrada a nuestra app!
const HomeScreen = ({ navigation }) => {
    return (
        // SafeAreaView es como un campo de seguridad para nuestros componentes.
        <SafeAreaView>
            {/* View es como el lienzo donde vamos a pintar nuestra pantalla */}
            <View style={styles.container}>
                {/* Image muestra nuestra imagen de portada, ¡como la portada de un libro! */}
                <Image source={portada} style={styles.portada} />

                {/* Aquí tenemos dos textos, uno para el título de la app y otro para la pantalla */}
                <Text style={styles.title}> Aplicacion para alta usuarios</Text>
                <Text style={styles.title}>Home Screen</Text>

                {/* Button es nuestro botón mágico que, al presionarlo, nos lleva a otra pantalla */}
                <Button
                    title="Mostrar Usuarios"
                    onPress={() => navigation.navigate('MostrarScreen')}
                />
            </View>
        </SafeAreaView>
    );
}
// ¡Y no olvidemos exportar nuestro componente para que el mundo pueda verlo!
export default HomeScreen;
