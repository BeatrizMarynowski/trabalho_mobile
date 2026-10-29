import { Link, router, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Alert, ImageBackground, ScrollView, View } from "react-native";
import { FAB, Icon, PaperProvider, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, collection, onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [exames, setExame] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;
    
        if (!usuarioLogado) {
          setLoading(false);
          return;
        }
    
        const q = query( collection(db, "exames"),
          where("petId", "==", petId)
        );
    
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const listaexame = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setExame(listaexame);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao carregar os seus pets:", error);
            setLoading(false);
        });
    
        return () => unsubscribe();
      }, [petId]);

      const deletar = async (examesId: string) => {
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
          
            const docRef = doc(db, "exames", examesId);
          
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
                    <Text style={styles.card_resumo_titulo}>Exames</Text>
                    <Text style={styles.card_resumo_descricao}>Acompanhe os exames dos animais sob seus cuidados.</Text>
                </View>
            </View>

            <ScrollView style={{ width: "100%" }} contentContainerStyle={{paddingHorizontal: "5%",paddingTop: 5,paddingBottom: 100,}}>
                {loading ? (
                    <Text style={{ color: colors.cinza, textAlign: "center" }}>Carregando exames...</Text>
                ) : exames.length === 0 ? (
                    <View>
                        <View style={styles.vacinas_vazio}>
                            <Icon source="paw" size={55} color={colors.claro}/>
                            <Text style={styles.vacinas_vazio_titulo}>Nenhum exame registrado</Text>
                            <Text style={styles.vacinas_vazio_descricao}>Nenhum exame adicionado.</Text>
                        </View>
                    </View>
                ) : (
                exames.map((exame) => (
                    <View key={exame.id} style={styles.card_vacina}>
                        <View style={styles.card_vacina_icone}>
                            <Icon source="flask-outline" size={26} color={colors.branco}/>
                        </View>
                        <View style={styles.card_vacina_textos}>

                            <Text style={styles.card_vacina_titulo}>{exame.exame}</Text>
                            <Text style={styles.card_vacina_descricao}>Data: {exame.aplicacao}</Text>
                            {exame.resultado ? (
                                <Text style={styles.card_vacina_data}>Resultado: {exame.resultado}</Text>
                            ) : null}
                            {exame.observacoes ? (
                                <Text style={styles.card_vacina_data}>Observação: {exame.observacoes}</Text>
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