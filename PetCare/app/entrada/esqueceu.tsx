import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable,ScrollView,TextInput, View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { colors, styles } from "../../style";

import { sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Index() {
  const [email, setemail] = useState("");

  const esqueceu = async () => {
    if (!email) {
      Alert.alert(
        "E-mail não encontrado",
      "Digite seu e-mail no campo acima para recuperar sua senha."
      );
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
              <Text style={styles.form_titulo}>Recuperar senha</Text>
    
            </View>
          </View>
          <Text style={styles.form_sub}>Informe seu e-mail para receber o link de recuperação de senha</Text>
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
          
          <Pressable style={styles.form_botao} onPress={esqueceu}>
            <Icon source="login" size={24} color={colors.branco} />
            <Text style={styles.form_botao_texto_email_rec}>Enviar e-mail de recuperação</Text>
          </Pressable>
          
          </View>
          </ScrollView>
      </View>
    
    </ImageBackground>
  );
}