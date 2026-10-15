import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import { styles } from '../style';


import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";


export default function Index() {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      
      router.push("/menu_veterinario"); 
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      const err = error as any;
      if (
        err.code === 'auth/invalid-credential' || 
        err.code === 'auth/user-not-found' || 
        err.code === 'auth/wrong-password'
      ) {
        Alert.alert("Erro", "E-mail ou senha incorretos.");
      } else {
        Alert.alert("Erro", "Não foi possível conectar. Tente novamente.");
      }
    }
  };

  const EsqueceuSenha = async () => {
  if (!email) {
    Alert.alert("Atenção", "Por favor, digite seu e-mail no campo acima primeiro!");
    return;
  }
  try {
    // Envia o e-mail de redefinição de forma automática e segura pelo Google
    await sendPasswordResetEmail(auth, email.trim().toLowerCase());
    Alert.alert("Sucesso!", "E-mail de redefinição enviado! Verifique sua caixa de entrada.");
  } catch (error) {
    console.error(error);

    const err = error as any; 

    if (err.code === 'auth/user-not-found') {
      Alert.alert("Erro", "Nenhum usuário encontrado com este e-mail.");
    } else {
      Alert.alert("Erro", "Ocorreu um erro ao tentar enviar o e-mail de recuperação.");
    }
  }
};

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
      label="Email"
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
    <Pressable style={styles.press} onPress={realizarLogin}>
        <Text>Entrar</Text>
    </Pressable>

      <Pressable onPress={EsqueceuSenha}>
        <Text style={{ color: '#fff', marginTop: 10 }}>Esqueceu sua senha?</Text>
      </Pressable>

    </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_10}/>
    </View>
  );
}