import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import { styles } from '../style';

/*todos os imports necessarios para fazer o cadatros pelo database do google ja com a criptografia em hash da senha*/
import { auth, db } from './firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Index() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [telefone, settelefone] = useState("");
  const [crmv, setcrmv] = useState("");
  const [senha, setsenha] = useState("");

/*essa ja eh a constante que cadastra e salva no banco os dados coletados na hora da criacao da conta do veterinario*/
  const Cadastro = async () => {
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
/*view principal*/
  <View style={styles.view_principal}>
{/*view da logo*/}
    <View style={styles.view_25}>  
      <Image source={require('../assets/images/icone_pata.png')} style={styles.imagem_pata}/>
      <Text variant="displayMedium" style="">PetCare</Text>
      <Text variant="bodyMedium" style={styles.texto_conecte}>Conecte-se ao veterinário do seu pet,onde ele estiver</Text>
      {/*seta que volta para o login*/}
      <Link href="./cadastro" style={styles.posicao_seta}>
          <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
      </Link>
    </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_3}/>
{/*view de cadastro*/}
  <View style={styles.view_fundo2}>
    <Text style={styles.titulo} variant="displayMedium">cadastro</Text>
    <TextInput
      style={styles.text_imput}
      label="nome"
      value={nome}
      onChangeText={texto => setnome(texto)}
      mode="flat"
    />
    <TextInput
      style={styles.text_imput}
      label="email"
      value={email}
      onChangeText={text => setemail(text)}
      mode="flat"
    />
    <TextInput
      style={styles.text_imput}
      label="telefone"
      value={telefone}
      onChangeText={texto => settelefone(texto)}
      mode="flat"
    />
    <TextInput
      style={styles.text_imput}
      label="CRMV"
      value={crmv}
      onChangeText={texto => setcrmv(texto)}
      mode="flat"
    />
    <TextInput
      style={styles.text_imput}
      label="senha"
      value={senha}
      onChangeText={texto => setsenha(texto)}
      secureTextEntry={true}
      mode="flat"
    />
      <Pressable style={styles.press} onPress={Cadastro}>
            <Text>criar conta</Text>
      </Pressable>
  </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_7}/>
    </View>
  );
}