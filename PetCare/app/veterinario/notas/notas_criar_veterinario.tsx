
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground,Pressable, ScrollView, View, } from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, } from "firebase/firestore";

export default function Index() {
    const { petId, nomePet, nomeTutor } = useLocalSearchParams<{
        petId: string;
        nomePet?: string;
        nomeTutor?: string;
    }>();

    const [notas, setNotas] = useState("");
    const [dataAplicacao, setDataAplicacao] = useState(
        new Date().toLocaleDateString("pt-BR")
    );
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataretorno, setDataretorno] = useState("");

    const novanotas = async () => {
        if (!notas.trim() || !dataAplicacao.trim()) {
            Alert.alert(
                "Atenção",
                "Informe o tipo da nota e a data em que foi realizada!"
            );
            return;
        }

        const auth = getAuth();
        const db = getFirestore();
        const user = auth.currentUser;

        if (!user) {
            Alert.alert("Erro", "Você precisa estar logado.");
            return;
        }

        if (!petId) {
            Alert.alert(
                "Erro",
                "Não foi possível identificar o pet. Volte e selecione-o novamente."
            );
            return;
        }

        try {
            const notasDocRef = doc(collection(db, "notas"));

            await setDoc(notasDocRef, {
                notas: notas.trim(),
                dataAplicacao: dataAplicacao.trim(),
                categoria: categoria.trim(),
                descricao: descricao.trim(),
                dataretorno: dataretorno.trim(),
                notasId: notasDocRef.id,
                petId: String(petId),
                vetId: user.uid,
            });

            Alert.alert(
                "Sucesso!",
                "Nota cadastrada com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () =>
                            router.push({
                                pathname: "./notas_veterinario",
                                params: {
                                    petId: String(petId),
                                },
                            }),
                    },
                ]
            );
        } catch (error) {
            console.error("Erro ao salvar a nota:", error);

            Alert.alert(
                "Erro",
                "Não foi possível cadastrar a nota. Tente novamente."
            );
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../../assets/images/fundo.png")}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <View style={styles.espaco_topo_ficha} />

                <ScrollView
                    style={styles.view_secundaria_largura}
                    contentContainerStyle={{
                        paddingBottom: 30,
                    }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.view_ficha_criacao}>
                        {/* Cabeçalho */}
                        <View style={styles.cabecalho}>
                            <View style={styles.cabecalho_titulo_linha}>
                                <Icon
                                    source="notebook-edit"
                                    size={28}
                                    color={colors.branco}
                                />

                                <Text style={styles.cabecalho_titulo}>
                                    Cadastrar nota
                                </Text>

                                <Pressable
                                    onPress={() => router.back()}
                                    style={{ marginLeft: "auto" }}
                                >
                                    <Icon
                                        source="close"
                                        size={30}
                                        color={colors.branco}
                                    />
                                </Pressable>
                            </View>

                            <Text style={styles.cabecalho_legenda}>
                                Registre uma nota na ficha do pet
                            </Text>
                        </View>

                        {/* Conteúdo */}
                        <View style={styles.container_secoes_ficha}>
        

                            {/* Dados da nota */}
                            <View style={styles.card_ficha_novo}>
                                <View style={styles.titulo_secao_ficha}>
                                    <Icon
                                        source="notebook-edit"
                                        size={24}
                                        color={colors.rosaEscuro}
                                    />

                                    <Text
                                        style={
                                            styles.texto_titulo_secao_ficha
                                        }
                                    >
                                        Dados da nota
                                    </Text>
                                </View>

                                <View style={styles.linha_2} />

                                <Text style={styles.seletor_label}>
                                    Nome da nota *
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    value={notas}
                                    onChangeText={setNotas}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />

                                <Text style={styles.seletor_label}>
                                    Data *
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={dataAplicacao}
                                    onChangeText={setDataAplicacao}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />

                                <Text style={styles.seletor_label}>
                                   Categoria (Registre observações clínicas, evolução e orientações..)
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    value={categoria}
                                    onChangeText={setCategoria}
                                   
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />


                                <Text style={styles.seletor_label}>
                                    Descrição
                                </Text>

                                <TextInput
                                    mode="outlined"
    
                                    value={descricao}
                                    onChangeText={setDescricao}
                                    multiline
                                    numberOfLines={4}
                                    style={ styles.campo_ficha_multilinha_m
                                    }
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />

                                <Text style={styles.seletor_label}>
                                    Data de retorno*
                                </Text>

                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={dataretorno}
                                    onChangeText={setDataretorno}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                            </View>

                            {/* Botão de salvar */}
                            <Pressable
                                style={styles.botao_principal}
                                onPress={novanotas}
                            >
                                <View
                                    style={ styles.botao_principal_conteudo }
                                >
                                    <Icon  source="content-save" size={22}     color={colors.branco}
                                    />

                                    <Text
                                        style={
                                            styles.texto_botao_principal
                                        }
                                    >
                                        Salvar nota
                                    </Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
