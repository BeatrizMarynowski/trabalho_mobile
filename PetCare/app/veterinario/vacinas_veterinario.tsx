import * as React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Alert, Image, ScrollView, View, Pressable } from "react-native";
import { FAB, Icon, PaperProvider, Text, Portal } from 'react-native-paper';
import { colors, styles } from '../../style';

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

      const deletar = async () => {
          Alert.alert(
          "Excluir Ficha", // Título da caixinha
          "Tem certeza de que deseja excluir este pet? Esta ação não pode ser desfeita.", // Mensagem
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
          router.replace("./menu_veterinario"); 
          
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
      <View style={styles.view_principal}>
        <Link
                  key={petId}
                  href={`./ficha_animal_visualizacao_veterinario?petId=${petId}`}
                  style={styles.seta_voltar}
                >
            <Image source={require('../../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*titulo da tela - NOTAS*/}
        <View style={styles.Titulo_vacina}>
            <Icon source="note-text-outline" size={20} color={colors.verde} />
            <Text style={styles.titulo_vacinas_pagina}>Vacinas</Text>
        </View>
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
            ) : (
              vacinas.map((vacina) => (
                  <View key={vacina.id} style={styles.botao_animal}>
                      <Text style={styles.nomePet}>{vacina.vacinas}</Text>
                        </View>
                        ))
                      )}
              </ScrollView>
        <Portal>
        <FAB.Group
        open={open}
        visible={true}
        icon={open ? 'close' : 'plus'}
        backdropColor="transparent"
        style={{position: 'absolute',bottom: 16,right: 16}}
        actions={[
            { icon: 'pencil', label: 'Editar', onPress: () => router.push({pathname: "./ficha_animal_editar_veterinario",params: {petId: petId}})},
            { icon: 'trash-can', label: 'Deletar', onPress: (deletar),},
        ]}
        onStateChange={onStateChange}
        onPress={() => {
            if (open) {
            }
        }}
        />
      </Portal>
    </View>
    </PaperProvider>
  );
}