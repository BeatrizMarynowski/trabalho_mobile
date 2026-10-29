import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground,Pressable, ScrollView, View, } from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, } from "firebase/firestore";

export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [exame, setexame] = useState("");
    const [aplicacao, setaplicacao] = useState( new Date().toLocaleDateString("pt-BR"));
    const [resultado, setresultado] = useState("");
    const [observacoes, setobservacoes] = useState("");

    const novoexame = async () => {
        if (!exame|| !aplicacao) {
            Alert.alert(
                "Atenção",
                "Informe o nome do exame e a data em que foi realizado!"
            );
            return;
        }

        const auth = getAuth();
        const db = getFirestore();
        const user = auth.currentUser;

        if (!user) {
            return;
        }

        try {
            const examesDocRef = doc(collection(db, "exames"));

            await setDoc(examesDocRef, {
                exame,
                aplicacao,
                resultado,
                observacoes,
                examesId: examesDocRef.id,
                petId: petId,
                vetId: user.uid,
            });
            router.push({
                pathname: "./exames_veterinario",
                params: {petId: petId},
            });

        } catch (error) {

            Alert.alert(
                "Erro",
                "Não foi possível cadastrar o exame. Tente novamente."
            );
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require("../../../assets/images/fundo.png")} style={{ flex: 1 }} resizeMode="cover">
                <View style={styles.espaco_topo_ficha}/>
                <ScrollView style={styles.view_secundaria_largura} contentContainerStyle={{paddingBottom: 30}}>
                    <View style={styles.view_ficha_criacao}>

                        {/* Cabeçalho */}
                        <View style={styles.cabecalho}>
                            <View style={styles.cabecalho_titulo_linha}>
                                <Icon source="flask-outline" size={28} color={colors.branco}/>
                                <Text style={styles.cabecalho_titulo}>Cadastrar exame</Text>

                                <Pressable onPress={() => router.back()} style={{ marginLeft: "auto" }}>
                                    <Icon source="close" size={30} color={colors.branco}/>
                                </Pressable>
                            </View>

                            <Text style={styles.cabecalho_legenda}>Registre um exame na ficha do pet</Text>
                        </View>

                        {/* Conteúdo */}
                        <View style={styles.container_secoes_ficha}>
        
                            {/* Dados do exame */}
                            <View style={styles.card_ficha_novo}>
                                <View style={styles.titulo_secao_ficha}>
                                    <Icon source="flask-outline" size={24} color={colors.rosaEscuro}/>
                                    <Text style={styles.texto_titulo_secao_ficha}>Dados do exame</Text>
                                </View>

                                <View style={styles.linha_2}/>

                                <Text style={styles.seletor_label}>Nome do exame *</Text>
                                <TextInput
                                    mode="outlined"
                                    value={exame}
                                    onChangeText={setexame}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Data *</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={aplicacao}
                                    onChangeText={setaplicacao}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Resultado</Text>
                                <TextInput
                                    mode="outlined"
                                    value={resultado}
                                    onChangeText={setresultado}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Observações</Text>
                                <TextInput
                                    mode="outlined"
                                    value={observacoes}
                                    onChangeText={setobservacoes}
                                    multiline
                                    numberOfLines={4}
                                    style={ styles.campo_ficha_multilinha_m}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                            </View>

                            {/* Botão de salvar */}
                            <Pressable style={styles.botao_principal} onPress={novoexame}>
                                <View style={ styles.botao_principal_conteudo }>
                                    <Icon  source="content-save" size={22}color={colors.branco}/>
                                    <Text style={styles.texto_botao_principal}>Salvar exame</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
