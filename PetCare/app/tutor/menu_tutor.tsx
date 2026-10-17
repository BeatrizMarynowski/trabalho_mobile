import { Link } from "expo-router";
import * as React from 'react';
import { Image, Pressable, ScrollView, View, ActivityIndicator } from 'react-native';
import { FAB, BottomNavigation, Icon, List, Switch, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [pets, setPets] = React.useState<any[]>([]);
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
      collection(db, "ficha_pet"),
      where("tutorId", "==", usuarioLogado.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaPets = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPets(listaPets);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao carregar os pets do tutor:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const petsRoute = () => (
      /*view principal*/
      <View style={styles.view_principal}>
        {/*view para dar espaco*/}
        <View style={styles.espaco_5}/>
        
        {/*nome da pessoa*/}
        <View style={styles.caixa_ola}>
          <Icon source="account" size={20} color={colors.preto} />
          <Text style={styles.titulo_ola}>Olá</Text>
        </View>
        
        {/*rolagem dos animais*/}
        <ScrollView style={{padding:10}}>
          
          {loading ? (
            <ActivityIndicator size="large" color={colors.verde} style={{ marginTop: 20 }} />
          ) : pets.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Você ainda não escaneou nenhum pet.</Text>
          ) : (
            pets.map((pet) => (
              <Link 
                key={pet.id} 
                href={`./ficha_animal_visualizacao_tutor?petId=${pet.id}`} 
                asChild
              >
                <Pressable style={styles.botao_animal}>
                    <View style={styles.view_botao}>
                        <Image source={require("../../assets/images/rodolfo.png")} style={styles.foto_animal}/>
                    </View>
                    <View style={styles.view_animal}>
                        <Text style={styles.nomePet}>{pet.nomepet}</Text>
                        <Text style={styles.nomeDono}>Dono: {pet.nometutor}</Text>
                    </View>
                </Pressable>
              </Link>

            ))
          )}
        </ScrollView>
      <Link href="./scan_qr_tutor" asChild >
        <FAB icon="plus" style={{position:"absolute",bottom:"3%",right:"3%"}}/>
      </Link>
      </View>
  );

  const configRoute = () => (
      <ScrollView style={{ flex: 1, width: "100%", backgroundColor: colors.roxo_fundodatela }}>
        <View style={styles.espaco_10}/>  
        <View style={{ padding: 20 }}>
          <Text variant="titleLarge" style={{fontWeight: 'bold'}}>Configurações</Text>
          <List.Section>
            <List.Item title="Editar Perfil" description="Nome, telefone e foto" left={(props) => <List.Icon {...props} icon="account" />}/>
            <View style={styles.linha}/>
            <List.Item title="Alterar Senha" left={props => <List.Icon {...props} icon="lock-reset" />}/>
            <View style={styles.linha}/>
            <List.Item title="Notificações e Lembretes" description="Receber alertas sobre vacinas pendentes" left={props => <List.Icon {...props} icon="bell-outline" />} right={() => ( <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> )}/>
            <View style={styles.linha}/>
            <Link href="/">
              <List.Item title="Sair da conta" left={props => <List.Icon {...props} icon="exit-to-app" />}/>
            </Link>
          </List.Section>
        </View>
    </ScrollView>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'pets', title: 'Pets', focusedIcon: 'paw' },
    { key: 'configuracoes', title: 'Ajustes', focusedIcon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pets: petsRoute,
    configuracoes: configRoute,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};
