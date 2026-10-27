import { Link } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { Text, Button } from 'react-native-paper';
import { styles } from '../style';

export default function Index() {
  return (
    <View style={styles.view_principal}>

      <View style={styles.view_25}>
        <Image
          source={require('../assets/images/icone_pata.png')}
          style={styles.imagem_pata}
          resizeMode="contain"
        />
      </View>

    <View style={styles.view_metade}>
        <Image
          source={require('../assets/images/pets.png')}
          style={styles.imagem_pets}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.index_titulo}>Seu pet merece o melhor!</Text>
      <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao cuidado que seu pet merece, onde você estiver</Text>

      <View style={[styles.view_25, { gap: '5%' }]}>

        {/*botao de criar conta*/}
        <Link href="./entrada/cadastro/cadastro" asChild> 
          <Pressable style={styles.pressable_c}>
            <Text style={styles.fonteFredoka}>Criar conta</Text>
          </Pressable>
        </Link>

        {/*botao de login*/}
        <Link href="./entrada/login/login" asChild>
          <Pressable style={styles.pressable_l}>
            <Text style={styles.fonteFredoka}>Entrar</Text>
          </Pressable>
        </Link>
        
      </View>
    </View>
  );
}