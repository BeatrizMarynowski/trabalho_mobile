import { router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Alert,ImageBackground, Pressable, ScrollView, View} from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default function Index() {
    const { notasId, petId } = useLocalSearchParams<{ notasId: string, petId: string }>();
    const [loading, setLoading] = useState(true);
    const [notas, setnotas] = useState("");
    const [data, setdata] = useState(new Date().toLocaleDateString("pt-BR"));
    const [categoria, setcategoria] = useState("");
    const [descricao, setdescricao] = useState("");
    const [retorno, setretorno] = useState("");

    useEffect(() => {
        const carregarnotas = async () => {
            if (!notasId) return;
            const db = getFirestore();
            try {
               const docRef = doc(db, "notas", notasId);
               const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const dados = docSnap.data();
                    setnotas(dados.notas);
                    setdata(dados.data);
                    setcategoria(dados.categoria);
                    setdescricao(dados.descricao);
                    setretorno(dados.retorno);
                } else {
                   Alert.alert("Erro", "Ficha não encontrada.");
                }
                } catch (error) {
                    console.error("Erro ao carregar dados para edição:", error);
                } finally {
                    setLoading(false);
                }
        };
        carregarnotas();
    }, [notasId]);

    const editarnota = async () => {
        if ( !notas || !data ) {
           Alert.alert(
                "Atenção",
               "Por favor, preencha todos os campos!"
            );
            return;
        }
        const db = getFirestore();
        const docRef = doc(db, "notas", notasId);
        try {
            await updateDoc(docRef, {
                notas,
                data,
                categoria,
                descricao,
                retorno,
            });

            router.push({
                pathname: "./notas_veterinario",
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
                                <Icon source="notebook-edit" size={28} color={colors.branco}/>
                                <Text style={styles.cabecalho_titulo}>Editar nota</Text>

                                <Pressable onPress={() => router.back()} style={{ marginLeft: "auto" }}>
                                    <Icon source="close" size={30} color={colors.branco}/>
                                </Pressable>
                            </View>

                            <Text style={styles.cabecalho_legenda}>Edite uma nota do pet</Text>
                        </View>

                        {/* Conteúdo */}
                        <View style={styles.container_secoes_ficha}>
        
                            {/* Dados da nota */}
                            <View style={styles.card_ficha_novo}>
                                <View style={styles.titulo_secao_ficha}>
                                    <Icon source="notebook-edit" size={24} color={colors.rosaEscuro}/>
                                    <Text style={styles.texto_titulo_secao_ficha}>Dados da nota</Text>
                                </View>

                                <View style={styles.linha_2}/>

                                <Text style={styles.seletor_label}>Nome da nota *</Text>
                                <TextInput
                                    mode="outlined"
                                    value={notas}
                                    onChangeText={setnotas}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Data *</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={data}
                                    onChangeText={setdata}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Categoria (Registre observações clínicas, evolução e orientações..)</Text>
                                <TextInput
                                    mode="outlined"
                                    value={categoria}
                                    onChangeText={setcategoria}
                                   
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Descrição</Text>
                                <TextInput
                                    mode="outlined"
                                    value={descricao}
                                    onChangeText={setdescricao}
                                    multiline
                                    numberOfLines={4}
                                    style={ styles.campo_ficha_multilinha_m}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Data de retorno</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={retorno}
                                    onChangeText={setretorno}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                            </View>

                            {/* Botão de salvar */}
                            <Pressable style={styles.botao_principal} onPress={editarnota}>
                                <View style={ styles.botao_principal_conteudo }>
                                    <Icon  source="content-save" size={22} color={colors.branco}/>
                                    <Text style={styles.texto_botao_principal}>Salvar nota</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}