import { Link } from "expo-router";
import { Image, Pressable, View, ImageBackground } from "react-native";
import { Text, Icon } from 'react-native-paper';
import { colors, styles } from '../../../style';

export default function Index() {
  return (
    <ImageBackground
      source={require('../../../assets/images/fundo.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={[styles.view_principal, { backgroundColor: "transparent" }]}>
        <View style={styles.view_20}>  
          <Image source={require('../../../assets/images/icone_pata.png')} style={styles.imagem_pata_cadastro}/>
            <Link href="/" style={styles.posicao_seta}>
              <Icon source="arrow-left" size={35} color={colors.cinza} />
            </Link>
        </View>
        <View style={styles.espaco_5}/>
        <View style={styles.cadastro_card}>       
          <Text style={styles.bemvindo_titulo}>Bem-vindo de</Text>
          <View style={styles.bemvindo_linha}>
            <Text style={styles.bemvindo_titulo}>volta</Text>
            <Icon source="heart" size={23} color={colors.claro} />
          </View>
          <Text style={styles.bemvindo_sub}>Escolha como você quer entrar.</Text>
          <Link href="./login_tutor" asChild>  
            <Pressable style={styles.botao_cad_tut}>
              <Icon source="paw" size={30} color={colors.cinza} />
              <View style={{ flex: 1 }}>
                <Text style={styles.botao_perfil_titulo}>Sou tutor</Text>
                <Text style={styles.botao_perfil_sub}>Acesse e cuide dos seus pets</Text>
              </View>
              <Icon source="chevron-right" size={30} color={colors.cinza} />
            </Pressable>
          </Link>

          <Link href="./login_veterinario" asChild>  
            <Pressable style={styles.botao_cad_vet}>
              <Icon source="stethoscope" size={30} color={colors.cinza} />
              <View style={{ flex: 1 }}>
                <Text style={styles.botao_perfil_titulo}>Sou veterinário</Text>
                <Text style={styles.botao_perfil_sub}>Gerencie os cuidados dos animais</Text>
              </View>
              <Icon source="chevron-right" size={30} color={colors.cinza} />
            </Pressable>
          </Link>
          <Link href="../cadastro/cadastro" style={styles.link_login}>
              <Text style={{color:"white"}}>Não tem conta? Cadastre-se</Text>
          </Link>       
        </View>
        <View style={styles.espaco_5}/>
      </View>
    </ImageBackground>
  );
}