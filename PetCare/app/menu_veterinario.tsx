import { Link } from "expo-router";
import * as React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { BottomNavigation, FAB, Icon, List, Switch, Text } from 'react-native-paper';
import { colors, styles } from '../style';

export default function App() {
  /* codigo pro switch funcionar - vem do componente do react paper*/
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  /*codigo que mostra a tela dos pets/criacao da rota da tela do navbar - vem do componente do react native*/
  const petsRoute = () =>
      /*view principal*/
      <View style={styles.view_principal}>
      {/*view para dar espaco*/}
      <View style={styles.espaco_5}>
      </View>
      {/*nome da pessoa*/}
      <View style={styles.caixa_ola}>
        <Icon source="account" size={20} color={colors.preto} />
        <Text style={styles.titulo_ola}>Olá,(nome da do medico)</Text>
      </View>
      {/*rolagem dos animais*/}
      <ScrollView style={{padding:10}}>
        {/*view exemplo de um animal*/}
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
        <Link href="./ficha_animal_visualizacao_veterinario" asChild>
          <Pressable style={styles.botao_animal}>
            <View style={styles.view_botao}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
            </View>
            <View style={styles.view_animal}>
                <Text style={styles.nomePet}>Rodolfo</Text>
                <Text style={styles.nomeDono}>Dono: (nome do dono)</Text>
            </View>
          </Pressable>
        </Link>
      </ScrollView>
      {/*botao para a criacao de uma nova ficha*/}
      <Link href="./ficha_animal_criacao_veterinario" asChild >
        <FAB icon="plus" style={{position:"absolute",bottom:"3%",right:"3%"}}/>
      </Link>
      </View>;
  /*codigo que mostra a tela das configuracoes*/
  const configRoute = () => 
    /*view principal*/
      <ScrollView style={{ flex: 1, width: "100%", backgroundColor: colors.roxo_fundodatela }}>
        <View style={styles.espaco_10}/>  
        <View style={{ padding: 20 }}>
          <Text variant="titleLarge" style={{fontWeight: 'bold'}}>Configurações</Text>
          <List.Section>
            {/*componente do react native paper*/}
            <List.Item title="Editar Perfil" description="Nome, telefone e foto" left={(props) => <List.Icon {...props} icon="account" />}/>
            {/*linha divisoria*/}
            <View style={styles.linha}/>
            {/*componente do react native paper*/}
            <List.Item title="Alterar Senha" left={props => <List.Icon {...props} icon="lock-reset" />}/>
            {/*linha divisoria*/}
            <View style={styles.linha}/>
            {/*dois componentes do react native paper, o list item e o switch*/}
            <List.Item title="Notificações e Lembretes" description="Receber alertas sobre vacinas pendentes" left={props => <List.Icon {...props} icon="bell-outline" />} right={() => ( <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> )}/>
            {/*linha divisoria*/}
            <View style={styles.linha}/>
            {/*componente do react native paper*/}
            <Link href="./">
              <List.Item title="sair da conta" left={props => <List.Icon {...props} icon="exit-to-app" />}/>
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
      />
    </View>
  );
};