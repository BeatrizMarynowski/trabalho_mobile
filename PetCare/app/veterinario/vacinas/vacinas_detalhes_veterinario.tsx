import * as React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Alert, Image, ScrollView, View, Pressable, ActivityIndicator } from "react-native";
import { FAB, Icon, PaperProvider, Text, Portal } from 'react-native-paper';
import { colors, styles } from '../../../style';

import { getFirestore, collection, onSnapshot, query, where, deleteDoc, doc, getDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export default function Index() {
    const { vacinasId, petId } = useLocalSearchParams<{ vacinasId: string; petId: string; }>();
    const [vacinas, setvacinas] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }: { open: boolean }) => setState({ open });
    const { open } = state;

    
      React.useEffect(() => {
          const carregarvacina = async () => {
            if (!vacinasId) return;
            const db = getFirestore();
            try {
              const docRef = doc(db, "vacinas", vacinasId);
              const docSnap = await getDoc(docRef);
      
              if (docSnap.exists()) {
                setvacinas(docSnap.data());
              } else {
                console.log("Ficha não encontrada!");
              }
            } catch (error) {
              console.error("Erro ao carregar dados do pet:", error);
            } finally {
              setLoading(false);
            }
          };
      
          carregarvacina();
        }, [vacinasId]);

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
          
          const docRef = doc(db, "vacinas", vacinasId);
          
          await deleteDoc(docRef);
          router.replace({
          pathname: "./vacinas_veterinario",
          params: {
              petId: petId
          }
          }); 
          
        } catch (error) {
          console.error("Erro ao deletar o documento: ", error);
        }
      }
      }
      
          ],
          { cancelable: true }
        );
      }

      if (loading) {
          return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.rosa }}>
              <ActivityIndicator size="large" color={colors.rosaEscuro} />
            </View>
          );
        }
return (
/*view principal*/
    <PaperProvider>
      <View style={styles.view_principal}>
        <Link
                  key={petId}
                  href={`./vacinas_veterinario?petId=${petId}`}
                  style={styles.seta_voltar}
                >
            <Image source={require('../../../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*titulo da tela - NOTAS*/}
        <View style={styles.Titulo_vacina}>
            <Icon source="note-text-outline" size={20} color={colors.verde} />
            <Text style={styles.titulo_vacinas_pagina}>{vacinas.nome}</Text>
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
            <Text style={styles.nomePet}>{vacinas.nome}</Text>
            <Text style={styles.nomePet}>{vacinas.vacinas}</Text>
              </ScrollView>
              
              
        <Portal>
          <FAB.Group
            open={open}
            visible={true}
            icon={open ? 'close' : 'menu'}
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
                onPress: () => router.push({ pathname: "./vacinas_editar_veterinario", params: { vacinasId: vacinasId } })
              }
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