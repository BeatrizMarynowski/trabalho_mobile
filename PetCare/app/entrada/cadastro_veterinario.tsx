import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable, View, TextInput  } from "react-native";
import { Text, Icon } from 'react-native-paper';
import { styles, colors} from '../../style';

import { auth, db } from '../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Index() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [telefone, settelefone] = useState("");
  const [crmv, setcrmv] = useState("");
  const [senha, setsenha] = useState("");

  const cadastro = async () => {
    if (!nome || !email || !telefone || !crmv || !senha) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "veterinarios", user.uid), {
        nome,
        email,
        telefone,
        crmv,
      });
      router.push("./login"); 
    } catch (error) {
      console.error("Erro ao salvar veterinário:", error);
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/fundo.png")}
      style={{ flex: 1, alignItems: "center" } }
      resizeMode="cover"
    >
      <View style={styles.view_20}>  
        <Image source={require('../../assets/images/icone_pata.png')} style={styles.imagem_pata2}/>
        <Link href="./cadastro" style={styles.posicao_seta}>
          <Icon source="arrow-left" size={35} color={colors.cinza} />
        </Link>
      </View>

      <View style={styles.form_card}>
        <View style={styles.form_cabecalho}>
          <View style={styles.form_titulo_linha}>
            <Icon source="paw" size={44} color={colors.bem_claro} />
            <View>
            <Text style={styles.form_titulo}>Cadastro</Text>
            <Text style={styles.form_titulo_destaque}>do Veterinário</Text>
            </View>
          </View>
          <Text style={styles.form_sub}>Preencha seus dados para começar a cuidar do seu pet!</Text>
        </View>

        <View style={styles.form_campos}>
          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="account" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="Nome"
              placeholderTextColor={colors.cinza}
              value={nome}
              onChangeText={setnome}
            />
          </View>

          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="email" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="Email"
              placeholderTextColor={colors.cinza}
              value={email}
              onChangeText={setemail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="phone" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="Telefone"
              placeholderTextColor={colors.cinza}
              value={telefone}
              onChangeText={settelefone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="file-document" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="CRMV"
              placeholderTextColor={colors.cinza}
              value={crmv}
              onChangeText={setcrmv}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.campo}>
            <View style={styles.campo_icone}>
              <Icon source="paw" size={24} color={colors.cinza} />
            </View>
            <TextInput
              style={styles.campo_input}
              placeholder="Senha"
              placeholderTextColor={colors.cinza}
              value={senha}
              onChangeText={setsenha}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <Pressable style={styles.form_botao} onPress={cadastro}>
            <Icon source="account-plus" size={24} color={colors.branco} />
            <Text style={styles.form_botao_texto}>Criar conta</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
 };
