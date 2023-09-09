import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Input } from 'react-native';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState();

  function multiplica() {
    if (result != num1 * num2) {
      setResult(num1 * num2);
    }
  }

  function soma() {
    const new1 = parseInt(num1);
    const new2 = parseInt(num2);
    const r = new1 + new2;
    setResult(r);
  }

  return (
    <View style={styles.area}>
      <TextInput
        style={styles.input}
        placeholder="Digite X"
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite Y"
        onChangeText={setNum2}
      />

      <Button title="Multiplicar" onPress={multiplica} />
      <Text>{'\n'}</Text>
      <Button title="Somar" onPress={soma} />

      <Text style={styles.texto}>Resultado:{result}</Text>
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
