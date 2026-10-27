import React, { useState, useEffect } from "react";
import { Link, useLocalSearchParams, router } from "expo-router";
import { Image, Pressable, ScrollView,ImageBackground, View, ActivityIndicator, Alert } from "react-native";
import { FAB, Icon, Text, PaperProvider, Portal } from 'react-native-paper';
import { colors, styles } from '../../../style';

import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore"; 

export default function Index() {
  const { petId } = useLocalSearchParams<{ petId: string }>();
  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }: { open: boolean }) => setState({ open });
  const { open } = state;

  useEffect(() => {
    const carregarFichaDoPet = async () => {
      if (!petId) return;
      const db = getFirestore();
      try {
        const docRef = doc(db, "ficha_pet", petId);
        const docSnap = await getDoc(docRef);

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.rosa }}>
        <ActivityIndicator size="large" color={colors.rosaEscuro} />
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

  const deletar = async () => {
    Alert.alert(
    "Excluir Ficha",
    "Tem certeza de que deseja excluir este pet? Essa ação é permanente e não poderá ser desfeita.", // Mensagem
    [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
  try {
    const db = getFirestore();
    
    const docRef = doc(db, "ficha_pet", petId);
    
    await deleteDoc(docRef);
    router.replace("../menu_veterinario"); 
    
  } catch (error) {
    console.error("Erro ao deletar o documento: ", error);
  }
}
}

    ],
    { cancelable: true }
  );
}

  return (
    /*view principal*/
    <PaperProvider>

    <ImageBackground
        source={require("../../../assets/images/fundo.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >

        {/*view para dar espaço na tela - 10*/}
        <View style={styles.espaco_10}/>
        
        {/*view da ficha*/}
        <ScrollView style={styles.view_secundaria_largura}>
        <View style={styles.view_ficha_criacao}>
            <View style={styles.cabecalho}>

                <View style={styles.cabecalho_titulo_linha}>
                    <Link href="../menu_veterinario" asChild>
                        <Pressable hitSlop={12}>
                            <Icon source="close" size={30} color={colors.branco} />
                        </Pressable>
                    </Link>
                    <Text style={styles.cabecalho_titulo}>Ficha do pet</Text>
                </View>

                {/*view da imagem e nome do pet*/}
                <View style={styles.cabecalho_titulo_linha}>
                    <View>
                        {/* 4. Nome e Dono DINÂMICOS do banco */}
                        <Text style={styles.cabecalho_titulo}>{pet.nomepet}</Text>
                        <Text style={styles.cabecalho_legenda}>Dono: {pet.nometutor}</Text>
                    </View>
                </View>

            </View>

            {/*view do pet e do dono com os dados dinâmicos do Firestore */}
            <View style={[styles.container_secoes_ficha, styles.secoes_ficha_fim]}>

                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="paw" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Animal</Text>
                    </View>

                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Espécie</Text>
                        <Text style={styles.valor_dado}>{pet.especie}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Raça</Text>
                        <Text style={styles.valor_dado}>{pet.raca}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Idade</Text>
                        <Text style={styles.valor_dado}>{pet.idade}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Peso</Text>
                        <Text style={styles.valor_dado}>{pet.peso}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Sexo</Text>
                        <Text style={styles.valor_dado}>{pet.sexo}</Text>
                    </View>
                    <View style={[styles.linha_dado, styles.linha_dado_ultima]}>
                        <Text style={styles.seletor_label}>Castrado</Text>
                        <Text style={styles.valor_dado}>{pet.castrado}</Text>
                    </View>

                </View>

                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="account-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Dono</Text>
                    </View>

                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>CPF</Text>
                        <Text style={styles.valor_dado}>{pet.cpf}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Endereço</Text>
                        <Text style={styles.valor_dado}>{pet.endereco}</Text>
                    </View>
                    <View style={styles.linha_dado}>
                        <Text style={styles.seletor_label}>Telefone</Text>
                        <Text style={styles.valor_dado}>{pet.telefone}</Text>
                    </View>
                    <View style={[styles.linha_dado, styles.linha_dado_ultima]}>
                        <Text style={styles.seletor_label}>Email</Text>
                        <Text style={styles.valor_dado}>{pet.email}</Text>
                    </View>

                </View>

                <View style={styles.linha_2}/>


       
                   
                {/*view das notas dinâmicas*/}
                <View style={styles.card_ficha_novo}>
                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="note-text-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Notas</Text>
                    </View>
                    <Link href={`../notas/notas_veterinario?petId=${petId}`} asChild>
                        <Pressable style={styles.botao_detalhes_rosa}>
                            <Text style={styles.texto_botao_detalhes_rosa}>Detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.card_ficha_novo}>
                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="note-text-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Vacinas</Text>
                    </View>
                    <Link href={`../vacinas/vacinas_veterinario?petId=${petId}`} asChild>
                        <Pressable style={styles.botao_detalhes_rosa}>
                            <Text style={styles.texto_botao_detalhes_rosa}>Detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.card_ficha_novo}>
                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="note-text-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Exames</Text>
                    </View>
                    <Link href={`../exames/exames_veterinario?petId=${petId}`} asChild>
                        <Pressable style={styles.botao_detalhes_rosa}>
                            <Text style={styles.texto_botao_detalhes_rosa}>Detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>
                </View>
                </View>

                </View>
        


      <Portal>
  <FAB.Group
    open={open}
    visible={true}
    icon={open ? 'close' : 'menu'}
      color={colors.branco}
    fabStyle={{ backgroundColor: colors.rosaEscuro }}
    backdropColor="transparent"
    style={{ position: 'absolute', bottom: 15, right: 15 }}
    actions={[
         {
        icon: 'trash-can',
        label: 'Deletar',
        color: colors.branco,
        style: { backgroundColor: colors.alerta },
        labelTextColor: colors.cinza,
        onPress: deletar
      },
      {
        icon: 'pencil',
        label: 'Editar',
        color: colors.rosaEscuro,
        style: { backgroundColor: colors.rosaClaro },
        labelTextColor: colors.cinza,
        onPress: () => router.push({ pathname: "./ficha_animal_editar_veterinario", params: { petId: petId } })
      },
     
      {
        icon: 'share',
        label: 'Compartilhar',
        color: colors.rosaEscuro,
        style: { backgroundColor: colors.rosaClaro },
        labelTextColor: colors.cinza,
        onPress: () => router.push({ pathname: "./ficha_animal_compartilhar_veterinario", params: { petId: petId } })
      }
    ]}
    onStateChange={onStateChange}
    onPress={() => {
      if (open) {
      }
    }}
  />
</Portal>

        </ScrollView>

        
        <View style={styles.espaco_5}/>
     </ImageBackground>
    </PaperProvider>
  );
}