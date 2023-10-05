import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Input, Image } from 'react-native';

function App() {
  const [gasolina, setGas] = useState(0);
  const [alcool, setALc] = useState(0);
  const [result, setResult] = useState();

  function calcular() {
    const newg = parseInt(gasolina);
    const newa = parseInt(alcool);
    if(newg != 0){
      const r = newa / newg;
      if(r > 0.7){
          setResult("O preço da Gasolina é melhor");
      }else{
         setResult("O preço do Alcool é melhor");
      }
    }
  }
  let img = "https://play-lh.googleusercontent.com/uppnNukrvQ7ttY2yK0Jp1jretVddquUYEGjwVl8cNCGNL7J9P4OqSh-AqljkVJJjQVFL";

  return (
    <View style={styles.area}>

      <Image source={{uri: img}} style={{width: 250, height: 250, marginLeft: 50}}/>
      <TextInput
        style={styles.input}
        placeholder="Preço do Alcool"
        onChangeText={setALc}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={setGas}
      />

      <Button color='teal' title="Verificar" onPress={calcular} />

      <Text style={styles.texto}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 100
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;