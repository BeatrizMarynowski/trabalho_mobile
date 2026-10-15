import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { Text, TextInput } from 'react-native-paper';
import { styles } from '../style';

export default function Index() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [telefone, settelefone] = useState("");
  const [cpf, setcpf] = useState("");
  const [senha, setsenha] = useState("");
return (
/*view principal*/
  <View style={styles.view_principal}>
{/*view da logo - 25*/}
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
      label="CPF"
      value={cpf}
      onChangeText={texto => setcpf(texto)}
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
    <Link href="./login" asChild>
      <Pressable style={styles.press}>
            <Text>criar conta</Text>
      </Pressable>
    </Link>
  </View>
{/*view para dar espaço na tela*/}
    <View style={styles.espaco_7}/>
    </View>
  );
}