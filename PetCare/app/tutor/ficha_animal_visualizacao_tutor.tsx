import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router"; // 1. Importa para pegar o petId da rota
import { Image, Pressable, ScrollView, View, ActivityIndicator } from "react-native";
import { Icon, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

// 2. Importações do Firestore
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

export default function Index() {
  const { petId } = useLocalSearchParams<{ petId: string }>(); // Captura o ID do pet enviado pela lista
  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarFichaDoPet = async () => {
      if (!petId) return;
      const db = getFirestore();
      try {
        const docRef = doc(db, "ficha_pet", petId);
        const docSnap = await getDoc(docRef); // 3. Busca o pet no Firestore pelo ID

        if (docSnap.exists()) {
          setPet(docSnap.data());
        } else {
          console.log("Ficha não encontrada!");
        }
      } catch (error) {
        console.error("Erro ao carregar dados do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarFichaDoPet();
  }, [petId]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.roxo_fundodatela }}>
        <ActivityIndicator size="large" color={colors.verde} />
      </View>
    );
  }

  if (!pet) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Ficha do pet não encontrada.</Text>
      </View>
    );
  }

  return (
    /*view principal*/
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
        <Link href="./menu_tutor" style={styles.seta_voltar}>
            <Image source={require('../../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela - 10*/}
        <View style={styles.espaco_10}/>
        
        {/*view da ficha*/}
        <ScrollView style={styles.view_secundaria_largura}>
        <View style={styles.view_ficha}>
            {/*view da imagem e nome do pet*/}
            <View style={styles.cabecalho}>
                <Image source={require("../../assets/images/rodolfo.png")} style={styles.foto_animal}/>
                <View>
                    {/* 4. Nome e Dono DINÂMICOS do banco */}
                    <Text style={styles.nomePet}>{pet.nomepet}</Text>
                    <Text style={styles.nomeDono}>Dono: {pet.nometutor}</Text> 
                </View>
            </View>
            
            {/*view do pet e do dono com os dados dinâmicos do Firestore */}
            <View style={styles.view_das_info}>
                <View style={styles.dados_animal_e_dono}>
                    <View style={styles.dados_div_animal_dono}>
                        <Text style={styles.titulo_verde_pequeno}>Animal</Text>
                        <Text style={styles.dadosTexto}>Espécie: {pet.especie}</Text>
                        <Text style={styles.dadosTexto}>Raça: {pet.raca}</Text>
                        <Text style={styles.dadosTexto}>Idade: {pet.idade}</Text>
                        <Text style={styles.dadosTexto}>Peso: {pet.peso}</Text>
                        <Text style={styles.dadosTexto}>Sexo: {pet.sexo}</Text>
                        <Text style={styles.dadosTexto}>Castrado: {pet.castrado}</Text>
                    </View>
                    <View style={styles.dados_div_animal_dono}>
                        <Text style={styles.titulo_verde_pequeno}>Dono</Text>
                        <Text style={styles.dadosTexto}>CPF: {pet.cpf}</Text>
                        <Text style={styles.dadosTexto}>Endereço: {pet.endereco}</Text>
                        <Text style={styles.dadosTexto}>Telefone: {pet.telefone}</Text>
                        <Text style={styles.dadosTexto}>Email: {pet.email}</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.linha}/>
            
            {/*view das vacinas*/}          
            <View style={styles.view_das_info}>
                <View style={styles.Titulo_div}>
                    <Icon source="needle" size={18} color={colors.verde} />
                    <Text style={styles.titulo_conf}>Vacinas</Text>
                </View>
                <View style={styles.vacinasLista}>
                    <View style={styles.vacina_card}>
                        <Text style={styles.vacina_nome}>Polivalente</Text>
                        <View style={styles.statusSelo_verde}>
                            <View style={styles.pontovac_verde} />
                            <Text style={styles.statusTexto}>Em dia</Text>
                        </View>
                    </View>
                    <View style={styles.vacina_card}>
                        <Text style={styles.vacina_nome}>Antirrábica</Text>
                        <View style={styles.statusSelo_vemelho}>
                            <View style={styles.pontovac_vermelho} />
                            <Text style={styles.statusTexto}>Atrasada</Text>
                        </View>
                    </View>
                </View>
                <Link href="./vacinas_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text>
                        <Icon source="chevron-right" size={14} color={colors.roxo_escuro} />
                    </Pressable>
                </Link>
            </View>
            
            <View style={styles.linha}/>
            
            {/*view dos exames*/} 
            <View style={styles.view_das_info}>
                <View style={styles.Titulo_div}> 
                    <Icon source="flask-outline" size={18} color={colors.verde} /> 
                    <Text style={styles.titulo_conf}>Exames</Text>
                </View>
                <View style={styles.dados_card_exame}>
                    <Text style={styles.titulo_card_exame}>Hemograma completo</Text>
                    <Text style={styles.dados_exame}>dr. Carlos Silva</Text>
                    <Text style={styles.dados_exame}>22/02/2222</Text>
                </View>
                <Link href="./exames_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text>
                        <Icon source="chevron-right" size={14} color={colors.roxo_escuro} />
                    </Pressable>
                </Link>
            </View>
            
            <View style={styles.linha}/>
            
            {/*view das notas dinâmicas*/} 
            <View style={styles.view_das_info}>
                <View style={styles.Titulo_div}>
                    <Icon source="note-text-outline" size={18} color={colors.verde} />
                    <Text style={styles.titulo_conf}>Notas</Text>
                </View>
                <View style={styles.dados_card_exame}>
                    <Text style={styles.dados_exame}>dr. Carlos Silva</Text>
                    {/* Exibe as notas criadas na ficha */}
                    <Text style={styles.titulo_card_exame}>{pet.notas || "Sem observações."}</Text>
                </View>
                <Link href="./notas_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text>
                        <Icon source="chevron-right" size={14} color={colors.roxo_escuro} />
                    </Pressable>
                </Link>
            </View>
        </View>
        </ScrollView>
        <View style={styles.espaco_5}/>
    </View>
  );
}