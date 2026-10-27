import * as React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Alert, Image, ImageBackground, ScrollView, View, Pressable, TouchableOpacity } from "react-native";
import { FAB, Icon, PaperProvider, Text, Portal } from 'react-native-paper';
import { colors, styles } from '../../../style';

import { getFirestore, collection, onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [vacinas, setvacinas] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }: { open: boolean }) => setState({ open });
    const { open } = state;

    
      React.useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const usuarioLogado = auth.currentUser;
        
    
        if (!usuarioLogado) {
          setLoading(false);
          return;
        }
    
        const q = query(
          collection(db, "vacinas"),
          where("vetId", "==", usuarioLogado.uid),
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
    <Icon source="needle" size={24} color={colors.branco} />
  </View>

  <View style={styles.card_resumo_textos}>
    <Text style={styles.card_resumo_titulo}>Vacinas</Text>
    <Text style={styles.card_resumo_descricao}>
      Acompanhe as vacinas dos animais sob seus cuidados.
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
                Carregando vacinas...
              </Text>
            ) : vacinas.length === 0 ? (
              <Link 
              key={petId}
              href={`../ficha/ficha_animal_visualizacao_veterinario?petId=${petId}`}
              asChild>
              <Pressable>
              <View style={{ alignItems: "center", marginTop: 35, padding: 20 }}>
                <Icon source="paw" size={55} color={colors.claro} />
        
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: colors.cinza,
                    marginTop: 12,
                  }}
                >
                  Nenhuma vacinas registrada
                </Text>
        
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.cinza,
                    textAlign: "center",
                    marginTop: 6,
                  }}
                >
                  nenhuma vacina adiconada.
                </Text>
              </View>
              </Pressable>
              </Link>
            ) : (
              vacinas.map((vacina) => (
              <Link 
                key={`${vacina.petId}_${vacina.vacinasId}`}
                href={`./vacinas_detalhes_veterinario?vacinasId=${vacina.vacinasId}&petId=${vacina.petId}`}
                asChild
              >
              <Pressable>
                  <View key={vacina.id} style={styles.botao_animal}>
                      <Text style={styles.nomePet}>{vacina.nome}</Text>
                        </View>
                        </Pressable>
              </Link>
                        ))
                      )}
              </ScrollView>
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
                icon: 'plus',
                label: 'Adicionar',
                 color: colors.rosaEscuro,
                        style: { backgroundColor: colors.rosaClaro },
                        labelTextColor: colors.cinza,
                onPress: () => router.push({ pathname: "./vacinas_criar_veterinario", params: { petId: petId } })
              }
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
        </Portal>
    </ImageBackground>
    </PaperProvider>
  );
}