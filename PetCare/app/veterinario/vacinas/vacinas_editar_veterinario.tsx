import { Link, router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Alert, Image, KeyboardAvoidingView,ImageBackground, Platform, Pressable, ScrollView, View} from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

export default function Index() {
    const { vacinasId } = useLocalSearchParams<{ vacinasId: string }>();
    const [vacinas, setvacinas] = useState("");
    const [nome, setnome] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
           const carregarDadosvacinas = async () => {
               if (!vacinasId) return;
               const db = getFirestore();
               try {
                   const docRef = doc(db, "vacinas", vacinasId);
                   const docSnap = await getDoc(docRef);
   
                   if (docSnap.exists()) {
                       const dados = docSnap.data();
                       setnome(dados.nome || "");
                       setvacinas(dados.vacinas || "");
                   } else {
                       Alert.alert("Erro", "Ficha não encontrada.");
                   }
               } catch (error) {
                   console.error("Erro ao carregar dados para edição:", error);
               } finally {
                   setLoading(false);
               }
           };
   
           carregarDadosvacinas();
       }, [vacinasId]);
   
       const editarvacina = async () => {
           if ( !nome || !vacinas
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
           const docRef = doc(db, "vacinas", vacinasId);
   
           try {
               await updateDoc(docRef, {
               nome,
               vacinas,
           }
       );
   
       router.push({
           pathname: "./vacinas_detalhes_veterinario",
           params: {
               vacinasId: vacinasId
           }
       });
   } catch (error) {
       console.error("Erro ao  alterações:", error);
   
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
                    source={require("../../../assets/images/fundo.png")}
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
                            onPress={editarvacina}
                        >
                            <View style={styles.botao_principal_conteudo}>
                                <Icon
                                    source="check-circle-outline"
                                    size={22}
                                    color={colors.branco}
                                />
                                <Text style={styles.texto_botao_principal}>
                                    atualizar vacina
                                </Text>
                            </View>
                        </Pressable>

                    </View>
                </ScrollView>

        
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}