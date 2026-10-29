import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground,Pressable, ScrollView, View, } from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, } from "firebase/firestore";

export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [vacina, setvacina] = useState("");
    const [aplicacao, setaplicacao] = useState( new Date().toLocaleDateString("pt-BR"));
    const [proximadose, setproximadose] = useState("");
    const [observacoes, setobservacoes] = useState("");

    const novavacina = async () => {
        if (!vacina|| !aplicacao) {
            Alert.alert(
                "Atenção",
                "Informe o nome da vacina e a data da aplicação!"
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
            const vacinasDocRef = doc(collection(db, "vacinas"));

            await setDoc(vacinasDocRef, {
                vacina,
                aplicacao,
                proximadose,
                observacoes,
                vacinasId: vacinasDocRef.id,
                petId: petId,
                vetId: user.uid,
            });

            router.push({
                pathname: "./vacinas_veterinario",
                params: {petId: petId}
            });
                
        } catch (error) {

            Alert.alert(
                "Erro",
                "Não foi possível cadastrar a vacina. Tente novamente."
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
                                <Icon source="needle" size={28} color={colors.branco}/>
                                <Text style={styles.cabecalho_titulo}>Cadastrar vacina</Text>

                                <Pressable onPress={() => router.back()} style={{ marginLeft: "auto" }}>
                                    <Icon source="close" size={30} color={colors.branco}/>
                                </Pressable>
                            </View>

                            <Text style={styles.cabecalho_legenda}>Registre uma vacina na ficha do pet</Text>
                        </View>

                        {/* Conteúdo */}
                        <View style={styles.container_secoes_ficha}>
    
                            {/* Dados da vacina */}
                            <View style={styles.card_ficha_novo}>
                                <View style={styles.titulo_secao_ficha}>
                                    <Icon source="needle" size={24} color={colors.rosaEscuro}/>
                                    <Text style={styles.texto_titulo_secao_ficha}>Dados da vacina</Text>
                                </View>

                                <View style={styles.linha_2}/>

                                <Text style={styles.seletor_label}>Nome da vacina *</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="Ex.: Antirrábica"
                                    value={vacina}
                                    onChangeText={setvacina}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Data da aplicação *</Text>
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
                                <Text style={styles.seletor_label}>Próxima dose</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="DD/MM/AAAA"
                                    value={proximadose}
                                    onChangeText={setproximadose}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    outlineStyle={{ borderRadius: 28 }}
                                    activeOutlineColor={colors.rosaEscuro}
                                />
                                <Text style={styles.seletor_label}>Observações</Text>
                                <TextInput
                                    mode="outlined"
                                    placeholder="Adicione observações sobre a aplicação..."
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
                            <Pressable style={styles.botao_principal} onPress={novavacina}>
                                <View style={ styles.botao_principal_conteudo }>
                                    <Icon  source="content-save" size={22} color={colors.branco}/>
                                    <Text style={styles.texto_botao_principal}>Salvar vacina</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
