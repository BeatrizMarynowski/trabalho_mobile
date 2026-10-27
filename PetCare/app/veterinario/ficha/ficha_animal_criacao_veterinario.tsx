import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView,ImageBackground, Platform, Pressable, ScrollView, View} from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";
import { colors, styles } from "../../../style";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";

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

    const novopet = async () => {
        if ( !nomepet || !nometutor || !especie || !raca || !idade || !peso || !sexo || !castrado || !cpf || !endereco || !telefone || !email
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
    const petDocRef = await addDoc(
        collection(db, "ficha_pet"),
        {
            nomepet,
            nometutor,
            especie,
            raca,
            idade,
            peso,
            sexo,
            castrado,
            cpf,
            endereco,
            telefone,
            email,
            vetId: user?.uid
        }
    );
    
    const notasDocRef = doc(collection(db, "notas"));
    const setnotasDocRef = await addDoc(
        collection(db, "notas"),
        {
            notaId: notasDocRef,
            petId: petDocRef.id,
            vetId: user?.uid
        }
    );

    router.push({
        pathname: "./ficha_animal_compartilhar_veterinario",
        params: {
            petId: petDocRef.id,
            petNome: nomepet
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
                                <Link href="../menu_veterinario" asChild>
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
    value={nomepet}
    onChangeText={setnomepet}
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
    value={nometutor}
    onChangeText={setnometutor}
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

                        {/* Dados do animal e do tutor */}
                        <View style={styles.container_secoes_ficha}>

                            {/* Dados do animal */}
                            <View style={styles.card_ficha_novo}>

                                <View style={styles.titulo_secao_ficha}>
                                    <Icon
                                        source="paw"
                                        size={22}
                                        color={colors.rosaEscuro}
                                    />

                                    <Text style={styles.texto_titulo_secao_ficha}>
                                        Dados do animal
                                    </Text>
                                </View>

                                <TextInput
                                    label="*Espécie"
                                    value={especie}
                                    onChangeText={setespecie}
                                    mode="outlined"
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="paw" color={colors.rosaEscuro} />}
                                />

                                <TextInput
                                    label="*Raça"
                                    value={raca}
                                    onChangeText={setraca}
                                    mode="outlined"
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="dog" color={colors.rosaEscuro} />}
                                />

                                {/* Idade e peso lado a lado */}
                                <View style={styles.linha_campos}>

                                    <TextInput
                                        label="*Idade"
                                        value={idade}
                                        onChangeText={setidade}
                                        mode="outlined"
                                        keyboardType="numeric"
                                        style={styles.campo_ficha_metade}
                                        outlineColor={colors.rosa}
                                        activeOutlineColor={colors.rosaEscuro}
                                        textColor={colors.cinza}
                                        outlineStyle={{ borderRadius: 22 }}
                                        contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                        left={<TextInput.Icon icon="calendar" color={colors.rosaEscuro} />}
                                    />

                                    <TextInput
                                        label="*Peso"
                                        value={peso}
                                        onChangeText={setpeso}
                                        mode="outlined"
                                        keyboardType="decimal-pad"
                                        style={styles.campo_ficha_metade}
                                        outlineColor={colors.rosa}
                                        activeOutlineColor={colors.rosaEscuro}
                                        textColor={colors.cinza}
                                        outlineStyle={{ borderRadius: 22 }}
                                        contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                        left={<TextInput.Icon icon="weight" color={colors.rosaEscuro} />}
                                    />

                                </View>

                                {/* Sexo */}
                                <View style={styles.seletor_container}>
                                    <Text style={styles.seletor_label}>*Sexo do animal</Text>

                                    <View style={styles.seletor_opcoes}>
                                        {[
                                            { valor: "Fêmea", icone: "gender-female" },
                                            { valor: "Macho", icone: "gender-male" }
                                        ].map((opcao) => (
                                            <Pressable
                                                key={opcao.valor}
                                                onPress={() => setsexo(opcao.valor)}
                                                style={[
                                                    styles.seletor_opcao,
                                                    sexo === opcao.valor && styles.seletor_opcao_ativa
                                                ]}
                                            >
                                                <View style={styles.seletor_conteudo}>
                                                    <Icon
                                                        source={opcao.icone}
                                                        size={18}
                                                        color={sexo === opcao.valor ? colors.branco : colors.rosaEscuro}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.seletor_texto,
                                                            sexo === opcao.valor && styles.seletor_texto_ativo
                                                        ]}
                                                    >
                                                        {opcao.valor}
                                                    </Text>
                                                </View>
                                            </Pressable>
                                        ))}
                                    </View>
                                </View>

                                {/* Castrado */}
                                <View style={styles.seletor_container}>
                                    <Text style={styles.seletor_label}>*O animal é castrado?</Text>

                                    <View style={styles.seletor_opcoes}>
                                        {[
                                            { valor: "Sim", icone: "check" },
                                            { valor: "Não", icone: "close" }
                                        ].map((opcao) => (
                                            <Pressable
                                                key={opcao.valor}
                                                onPress={() => setcastrado(opcao.valor)}
                                                style={[
                                                    styles.seletor_opcao,
                                                    castrado === opcao.valor && styles.seletor_opcao_ativa
                                                ]}
                                            >
                                                <View style={styles.seletor_conteudo}>
                                                    <Icon
                                                        source={opcao.icone}
                                                        size={18}
                                                        color={castrado === opcao.valor ? colors.branco : colors.rosaEscuro}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.seletor_texto,
                                                            castrado === opcao.valor && styles.seletor_texto_ativo
                                                        ]}
                                                    >
                                                        {opcao.valor}
                                                    </Text>
                                                </View>
                                            </Pressable>
                                        ))}
                                    </View>
                                </View>

                            </View>

                            {/* Dados do tutor */}
                            <View style={styles.card_ficha_novo}>

                                <View style={styles.titulo_secao_ficha}>
                                    <Icon
                                        source="account-outline"
                                        size={22}
                                        color={colors.rosaEscuro}
                                    />

                                    <Text style={styles.texto_titulo_secao_ficha}>
                                        Dados do tutor
                                    </Text>
                                </View>

                                <TextInput
                                    label="*CPF"
                                    value={cpf}
                                    onChangeText={setcpf}
                                    mode="outlined"
                                    keyboardType="numeric"
                                    maxLength={14}
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="card-account-details-outline" color={colors.rosaEscuro} />}
                                />

                                <TextInput
                                    label="*Endereço"
                                    value={endereco}
                                    onChangeText={setendereco}
                                    mode="outlined"
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="map-marker-outline" color={colors.rosaEscuro} />}
                                />

                                <TextInput
                                    label="*Telefone"
                                    value={telefone}
                                    onChangeText={settelefone}
                                    mode="outlined"
                                    keyboardType="phone-pad"
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="phone-outline" color={colors.rosaEscuro} />}
                                />

                                <TextInput
                                    label="*E-mail"
                                    value={email}
                                    onChangeText={setemail}
                                    mode="outlined"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    style={styles.campo_ficha_rosa}
                                    outlineColor={colors.rosa}
                                    activeOutlineColor={colors.rosaEscuro}
                                    textColor={colors.cinza}
                                    outlineStyle={{ borderRadius: 22 }}
                                    contentStyle={{ fontFamily: "Nunito_400Regular" }}
                                    left={<TextInput.Icon icon="email-outline" color={colors.rosaEscuro} />}
                                />

                            </View>

                        </View>

                        {/* Divisor */}
                        <View style={styles.linha_2} />

                        {/* Notas e exames */}
        

                        {/* Botão criar ficha */}
                        <Pressable
                            style={({ pressed }) => [
                                styles.botao_principal,
                                pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }
                            ]}
                            onPress={novopet}
                        >
                            <View style={styles.botao_principal_conteudo}>
                                <Icon
                                    source="check-circle-outline"
                                    size={22}
                                    color={colors.branco}
                                />
                                <Text style={styles.texto_botao_principal}>
                                    Criar ficha
                                </Text>
                            </View>
                        </Pressable>

                    </View>
                </ScrollView>
                
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}