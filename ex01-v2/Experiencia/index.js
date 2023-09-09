import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Experiencia() {
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiência</Text>
      <Text style={{ fontSize: 20, marginLeft: 50 }}>
        📦 Projeto Fora da Caixa
      </Text>
    </View>
  );
}
export default Experiencia;
