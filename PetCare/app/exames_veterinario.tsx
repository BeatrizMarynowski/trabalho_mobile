import { Link } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { FAB, Icon, Text } from 'react-native-paper';
import { colors, styles } from '../style';

export default function Index() {
return (
/*view principal*/
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
        <Link href="./ficha_animal_visualizacao_veterinario" style={styles.seta_voltar}>
            <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*view das info dos exames*/}
        <ScrollView style={[styles.view_secundaria_largura, { flex: 1 }]}>
            <View style={styles.Titulo_vacina}>
                <Icon source="flask-outline" size={20} color={colors.verde} />
                <Text style={styles.titulo_vacinas_pagina}>Exames</Text>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Hemograma completo</Text>
                <Text style={styles.dados_exame}>Dr. carlos silva</Text>
                <Text style={styles.dados_exame}>19/04/2</Text>
                <View style={[styles.statusSelo_verde, { marginTop: 4 }]}>
                    <View style={styles.pontovac_verde} />
                    <Text style={styles.statusTexto}>Normal</Text>
                </View>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Hemograma completo</Text>
                <Text style={styles.dados_exame}>Dr. carlos silva</Text>
                <Text style={styles.dados_exame}>01/04/2</Text>
                <View style={[styles.statusSelo_vemelho, { marginTop: 4 }]}>
                    <View style={styles.pontovac_vermelho} />
                    <Text style={styles.statusTexto}>Alterado</Text>
                </View>
            </View>
            <View  style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Ultrasom abdominal</Text>
                <Text style={styles.dados_exame}>Fr. carlos silva</Text>
                <Text style={styles.dados_exame}>19/04/2</Text>
                <View style={[styles.statusSelo_amarelo, { marginTop: 4 }]}>
                    <View style={styles.pontovac_amarelo} />
                    <Text style={styles.statusTexto}>Parcialmente alterado</Text>
                </View>
            </View>
        </ScrollView>
        <FAB icon="pencil" style={{position:"absolute",bottom:"5%",right:"5%"}}/>
    </View>
  );
}