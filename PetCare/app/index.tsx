import { Link } from "expo-router";
import { Image, Pressable, View } from "react-native";
import { Text } from 'react-native-paper';
import { styles } from '../style';

export default function Index() {
return (
/*view principal*/
  <View style={styles.view_principal}>
{/*view da logo*/}
    <View style={styles.view_25}>
      <Image source={require('../assets/images/icone_cachorro.png')} style={styles.imagem_pata}/>
      <Text style={styles.index_slogan}> Cuidado e carinho em todos os momentos.
        </Text>

    </View>
{/*view do meio*/}
    <View style={styles.view_metade}>
      <Image source={require('../assets/images/pets.png')} style={styles.imagem_pets}/>
    </View>

      <Text style={styles.index_titulo}>
          Seu pet merece o melhor!
        </Text>
      <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao veterinário do seu pet,onde ele estiver</Text>

{/*view dos botao*/}
    <View style={[styles.view_25, { gap: '5%' }]}>
  {/*botao de criar conta*/}
      <Link href="./cadastro" asChild> 
        <Pressable style={styles.pressable_c}>
          <Text>Criar conta</Text>
        </Pressable>
      </Link>
  {/*botao de login*/}
      <Link href="./login" asChild>
         <Pressable style={styles.pressable_l}>
          <Text>Já tenho conta</Text>
        </Pressable>
      </Link>
    </View>
  </View>
  );
}