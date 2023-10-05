import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

function App() {
  let anun0 = 'https://cdn.awsli.com.br/300x300/2017/2017052/produto/1374126928fea14e64d.jpg';
  let anun1 = 'https://cdn.awsli.com.br/800x800/2487/2487672/produto/176672259/50ccee7b64.jpg';
  let anun2 = 'https://img.clasf.com.br/2019/12/19/sony-playstation-1-psone-play-1-ps1-20191219215000.1284180015.jpg';
  let anun3 = 'https://img.kleinanzeigen.de/api/v1/prod-ads/images/15/15bbf499-9b27-43de-aa9f-3b0dde4c5887?rule=$_59.JPG';
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anuncios de Consoles</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.containerA}>
          <Image source={{ uri: anun0 }} style={styles.foto} />
          <Text style={styles.anuncio}>Nintendo 64</Text>
          <Text style={styles.descricao}>
            1 Controle{'\n'}Cartucho Mario 64{'\n'}R$ 850
          </Text>
        </View>
        <View style={styles.containerA}>
          <Image source={{ uri: anun1 }} style={styles.foto} />
          <Text style={styles.anuncio}>Super Nintendo</Text>
          <Text style={styles.descricao}>
            2 Controles{'\n'}Cartucho Super Mario World{'\n'}R$ 495
          </Text>
        </View>
        <View style={styles.containerA}>
          <Image source={{ uri: anun2 }} style={styles.foto} />
          <Text style={styles.anuncio}>Playstation 1</Text>
          <Text style={styles.descricao}>
            1 Controles{'\n'}CD Crash Bandicoot Trilogy{'\n'}R$ 680
          </Text>
        </View>
         <View style={styles.containerA}>
          <Image source={{ uri: anun3 }} style={styles.foto} />
          <Text style={styles.anuncio}>Gamecube</Text>
          <Text style={styles.descricao}>
            1 Controles{'\n'}CD Mario Smash Football{'\n'}R$ 531
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  anuncio: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  descricao: {
    textAlign: 'left',
    fontSize: 14,
    paddingLeft: 10,
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 5,
  },
  containerA:{
    backgroundColor: 'lightgrey', 
    marginLeft: 5, 
    width: 180, 
    height: 300, 
    borderRadius: 5,
  },
});

export default App;
