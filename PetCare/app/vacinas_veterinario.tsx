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
            <Image source={require('../assets/images/seta_v.png')}  style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*titulo da tela - VACINA*/}
        <View style={styles.Titulo_vacina}>
            <Icon source="needle" size={20} color={colors.verde} />
            <Text style={styles.titulo_vacinas_pagina}>Vacinas</Text>
        </View>
        {/*view das info dos exames*/}
        <ScrollView style={[styles.view_secundaria_largura, { flex: 1 }]}>
            <View  style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]} >
                <Text style={styles.titulo_card_exame}>Antirrábica:</Text>
                <Text  style={styles.dados_exame}>Protege contra a raiva, doença fatal transmissível a humanos</Text>
                <View style={styles.statusSelo_verde}>
                    <View style={styles.pontovac_verde} />
                    <Text style={styles.statusTexto}>R$120,00</Text>
                </View>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>V3:</Text>
                <Text  style={styles.dados_exame}>Protege contra Panleucopenia, calicivirose e rinotraqueíte</Text>
                <View style={styles.statusSelo_verde}>
                    <View style={styles.pontovac_verde} />
                    <Text style={styles.statusTexto}>R$80,00</Text>
                </View>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>V4:</Text>
                <Text  style={styles.dados_exame}>Protege  contra as doenças da V3 + clamidiose </Text>
            <View style={styles.statusSelo_verde}>
                <View style={styles.pontovac_verde} />
                <Text style={styles.statusTexto}>R$100,00</Text>
            </View>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>V5:</Text>
                <Text  style={styles.dados_exame}>Inclui as defesas da V4 + proteção contra a FeLV</Text>
                <View style={styles.statusSelo_verde}>
                    <View style={styles.pontovac_verde} />
                    <Text style={styles.statusTexto}>R$120,00</Text>
                </View>
            </View>
    </ScrollView>
     <FAB icon="pencil" style={{position:"absolute",bottom:"5%",right:"5%"}}/>
 </View>
  );
}