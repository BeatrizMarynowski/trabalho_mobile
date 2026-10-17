import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable,ScrollView,TextInput, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { colors, styles } from "../../style";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Index() {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
      if (!email || !senha) {
        Alert.alert("Atenção", "Por favor, preencha todos os campos!");
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);

        router.push("/tutor/menu_tutor"); 
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

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.png")}
      style={{ flex: 1,alignItems: "center"  }}
      resizeMode="cover"
    >
      <View style={styles.view_25}>  
        <Image source={require('../../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
        <Link href="./login" style={styles.posicao_seta}>
          <Icon source="arrow-left" size={35} color={colors.cinza} />
        </Link>
      </View>
      <View style={styles.form_card}>
        <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.form_cabecalho}>
          <View style={styles.form_titulo_linha}>
            <Icon source="paw" size={44} color={colors.bem_claro} />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.form_titulo}>Login</Text>
              <Text style={styles.form_titulo_destaque}>do Tutor</Text>
            </View>
          </View>
          <Text style={styles.form_sub}>Que bom te ver de novo! Entre para cuidar do seu pet.</Text>
        </View>
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
              autoCapitalize="none"
              
            />
          </View>
          
          <Pressable style={styles.form_botao} onPress={login}>
            <Icon source="login" size={24} color={colors.branco} />
            <Text style={styles.form_botao_texto}>Entrar</Text>
          </Pressable>

          <Link href="./esqueceu" asChild>
            <Pressable hitSlop={8}>
              <Text style={styles.form_link}>Esqueceu sua senha?</Text>
            </Pressable>
          </Link>

          </View>
          </ScrollView>
      </View>

    </ImageBackground>
  );
}