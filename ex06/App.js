import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Input, Image } from 'react-native';

function App() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState();

  function Jogar() {
    const r = Math.floor(Math.random() * 11);
    if(r == num){
      setResult("Acertei "+r);
    }else{
      setResult("Errei "+r);
    }
    
  }
  let img = "https://media.istockphoto.com/id/1250051189/pt/vetorial/lottery-numbers-flying-realistic-drawing-lottery-or-billiard-balls-lucky-accidental-win.jpg?s=612x612&w=0&k=20&c=jBN72ZiyOpaDWVR0LMuO2tFutLQ-3xutxeCETcHEU_8=";

  return (
    <View style={styles.area}>

      <Image source={{uri: img}} style={{width: 250, height: 250, marginLeft: 50}}/>
      <TextInput
        style={styles.input}
        placeholder=""
        onChangeText={setNum}
      />

      <Button color='teal' title="Descobrir" onPress={Jogar} />

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