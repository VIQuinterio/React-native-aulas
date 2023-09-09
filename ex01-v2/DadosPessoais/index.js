import { View, Text, Image} from 'react-native';
import {styles} from './styles';

function DadosPessoais(){
  return (
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados Pessoais</Text>
      <Text style={{ fontSize: 20, marginLeft: 50 }}>📨 victoria@email.com {"\n"}</Text>
    </View>
  );
}
export default DadosPessoais;