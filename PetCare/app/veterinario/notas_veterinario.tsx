import { Link } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { FAB, Icon, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

export default function Index() {
return (
/*view principal*/
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
        <Link href="./ficha_animal_visualizacao_veterinario" style={styles.seta_voltar}>
            <Image source={require('../../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        {/*view para dar espaço na tela*/}
        <View style={styles.espaco_10}/>
        {/*titulo da tela - NOTAS*/}
        <View style={styles.Titulo_vacina}>
            <Icon source="note-text-outline" size={20} color={colors.verde} />
            <Text style={styles.titulo_vacinas_pagina}>Notas</Text>
        </View>
{/*view das info das notas - card*/}
        <ScrollView style={[styles.view_secundaria_largura, { flex: 1 }]}>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Notas</Text>
                <Text style={styles.dados_exame}>Rodolfo apresentou um machucado na pata esquerda, com acumulo de secreções.</Text>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Recomendações</Text>
                <Text style={styles.dados_exame}>Aplicar pomada 2 vezes ao dia,em caso de dor dar o remédio e evitar que pule de lugares altos</Text>
            </View>
            <View style={[styles.dados_card_exame, { width: "80%", marginBottom: 12 }]}>
                <Text style={styles.titulo_card_exame}>Medicações</Text>
                <Text style={styles.dados_exame}>Vetaglos duas vezes ao dia Dipirona caso tenha dor</Text>
            </View>
        </ScrollView>
        <FAB icon="pencil" style={{position:"absolute",bottom:"5%",right:"5%"}}/>
    </View>
  );
}