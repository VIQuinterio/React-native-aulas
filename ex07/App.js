import { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TextInput,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

function App() {
  let initial_escolaridade = [
    { id: 1, nome: 'Médio Completo' },
    { id: 2, nome: 'Médio Incompleto' },
    { id: 3, nome: 'Superior Incompleto' },
    { id: 4, nome: 'Superior Completo' },
    { id: 5, nome: 'Técnico' },
  ];

  let initial_sexos = [
    { id: 1, nome: 'Feminino' },
    { id: 2, nome: 'Masculino' },
  ];

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState(0);

  const [escolar, setEscolar] = useState(0);
  const [escolaridade, setEscolaridade] = useState(initial_escolaridade);

  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState(initial_sexos);

  const [valor, setValor] = useState(0);
  const [status, setStatus] = useState(false);

  const [result, setResult] = useState();

  let escolaridadeItem = escolaridade.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  let sexosItem = sexos.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  function aberuraConta() {
    if (status == true) {
      setResult(' Nome: ' + nome + '\n Idade: ' + idade + '\n Sexo: ' + sexos[sexo].nome 
      + '\n Escolaridade: ' + escolaridade[escolar].nome + '\n Limite: ' + valor + '\n Brasileiro: ' + 'Sim');
    } else {
     setResult('Nome: ' + nome + '\n Idade: ' + idade + '\n Sexo: ' + sexos[sexo].nome 
      + '\n Escolaridade: ' + escolaridade[escolar].nome + '\n Limite: ' + valor + '\n Brasileiro: ' + 'Não');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Abertura de Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        onChangeText={setIdade}
      />

      <Picker
        style={styles.picker}
        selectedValue={sexo + 1}
        onValueChange={(itemValue, itemIndex) => setSexo(itemIndex)}>
        {sexosItem}
      </Picker>

      <Picker
        selectedValue={escolar + 1}
        onValueChange={(itemValue, itemIndex) => setEscolar(itemIndex)}>
        {escolaridadeItem}
      </Picker>
      <View>
        <Slider
          style={{ top:15 }}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          value={valor}
          step={1}
          minimumTrackTintColor="lightblue"
          maximumTrackTintColor="gray"
          thumbTintColor="lightblue"
        />       
        <Text style={styles.slider}>{valor.toFixed(0)}</Text>
      </View>
 
      <Switch
        style={{ bottom: 1 }}
        value={status}
        onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        thumbColor="orange"
      />

      <Button color="teal" title="Confirmar" onPress={aberuraConta} />

      <Text style={styles.texto}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  picker: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 14,
    textAlign: 'left',
  },
  slider: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
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
    textAlign: 'left',
    fontSize: 15,
  },
});

export default App;
