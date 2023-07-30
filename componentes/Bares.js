import React, { useState } from "react";
import { View, Text, StyleSheet,Linking,ScrollView, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { barecillos } from "../datos";
const Bares = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url)};
  const handleCall=(phone) =>{
    Linking.openURL(`tel:${phone}`)} ;



  return (
   
          <ScrollView style={styles.container}>
      {barecillos.map((item, index) => (
        <View key={index} style={styles.estab}>
          <Text style={styles.bar}>{item.nombre}</Text>
          <TouchableOpacity onPress={() => handleLinkPress(item.ubicacion)}>
            <Text style={styles.link}>Ubicación</Text>
          </TouchableOpacity>
          {item.reserva && (
            <TouchableOpacity onPress= {()=>{
              if (item.reserva.includes("95")){handleCall(item.reserva)}
              else if  (item.reserva.includes("https")){handleLinkPress(item.reserva) }           }}>
              <Text style={styles.link}>Reserva una mesa</Text>
             
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => handleLinkPress(item.estrellas)}>
            <Text style={styles.link}>Estrellas de TripAdvisor</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
     

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#f6f6e2'
  },
  estab: {
    marginBottom: 16,
    
  },
  bar: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginTop:20
  },
});

export default Bares;
