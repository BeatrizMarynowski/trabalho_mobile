import { Link, router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Alert, ImageBackground, ScrollView, View, Pressable, TouchableOpacity } from "react-native";
import { FAB, Icon, PaperProvider, Text} from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, collection, onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [vacinas, setvacinas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;

        if (!usuarioLogado) {
          setLoading(false);
          return;
        }
    
        const q = query( collection(db, "vacinas"),
          where("petId", "==", petId)
        );
    
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const listavacinas = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setvacinas(listavacinas);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao carregar os seus pets:", error);
            setLoading(false);
        });
    
        return () => unsubscribe();
    }, [petId]);

    const deletar = async (vacinasId: string) => {
        Alert.alert(
        "Excluir Ficha",
        "Tem certeza de que deseja excluir este pet? Esta ação não pode ser desfeita.",
        [{
            text: "Cancelar",
            style: "cancel"
            },
            {
              text: "Excluir",
              style: "destructive",
              onPress: async () => {
        try {
            const db = getFirestore();
          
            const docRef = doc(db, "vacinas", vacinasId);
          
            await deleteDoc(docRef);
          
        } catch (error) {console.error("Erro ao deletar o documento: ", error);}
        }}],
    { cancelable: true });
    } 
return (
    <PaperProvider>
        <ImageBackground source={require("../../assets/images/fundo.png")} style={{ flex: 1 }} resizeMode="cover">
            <Link key={petId} href={`./ficha_animal_visualizacao_tutor?petId=${petId}`} style={styles.posicao_seta}>
                <Icon source="arrow-left" size={35} color={colors.cinza} />
            </Link>

            <View style={styles.espaco_10}/>
            <View style={styles.card_resumo}>
                <View style={styles.card_resumo_textos}>
                    <Text style={styles.card_resumo_titulo}>Vacinas</Text>
                    <Text style={styles.card_resumo_descricao}>Acompanhe as vacinas dos animais sob seus cuidados.</Text>
                </View>
            </View>
  
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{paddingHorizontal: "5%", paddingTop: 5, paddingBottom: 100,}}>
                {loading ? (
                    <Text style={{ color: colors.cinza, textAlign: "center" }}>Carregando vacinas...</Text>
                ) : vacinas.length === 0 ? (
                    <View>
                        <View style={styles.vacinas_vazio}>
                            <Icon source="paw" size={55} color={colors.claro} />
                            <Text style={styles.vacinas_vazio_titulo}>Nenhuma vacina registrada</Text>
                            <Text style={styles.vacinas_vazio_descricao}>Nenhuma vacina adicionada.</Text>
                        </View>
                    </View>
                ) : (
                vacinas.map((vacina) => (
                    <View key={vacina.id} style={styles.card_vacina}>
                        <View style={styles.card_vacina_icone}>
                            <Icon source="needle" size={26} color={colors.branco}/>
                        </View>
                        <View style={styles.card_vacina_textos}>

                            <Text style={styles.card_vacina_titulo}>{vacina.vacina}</Text>
                            <Text style={styles.card_vacina_descricao}>Aplicação: {vacina.aplicacao}</Text>
                            {vacina.proximadose ? (
                                <Text style={styles.card_vacina_data}>Próxima dose: {vacina.proximadose}</Text>
                            ) : null}
                            {vacina.observacoes ? (
                                <Text style={styles.card_vacina_data}>Observação: {vacina.observacoes}</Text>
                            ) : null}

                        </View>
                        <View style={styles.card_vacina_acoes}>
                        </View>
                    </View>))
                )}
            </ScrollView>
        </ImageBackground>
    </PaperProvider>
  );
}