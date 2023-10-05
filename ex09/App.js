import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas de TI</Text>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
        <View style={styles.containerA}>
          <Text style={styles.anuncio}>Estagiário De TI</Text>
          <Text style={styles.salario}>
            <Text style={{ fontWeight: 'normal' }}>Salário:</Text> R$ 1.500,00
          </Text>
          <Text style={styles.descricao}>
            <Text style={{ fontWeight: 'normal' }}>Descrição:</Text>
            Estamos procurando um estagiário de TI altamente motivado e
            talentoso para se juntar à nossa equipe.
          </Text>
          <Text style={styles.descricao}>
            - Carga horária: 30 horas semanais.{'\n'}- Bolsa-auxílio compatível
            com o mercado.{'\n'}- Vale-transporte.{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Contato: (13) 99754320 </Text>
          </Text>
        </View>
        <View style={styles.containerA}>
          <Text style={styles.anuncio}>Analista De Dados Jr</Text>
          <Text style={styles.salario}>
            <Text style={{ fontWeight: 'normal' }}>Salário:</Text> R$ 3.500,00
          </Text>
          <Text style={styles.descricao}>
            <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
            Estamos procurando um Analista De Dados Jr altamente motivado e
            talentoso para se juntar à nossa equipe.             
          </Text>
          <Text style={styles.descricao}>
            - Coletar e analisar dados para identificar tendências e insights
            relevantes.{'\n'}- Criar relatórios e visualizações de dados de alta
            qualidade para ajudar as equipes a tomar decisões informadas.{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Contato: (13) 99514846 </Text>
          </Text>
        </View>

        <View style={styles.containerA}>
          <Text style={styles.anuncio}>Programador de PHP</Text>
          <Text style={styles.salario}>
            <Text style={{ fontWeight: 'normal' }}>Salário:</Text> R$ 4.500,00
          </Text>
          <Text style={styles.descricao}>
            <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
            Possuir conhecimentos em PHP, JavaScript/ jQuery, Bootstrap e MySQL.
            Bom domínio de Inglês; Conhecimento em Laravel, será considerado um
            diferencial.Conhecimentos de metodologias ágeis, boas habilidades de
            comunicação. Será considerado um grande diferencial formação em TI
            ou superior em andamento.{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Contato: (13) 99554422 </Text>
          </Text>
        </View>
        <View style={styles.containerA}>
          <Text style={styles.anuncio}>Analista Python</Text>
          <Text style={styles.salario}>
            <Text style={{ fontWeight: 'normal' }}>Salário:</Text> R$ 3.500,00
          </Text>
          <Text style={styles.descricao}>
            <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
            Desenvolver scripts Python e pequenas aplicações de acordo com os
            requisitos do projeto; Colaboração com a equipe de desenvolvimento
            para entender as necessidades e objetivos do projeto; Revisões de
            código para garantir a qualidade do código e as melhores práticas de
            desenvolvimento;{'\n'}
            <Text style={{ fontWeight: 'bold' }}>Contato: (13) 99542319 </Text>
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
    paddingBottom: 52,
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
    textAlign: 'justify',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  salario: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  containerA: {
    backgroundColor: 'lightgrey',
    marginLeft: 5,
    marginTop: 5,
    width: 350,
    height: 'auto',
    borderRadius: 5,
    paddingBottom: 5,
  },
});

export default App;
