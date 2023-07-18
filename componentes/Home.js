import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LogoJuan.png')} />
      <Image style={styles.imagen} source={require('../assets/principal.webp')} />
      <View style={styles.parrafo}>
        <Text style={styles.per}>
          Esta página contiene una relación de establecimientos gastronómicos distribuidos en las categorías de "BARES" y "RESTAURANTES". La principal diferencia entre ambas es que en todos los sitios incluidos como restaurantes se puede reservar. Ello no quiere decir que también lo puedas hacer en algunos bares.
          Así mismo, en los todos los establecimientos catalogados como bares, se pueden pedir tapas, lo que, tampoco implica que en algunos restaurantes también te las sirvan.
          En la sección de contactos me puedes dejar algún establecimiento que eches de menos en la relación y lo incluiré sin problema.
        </Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Enlace presionado')}>
        <Text style={styles.link}>Ir al formulario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 100,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  parrafo: {
    marginTop: 20,
  },
  per: {
    fontSize: 16,
    textAlign: 'justify',
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Home;
