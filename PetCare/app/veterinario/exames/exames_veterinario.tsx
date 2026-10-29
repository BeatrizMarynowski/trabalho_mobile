import * as React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Alert, Image, ImageBackground, ScrollView, View, Pressable, TouchableOpacity } from "react-native";
import { FAB, Icon, PaperProvider, Text, Portal } from 'react-native-paper';
import { colors, styles } from '../../../style';

import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [exame, setExame] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);
    
      React.useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;
        
    
        if (!usuarioLogado) {
          setLoading(false);
          return;
        }
    
        const q = query(
          collection(db, "exame"),
          where("vetId", "==", usuarioLogado.uid),
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
return (
/*view principal*/
    <PaperProvider>
      <ImageBackground
            source={require("../../../assets/images/fundo.png")}
            style={{ flex: 1 }}
            resizeMode="cover"
          >

             <Link key={petId}
                  href={`./ficha_animal_visualizacao_veterinario?petId=${petId}`} style={styles.posicao_seta}>
          <Icon source="arrow-left" size={35} color={colors.cinza} />
        </Link>

        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*titulo da tela - NOTAS*/}
        <TouchableOpacity activeOpacity={0.85} style={styles.card_resumo}>
  <View style={styles.card_resumo_icone}>
    <Icon source="flask-outline" size={24} color={colors.branco} />
  </View>

  <View style={styles.card_resumo_textos}>
    <Text style={styles.card_resumo_titulo}>Exames</Text>
    <Text style={styles.card_resumo_descricao}>
      Acompanhe os exames dos animais sob seus cuidados.
    </Text>
  </View>


</TouchableOpacity>
  

{/*view das info das notas - card*/}

<ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              paddingHorizontal: "5%",
              paddingTop: 5,
              paddingBottom: 100,
            }}
            showsVerticalScrollIndicator={false}
          >
            {loading ? (
    <Text style={{ color: colors.cinza, textAlign: "center" }}>
        Carregando exames...
    </Text>
) : exame.length === 0 ? (
    <Link
        href={`../ficha/ficha_animal_visualizacao_veterinario?petId=${petId}`}
        asChild
    >
        <Pressable>
            <View style={styles.vacinas_vazio}>
                <Icon source="paw" size={55} color={colors.claro} />

                <Text style={styles.vacinas_vazio_titulo}>
                    Nenhum exame registrado
                </Text>

                <Text style={styles.vacinas_vazio_descricao}>
                    Nenhuma exame adicionado.
                </Text>
            </View>
        </Pressable>
    </Link>
) : (
   exame.map((exame) => (
    <View key={exame.id} style={styles.card_vacina}>
        <View style={styles.card_vacina_icone}>
            <Icon
                source="flask-outline"
                size={26}
                color={colors.branco}
            />
        </View>

        <View style={styles.card_vacina_textos}>
            <Text style={styles.card_vacina_titulo}>
                {exame.exame || "Exame"}
            </Text>

            <Text style={styles.card_vacina_descricao}>
                Data: {exame.dataAplicacao || "Não informada"}
            </Text>

            {exame.resultado ? (
                <Text style={styles.card_vacina_data}>
                    Resultado: {exame.resultado}
                </Text>              
            ) : null}
            
                {exame.observacoes ? (
          <Text style={styles.card_vacina_data}>
              Observação: {exame.observacoes}
          </Text>
      ) : null}
        </View>
        <View style={styles.card_vacina_acoes}>
    <TouchableOpacity>
        <Icon
            source="trash-can-outline"
            size={22}
            color={colors.rosaEscuro}
        />
    </TouchableOpacity>

    <TouchableOpacity>
        <Icon
            source="pencil-outline"
            size={22}
            color={colors.rosaEscuro}
        />
    </TouchableOpacity>
</View>
    </View>
    
    ))
)}
</ScrollView>
        <Portal>
          <FAB
          icon="plus"
          color={colors.branco}
          style={{
              position: "absolute",
              bottom: 30,
              right: 15,
              backgroundColor: colors.rosaEscuro,
          }}
          onPress={() =>
              router.push({
                  pathname: "./exames_criar_veterinario",
                  params: { petId: petId },
              })
          }
/>
        </Portal>
    </ImageBackground>
    </PaperProvider>
  );
}