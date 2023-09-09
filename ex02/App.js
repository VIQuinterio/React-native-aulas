import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0)
  
  function Adicionar(){
    setContador(contador+1);
  }

  function Diminuir(){
    if(contador > 0)
      setContador(contador-1);
  }

  return (
     <View style={styles.container}>

      <Text style={styles.texto}>Contador de Pessoas</Text>
      
      <Text style={styles.texto}> {contador} </Text>

      <Button title="Adicionar" onPress={Adicionar} />

      <Button title="Diminuir" onPress={Diminuir} />
    </View>

  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      marginTop: 100
    }
  });

