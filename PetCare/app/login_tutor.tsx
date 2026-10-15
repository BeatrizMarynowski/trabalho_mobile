import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import { styles } from '../style';

export default function Index() {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState(""); 
return (
/*view principal*/
  <View style={styles.view_principal}>
{/*view da logo*/}
    <View style={styles.view_25}>  
      <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
      <Text variant="displayMedium" style="">PetCare</Text>
      <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao veterinário do seu pet,onde ele estiver</Text>
      {/*seta que volta para o login*/}
      <Link href="./login" style={styles.posicao_seta}>
          <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
      </Link>
    </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_10}/>
{/*view de login*/}
  <View style={styles.view_l}>
    <Text style={styles.titulo} variant="displayMedium">Login</Text>
    <TextInput
      style={styles.text_imput}
      label="e-mail"
      value={email}
      onChangeText={texto => setemail(texto)}
      mode="flat"
    />
    <TextInput
      style={styles.text_imput}
      label="Senha"
      value={senha}
      onChangeText={text => setSenha(text)}
      secureTextEntry={true}
      mode="flat"
    />
    <Link href="./menu_tutor" asChild>
          <Pressable style={styles.press}>
                <Text>Entrar</Text>
          </Pressable>
        </Link>
    <Text style={{color:"#ffffff"}}>Esqueceu sua senha?</Text>
  </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_10}/>
    </View>
  );
}