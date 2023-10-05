import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App extends Component{
  render(){


    let nome = 'Victória Cabral Quintério';
    let email = 'victoria@email.com';
    let etec = 'Técnico em Desenvolvimento de Sitemas ';
    let exp = "Projeto Fora da Caixa";
    let projeto = "Frockie"
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7eQ-pg2H4AVUZeGqsvUwUNRx-FRINTih3g&usqp=CAU';


    return(
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, marginTop: 50, marginLeft: 50}}
        />
        <Text style={{ fontSize: 30, marginLeft: 20, textAlign: 'center' }}>{nome} {"\n"}</Text>
        <Text style={{ fontSize: 25, marginLeft: 10, color: '#2F4858'}}>Dados pessoais</Text>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>📨 {email} {"\n"}</Text>
        <Text style={{ fontSize: 25, marginLeft: 10, color: '#2F4858'}}>Formação</Text>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>👩‍💻 {etec} {"\n"}</Text>
        <Text style={{ fontSize: 25, marginLeft: 10, color: '#2F4858'}}>Experiência</Text>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>🧾 {exp} {"\n"}</Text>
        <Text style={{ fontSize: 25, marginLeft: 10, color: '#2F4858'}}>Projetos</Text>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>🍪 {projeto} {"\n"}</Text>
      </View>
    )
  }
}

export default App;