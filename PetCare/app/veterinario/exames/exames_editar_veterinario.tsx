import { router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Alert,ImageBackground, Pressable, ScrollView, View} from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default function Index() {
    const { examesId, petId } = useLocalSearchParams<{ examesId: string, petId: string }>();
    const [loading, setLoading] = useState(true);
    const [exame, setexame] = useState("");
    const [aplicacao, setaplicacao] = useState("");
    const [resultado, setresultado] = useState("");
    const [observacoes, setobservacoes] = useState("");

    useEffect(() => {
        const carregarexames = async () => {
            if (!examesId) return;
            const db = getFirestore();
            try {
               const docRef = doc(db, "exames", examesId);
               const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const dados = docSnap.data();
                    setexame(dados.exame);
                    setaplicacao(dados.aplicacao);
                    setresultado(dados.resultado);
                    setobservacoes(dados.observacoes);
                } else {
                   Alert.alert("Erro", "Ficha não encontrada.");
                }
                } catch (error) {
                    console.error("Erro ao carregar dados para edição:", error);
                } finally {
                    setLoading(false);
                }
        };
        carregarexames();
        }, [examesId]);

    const editarexame = async () => {
        if ( !exame || !aplicacao) {
           Alert.alert(
                "Atenção",
               "Por favor, preencha todos os campos!"
            );
            return;
        }
        const db = getFirestore();
        const docRef = doc(db, "exames", examesId);
        try {
            await updateDoc(docRef, {
                exame,
                aplicacao,
                resultado,
                observacoes,
            });

            router.push({
                pathname: "./exames_veterinario",
                params: {petId: petId}
            });

            } catch (error) {
                console.error("Erro ao  alterações:", error);
                
                Alert.alert(
                    "Erro",
                    "Não foi possível criar a ficha. Tente novamente"
                );
            }
    }
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
                                <Text style={styles.cabecalho_titulo}>Editar exame</Text>

                                <Pressable onPress={() => router.back()} style={{ marginLeft: "auto" }}>
                                    <Icon source="close" size={30} color={colors.branco}/>
                                </Pressable>
                            </View>

                            <Text style={styles.cabecalho_legenda}>Edite um exame na ficha do pet</Text>
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
                            <Pressable style={styles.botao_principal} onPress={editarexame}>
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
