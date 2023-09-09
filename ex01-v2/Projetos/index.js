import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Projeto() {
  return (
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projetos</Text>
      <Text style={{ fontSize: 20, marginLeft: 50 }}>
        🍪 Frockie
      </Text>
    </View>
  );
}
export default Projeto;
