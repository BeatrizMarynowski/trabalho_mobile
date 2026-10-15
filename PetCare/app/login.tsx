import { Link } from "expo-router";
import { Image, Pressable, View, } from "react-native";
import { Text } from 'react-native-paper';
import { colors, styles } from '../style';

export default function Index() {
return (
/*view principal*/
    <View style={styles.view_principal}>
{/*view da logo - 30*/}
        <View style={styles.view_30}>  
            <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
            <Text variant="displayMedium" style="">PetCare</Text>
            <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao veterinário do seu pet,onde ele estiver</Text>
            {/*seta que volta para o index*/}
            <Link href="./" style={styles.posicao_seta}>
                <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
            </Link>
        </View>
{/*view para dar espaço na tela - 5*/}
        <View style={styles.espaco_5}/>
{/*view dos botoes*/}
        <View style={styles.view_fundo}>
            <Text style={styles.titulo} variant="headlineMedium">Escolha o seu perfil</Text>
            {/*botao do tutor*/}
            <Link href="./login_tutor" asChild>  
            <Pressable style={styles.b_tutor}>
                <Text >Sou tutor, acessar meus pets</Text>
            </Pressable>
            </Link>
            {/*botao do veterinario*/}
            <Link href="./login_veterinario" asChild>  
            <Pressable style={styles.b_vet}>
                <Text>Sou veterinario, cuidar de pets</Text>
            </Pressable>
            </Link>
            <Link href="./cadastro">
                <Text style={{color:colors.branco}} >Não tem conta? Cadastre-se</Text>
            </Link>
        </View>
{/*view para dar espaço na tela*/}
        <View style={styles.espaco_5}/>
    </View>
  );
}
