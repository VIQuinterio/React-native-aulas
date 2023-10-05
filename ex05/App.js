import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Input, Image } from 'react-native';

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, setResult] = useState();

  function calcularIMC() {
    if(altura != 0){
      const imc = peso / Math.pow(altura, 2);
      setResult(imc)
      if(imc >= 40){
          setResult("Obesidade Grau 3 ou Morbida");
      }else if(imc > 35 && imc < 39.9){
         setResult("Obesidade Grau 2");
      }else if(imc > 30 && imc < 34.9){
         setResult("Obesidade Grau 1");
      }else if(imc > 25 && imc < 29.9){
         setResult("Sobrepeso");
      }else if(imc > 18.5 && imc < 24.9){
         setResult("Peso normal");
      }else if(imc < 18.5){
         setResult("Abaixo do peso");
      }
    }
  }
  let img = "https://canalspatz.com.br/wp-content/uploads/2019/11/IMAGEM-DESTAQUE-BLOG-INFOGRAFICO-SPATZ.png";

  return (
    <View style={styles.area}>

      <Image source={{uri: img}} style={{width: 250, height: 250, marginLeft: 50}}/>

      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={setAltura}
      />

      <Button color='teal' title="Verificar" onPress={calcularIMC} />

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