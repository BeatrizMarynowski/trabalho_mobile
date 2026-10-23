import { Link, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView,ImageBackground, Platform, Pressable, ScrollView, View} from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [vacinas, setvacinas] = useState("");
    const [nome, setnome] = useState("");

    const novavacina = async () => {
        if ( !vacinas || !nome
        ) {
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos!"
            );
            return;
        }

        const auth = getAuth();
        const db = getFirestore();
        const user = auth.currentUser;

        try {
    const vacinasDocRef = doc(collection(db, "vacinas"));

    await setDoc(vacinasDocRef, {
        vacinas,
        nome,
        vacinasId: vacinasDocRef.id,
        petId: petId,
        vetId: user?.uid
    });

    router.push({
        pathname: "./vacinas_veterinario",
        params: {
            petId: petId,
        }
    });
} catch (error) {
    console.error("Erro ao salvar ficha:", error);

    Alert.alert(
        "Erro",
        "Não foi possível criar a ficha. Tente novamente"
    );
}}

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <ImageBackground
                    source={require("../../assets/images/fundo.png")}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                  >

    
              

                {/* Espaço superior */}
                <View style={styles.espaco_topo_ficha} />

                {/* Ficha */}
                <ScrollView
                    style={styles.view_secundaria_largura}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.view_ficha_criacao}>

                        {/* Cabeçalho */}
                        <View style={styles.cabecalho}>

                            <View style={styles.cabecalho_titulo_linha}>
                                <Icon
                                    source="clipboard-text-outline"
                                    size={26}
                                    color={colors.branco}
                                />
                                <Text style={styles.cabecalho_titulo}>
                                    Nova ficha
                                </Text>
                                <Link href="./menu_veterinario" asChild>
                                  <Pressable  style={{ marginLeft: "auto" }}>
                                      <Icon source="close" size={35} color={colors.branco} />
                                  </Pressable>
                              </Link>
                            </View>

                            <View style={styles.cabecalho_campos}>

                                <Text style={styles.cabecalho_legenda}>
                                    Preencha os dados do pet e do tutor
                                </Text>

                          
<TextInput
    placeholder="*Nome do pet"
    placeholderTextColor={colors.rosaEscuro}
    value={vacinas}
    onChangeText={setvacinas}
    mode="outlined"
    outlineColor={colors.rosa}
    activeOutlineColor={colors.rosaEscuro}
    textColor={colors.cinza}
    outlineStyle={{ borderRadius: 20 }}
    contentStyle={{ fontFamily: "Nunito_400Regular" }}
    left={<TextInput.Icon icon="paw" color={colors.rosaEscuro} />}
    style={styles.campo_cabecalho}
/>

<TextInput
    placeholder="*Nome do tutor"
    placeholderTextColor={colors.rosaEscuro}
    value={nome}
    onChangeText={setnome}
    mode="outlined"
    outlineColor={colors.rosa}
    activeOutlineColor={colors.rosaEscuro}
    textColor={colors.cinza}
    outlineStyle={{ borderRadius: 20 }}
    contentStyle={{ fontFamily: "Nunito_400Regular" }}
    left={<TextInput.Icon icon="account-outline" color={colors.rosaEscuro} />}
    style={styles.campo_cabecalho}
/>
                            </View>
                        </View>

                        {/* Botão criar ficha */}
                        <Pressable
                            style={({ pressed }) => [
                                styles.botao_principal,
                                pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }
                            ]}
                            onPress={novavacina}
                        >
                            <View style={styles.botao_principal_conteudo}>
                                <Icon
                                    source="check-circle-outline"
                                    size={22}
                                    color={colors.branco}
                                />
                                <Text style={styles.texto_botao_principal}>
                                    cadastrar vacina
                                </Text>
                            </View>
                        </Pressable>

                    </View>
                </ScrollView>

        
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}