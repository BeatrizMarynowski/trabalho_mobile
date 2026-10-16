import { Link } from "expo-router";
import { Image, Pressable, View, ImageBackground } from "react-native";
import { Text, Icon } from 'react-native-paper';
import { colors, styles } from '../style';


export default function Index() {
return (
/*view principal*/
<ImageBackground
  source={require('../assets/images/fundo.png')}
  style={{ flex: 1 }}
  resizeMode="cover"
>
  <View
    style={[
      styles.view_principal, 
      { backgroundColor: "transparent" }
    ]}
  >
{/*view da logo - 30*/}
        <View style={styles.view_20}>  
            <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata_cadastro}/>
           
            {/*seta que volta para o index*/}
            <Link href="./" style={styles.posicao_seta}>
                <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
            </Link>
        </View>
{/*view para dar espaço na tela*/}
        <View style={styles.espaco_5}/>
{/*view dos botoes*/}
        <View style={styles.cadastro_card}>
            
    <Text style={styles.bemvindo_titulo}>Bem-vindo ao</Text>
    <View style={styles.bemvindo_linha}>
      <Text style={styles.bemvindo_destaque}>PetCare</Text>
      <Icon source="heart" size={22} color={colors.claro} />
    </View>

     <Text style={styles.bemvindo_sub}>
    Cuidado e carinho para quem faz parte da sua família.
  </Text>
  
            {/*botao do tutor*/}
            <Link href="./cadastro_tutor" asChild>  
            <Pressable style={styles.botao_perfil}>
                <Icon source="paw" size={30} color={colors.cinza} />
      <View style={styles.botao_divisor} />
      <View style={{ flex: 1 }}>
        <Text style={styles.botao_perfil_titulo}>Sou tutor</Text>
        <Text style={styles.botao_perfil_sub}>Acesse e cuide dos seus pets</Text>
      </View>
            </Pressable>
            </Link>
            {/*botao do veterinario*/}
           <Link href="./cadastro_veterinario" asChild>  
            <Pressable style={styles.b_vet}>
                    <Text>Sou veterinario, cuidar de pets</Text>
            </Pressable>
            </Link>
            <Link href="./login">
                <Text style={{color:colors.branco}}>já tem conta? fazer login</Text>
            </Link>
        </View>
{/*view para dar espaço na tela*/}
        <View style={styles.espaco_5}/>
     </View>
</ImageBackground>
  );
}