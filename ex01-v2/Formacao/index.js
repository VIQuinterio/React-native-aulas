import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Formacao() {
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
      <Text style={{ fontSize: 20, marginLeft: 50 }}>
        👩‍💻 Técnico em Desenvolvimento de Sitemas
      </Text>
    </View>
  );
}
export default Formacao;
