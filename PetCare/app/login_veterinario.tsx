import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable,TextInput, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { colors, styles } from "../style";

import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseconfig";

export default function Index() {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setnome] = useState("")

    const login = async () => {
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
  
    const esqueceu = async () => {
    if (!email) {
      Alert.alert("Atenção", "Por favor, digite seu e-mail no campo acima primeiro!");
      return;
    }
    try {
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
 <ImageBackground
    source={require("../assets/images/fundo.png")}
    style={{ flex: 1,alignItems: "center"  }}
    resizeMode="cover"
  >
{/*view da logo*/}
    <View style={styles.view_25}>  
      <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
     
      <Link href="./login" style={styles.posicao_seta}>
                 <Icon source="arrow-left" size={35} color={colors.cinza} />
        </Link>
    </View>

<View style={styles.form_card}>
        {/* cabeçalho */}
        <View style={styles.form_cabecalho}>
          <View style={styles.form_titulo_linha}>
            <Icon source="paw" size={44} color={colors.bem_claro} />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.form_titulo}>Login</Text>
              <Text style={styles.form_titulo_destaque}>do Veterinário</Text>
            </View>
          </View>
          <Text style={styles.form_sub}>  Que bom te ver de novo! Entre para cuidar dos seus pacientes.

          </Text>
        </View>

        {/* campos */}
        <View style={styles.form_campos}>
          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="email" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="E-mail"
              placeholderTextColor={colors.cinza}
              value={email}
              onChangeText={setemail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="lock-outline" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="Senha"
              placeholderTextColor={colors.cinza}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <Pressable style={styles.form_botao} onPress={login}>
            <Icon source="login" size={24} color={colors.branco} />
            <Text style={styles.form_botao_texto}>Entrar</Text>
          </Pressable>

          <Pressable onPress={esqueceu} hitSlop={8}>
            <Text style={styles.form_link}>Esqueceu sua senha?</Text>
          </Pressable>

          <Link href={"/menu_veterinario"} asChild>
        <Pressable style={styles.press}>
          <Text>entrar sem autenticacao (remover depois)</Text>
        </Pressable>
      </Link>

      
        </View>
      </View>

    </ImageBackground>
  );
}