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
      <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
      <Text variant="displayMedium" style={styles.texto_conecte}>PetCare</Text>
      <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao veterinário do seu pet,onde ele estiver</Text>
    </View>
{/*view do meio*/}
    <View style={styles.view_metade}>
    </View>
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