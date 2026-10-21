import { Link } from "expo-router";
import * as React from 'react';
import { Image, Pressable, ScrollView, ImageBackground, View } from 'react-native';
import { BottomNavigation, FAB, Icon, List, Switch, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

export default function App() {
  /* codigo pro switch funcionar - vem do componente do react paper*/
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
      where("vetId", "==", usuarioLogado.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listaPets = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPets(listaPets);
      setLoading(false);
    }, (error) => {
      console.error("Erro ao carregar os seus pets:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  /*codigo que mostra a tela dos pets/criacao da rota da tela do navbar - vem do componente do react native*/
   const petsRoute = () => (
      /*view principal*/

  <ImageBackground
    source={require("../../assets/images/fundo_rosa.png")}
    style={{ flex: 1 }}
    resizeMode="cover"
  >
    <View style={[styles.view_principal, { backgroundColor: "transparent" }]}>
  {/* Espaço no topo */}
  <View style={styles.espaco_5} />
      
      {/*nome da pessoa*/}
     <View style={styles.caixa_ola_rosa}>
  <View style={{
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
  }}>
    <Icon source="paw" size={22} color={colors.medio} />
  </View>

  <View style={{ flex: 1 }}>
    <Text style={styles.titulo_ola}>
      Olá, Doutor(a)! ♡
    </Text>

    <Text style={{ fontSize: 14, color: colors.medio, marginTop: 3 }}>
      Vamos cuidar dos seus pacientes?
    </Text>
  </View>
</View>
<View style={{
  width: "93%",
  backgroundColor: colors.branco,
  borderRadius: 12,
  padding: 15,
  marginBottom: 12,
}}>
  <Text style={{ fontSize: 15, color: colors.medio }}>
    SEUS PACIENTES
  </Text>

  <Text style={{
    fontSize: 25,
    fontWeight: "bold",
    color: colors.cinza,
    marginTop: 3,
  }}>
    Meus pets 🐾
  </Text>

  <Text style={{
    fontSize: 12,
    color: colors.cinza,
    marginTop: 3,
  }}>
    Acompanhe as fichas dos animais sob seus cuidados.
  </Text>
</View>

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
        Carregando pacientes...
      </Text>
    ) : pets.length === 0 ? (
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
          Nenhum paciente ainda
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: colors.cinza,
            textAlign: "center",
            marginTop: 6,
          }}
        >
          Adicione uma ficha para começar a acompanhar seus pacientes.
        </Text>
      </View>
    ) : (
      pets.map((pet) => (
        <Link
          key={pet.id}
          href={`./ficha_animal_visualizacao_veterinario?petId=${pet.id}`}
          asChild
        >



          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao_sem_rosa}>
              <Image source={require("../../assets/images/cachorro_gato_abracados.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
              <Text style={styles.nomePet}>{pet.nomepet}</Text>
                  <Text style={styles.nomeDono}>Dono: {pet.nometutor}</Text>
                   <Text style={{ color: colors.medio,fontSize: 12,marginTop: 5,fontWeight: "bold",  }}    >
                Ver ficha  →
              </Text>
                </View>
                 <Icon
              source="chevron-right"
              size={24}
              color={colors.claro}
            />
                </Pressable>
              </Link>
                ))
              )}
      </ScrollView>


      {/*botao para a criacao de uma nova ficha*/}
      <Link href="./ficha_animal_criacao_veterinario" asChild>
  <Pressable style={{
    width: "96%",
    backgroundColor: colors.medio,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  }}>
    <Icon source="plus-circle-outline" size={18} color={colors.branco} />

    <Text style={{
      color: colors.branco,
      fontSize: 13,
      fontWeight: "bold",
    }}>
      Cadastrar nova ficha
    </Text>
  </Pressable>
</Link>
        </View>
  </ImageBackground>
);

  /*codigo que mostra a tela das configuracoes*/
  const configRoute = () => 
    /*view principal*/
       <ScrollView style={{ flex: 1, width: "100%", backgroundColor: colors.rosaClaro }}>
        <View style={styles.espaco_10}/>  
        <View style={{ padding: 20 }}>
          
           <Text variant="titleLarge" style={styles.tituloPrincipal}>Configurações</Text>

           <List.Section style={[styles.secao, { gap: 0, marginTop: 16 }]}>
            {/*componente do react native paper*/}
           
  
          <List.Item
            title="Editar Perfil"
            description="Nome, telefone e foto"
            titleStyle={styles.botao_perfil_titulo}
            descriptionStyle={styles.botao_perfil_sub}
            left={(props) => <List.Icon {...props} icon="account" color={colors.medio} />}/>
            {/*linha divisoria*/}
             <View style={[styles.linha, { opacity: 0.3 }]}/>
            {/*componente do react native paper*/}
            <List.Item
              title="Alterar Senha"
              titleStyle={styles.botao_perfil_titulo}
              left={props => <List.Icon {...props} icon="lock-reset" color={colors.medio} />}
            />
            {/*linha divisoria*/}
            <View style={[styles.linha, { opacity: 0.3 }]}/>
            {/*dois componentes do react native paper, o list item e o switch*/}
            <List.Item
            title="Notificações e Lembretes"
            titleNumberOfLines={2}
            description="Receber alertas sobre vacinas pendentes"
            descriptionNumberOfLines={2}
            titleStyle={styles.botao_perfil_titulo}
            descriptionStyle={styles.botao_perfil_sub}
            style={{ paddingRight: 0 }}
            left={props => <List.Icon {...props} icon="bell-outline" color={colors.medio} />}
            right={() => (
              <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={colors.medio}
                style={{ transform: [{ translateX: 1 }, { translateY: 12 }, { scale: 0.9 }] }}
              />
            )}
          />
         
        
            {/*linha divisoria*/}
            <View style={[styles.linha, { opacity: 0.3 }]}/>
            {/*componente do react native paper*/}
            <Link href="/">
            <List.Item
              title="Sair da conta"
              titleStyle={[styles.botao_perfil_titulo, { color: colors.alerta }]}
              left={props => <List.Icon {...props} icon="exit-to-app" color={colors.alerta} />}
            />
          </Link>
          </List.Section>
        </View>
    </ScrollView>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'pets', title: 'Pets', focusedIcon: 'paw' },
    { key: 'configuracoes', title: 'Ajustes', focusedIcon: 'cog' },
  ]);

  /*essa eh a parte que configura o bottomnavigation(isso foi pego como componente pronto do react paper)*/
  const renderScene = BottomNavigation.SceneMap({
    pets: petsRoute,
    configuracoes: configRoute,
  });

  /*essa realmente seria a tela - vem do componente do react paper*/
  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        activeColor={colors.medio}
        inactiveColor={colors.cinza}
        barStyle={{
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E4EBD6",
          height: "10%",
        }}
      />
    </View>
  );
};
