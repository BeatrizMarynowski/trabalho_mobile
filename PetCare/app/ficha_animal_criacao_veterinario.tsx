import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { Icon, Text, TextInput } from 'react-native-paper';
import { colors, styles } from '../style';

export default function Index() {
    const [nomepet, setnomepet] = useState("");
    const [nometutor, setnometutor] = useState("");
    const [especie, setespecie] = useState("");
    const [raca, setraca] = useState("");
    const [idade, setidade] = useState("");
    const [peso, setpeso] = useState("");
    const [sexo, setsexo] = useState("");
    const [castrado, setcastrado] = useState("");

    const [cpf, setcpf] = useState("");
    const [endereco, setendereco] = useState("");
    const [telefone, settelefone] = useState("");
    const [email, setemail] = useState("");
    const [notas, setnotas] = useState("")
return (
/*view principal*/
    <View style={styles.view_principal}>
{/*seta que volta para o menu*/}
        <Link href="./menu_veterinario" style={styles.seta_voltar}>
            <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
{/*view para dar espaço na tela - 10*/}
        <View style={styles.espaco_10}>
        </View>
{/*view da ficha*/}
        <ScrollView style={styles.view_secundaria_largura}>
        {/*view da ficha*/}
        <View style={styles. view_ficha}>
            {/*view da imagem e nome do pet*/}
            <View style={styles.cabecalho}>
                <View style={styles.circulo_foto_vazia}>
                 <Icon source="camera-plus-outline" size={28} color={colors.branco} />
                </View>
                  <View>
                    <TextInput 
                    label="Nome do Pet"
                    value={nomepet}
                    onChangeText={texto => setnomepet(texto)}
                    mode="outlined"
                    activeUnderlineColor={colors.verde}
                    underlineColor={colors.roxo_medio}
                    theme={{ colors: { onSurfaceVariant: colors.branco } }}
                    style={styles.quadrinho_vizu_cabe}/>
                    <TextInput 
                    label="Nome do Tutor"
                    value={nometutor}
                    onChangeText={texto => setnometutor(texto)}
                    mode="outlined"
                    activeUnderlineColor={colors.verde}
                    underlineColor={colors.roxo_claro}
                    theme={{ colors: { onSurfaceVariant: colors.branco } }}
                    style={styles.quadrinho_vizu_cabe}/>

                </View>
            </View>
            {/*view do pet e do dono*/}
            <View style={styles.view_das_info}>
                <View style={styles.dados_animal_e_dono}>
                    <View style={styles.dados_div_animal_dono_criacao}>
                         <View style={styles.titulo_animal_dono}>
                          <Icon source="paw" size={16} color={colors.verde} />
                            <Text style={[styles.titulo_verde_pequeno, { marginTop: 4 }]}>Animal</Text>
                             </View>
                        <TextInput 
                        label="Espécie"
                        value={especie}
                        onChangeText={texto => setespecie(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}
                        />
                        <TextInput 
                        label="Raça"
                        value={raca}
                        onChangeText={texto => setraca(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Idade"
                        value={idade}
                        onChangeText={texto => setidade(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Peso"
                        value={peso}
                        onChangeText={texto => setpeso(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Sexo"
                        value={sexo}
                        onChangeText={texto => setsexo(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Castrado"
                        value={castrado}
                        onChangeText={texto => setcastrado(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        </View>
                        <View style={styles.dados_div_animal_dono_criacao}>
                          <View style={styles.titulo_animal_dono}>
                          <Icon source="account" size={16} color={colors.verde} />
                         <Text style={[styles.titulo_verde_pequeno, { marginTop: 4 }]}>Dono</Text>
                     </View>
                        <TextInput 
                        label="CPF"
                        value={cpf}
                        onChangeText={texto => setcpf(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Endereço"
                        value={endereco}
                        onChangeText={texto => setendereco(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="Telefone"
                        value={telefone}
                        onChangeText={texto => settelefone(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                        <TextInput 
                        label="E-mail"
                        value={email}
                        onChangeText={texto => setemail(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                    </View>
                </View>
            </View>
            {/*linha divisoria*/}
            <View style={styles.linha} />   
            <View style={styles.linha} />
            {/*view das notas*/} 
            <View style={styles.view_das_info}>
                {/*nome bonitin*/}
                <View style={styles.Titulo_div}>
                    <Icon source="note-text-outline" size={18} color={colors.verde} />
                    <Text style={styles.titulo_conf}>Notas</Text>
                </View>
                {/*card das notas*/}
                <View style={styles.dados_card_exame}>
                    <Text style={styles.dados_exame}>Dr. Carlos Silva</Text>
                    <TextInput 
                        label="Notas"
                        value={notas}
                        onChangeText={texto => setnotas(texto)}
                        mode="outlined"
                        activeUnderlineColor={colors.verde}
                        underlineColor={colors.roxo_claro}
                        theme={{ colors: { onSurfaceVariant: colors.branco } }}
                        style={styles.quadrinho_vizu}/>
                </View>
            </View>
            <Link href="./compartilhar_ficha_veterinario" asChild>
                <Pressable style={styles.botao_principal}>
                    <Text style={styles.texto_botao_principal}>Criar ficha</Text>
                </Pressable>
            </Link>
        </View>
        </ScrollView>
        {/*view para dar espaço na tela - 5*/}
        <View style={styles.espaco_5}/>
    </View>
  );
}