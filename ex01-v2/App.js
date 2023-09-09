import { View, Text, Image } from 'react-native';'react-native';

// or any files within the Snack
import DadosPessoais from './DadosPessoais';
import Formacao from './Formacao';
import Experiencia from './Experiencia/index';
import Projetos from './Projetos/index';

function App(){
  let img = 'https://epipoca.com.br/wp-content/uploads/2022/04/sailor-moon-25042022-1200x900.jpg';
  return(
    <View>
      <Image 
        source={{ uri: img }} 
        style={{ width: 250, height: 250, marginTop: 50, marginLeft: 50}}
      />
      <DadosPessoais />
      <Formacao />
      <Experiencia />
      <Projetos />
    </View>
  );
}


export default App;
