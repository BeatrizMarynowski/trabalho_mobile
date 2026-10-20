import { Link, router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Alert, Image, ScrollView, View, Pressable } from "react-native";
import { FAB, Icon, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export default function Index() {
    const { petId } = useLocalSearchParams<{ petId: string }>();
    const [vacinas, setvacinas] = React.useState<any[]>([]);
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
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
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
                Carregando vaconas...
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
              vacinas.map((vacinas) => (
                  <View style={styles.botao_animal}>
                      <Text style={styles.nomePet}>{vacinas.vacinas}</Text>
                        </View>
                        ))
                      )}
              </ScrollView>
        <FAB icon="pencil" style={{position:"absolute",bottom:"5%",right:"5%"}}/>
        <FAB icon="plus" style={{position:"absolute",bottom:"15%",right:"5%"}}/>
    </View>
  );
}