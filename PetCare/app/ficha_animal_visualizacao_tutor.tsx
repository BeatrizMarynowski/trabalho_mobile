import { Link } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { Icon, Text } from 'react-native-paper';
import { colors, styles } from '../style';

export default function Index() {
return (
/*view principal*/
    <View style={styles.view_principal}>
{/*seta que volta para o menu*/}
        <Link href="./menu_tutor" style={styles.seta_voltar}>
            <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
{/*view para dar espaço na tela - 10*/}
        <View style={styles.espaco_10}/>
{/*view da ficha*/}
        <ScrollView style={styles.view_secundaria_largura}>
        {/*view da ficha*/}
        <View style={styles. view_ficha}>
            {/*view da imagem e nome do pet*/}
            <View style={styles.cabecalho}>
                <Image source={require("../assets/images/rodolfo.png")} style={styles.foto_animal}/>
                <View>
                    <Text style={styles.nomePet}>Rodolfo</Text>
                    <Text style={styles.nomeDono}>Dono: Leonardo Menegazzo </Text> 
                </View>
            </View>
            {/*view do pet e do dono*/}
            <View style={styles.view_das_info}>
                <View style={styles.dados_animal_e_dono}>
                    <View style={styles.dados_div_animal_dono}>
                        <Text style={styles.titulo_verde_pequeno}>Animal</Text>
                        <Text style={styles.dadosTexto}>Espécie: gato</Text>
                        <Text style={styles.dadosTexto}>Raça: persa</Text>
                        <Text style={styles.dadosTexto}>Idade: 2 anos</Text>
                        <Text style={styles.dadosTexto}>Peso: 7Kg</Text>
                        <Text style={styles.dadosTexto}>Sexo: macho</Text>
                        <Text style={styles.dadosTexto}>Castrado: sim</Text>
                    </View>
                    <View style={styles.dados_div_animal_dono}>
                        <Text style={styles.titulo_verde_pequeno}>Dono</Text>
                        <Text style={styles.dadosTexto}>CPF: 000.111.222-44</Text>
                        <Text style={styles.dadosTexto}>Endereço: Rua Rio Libéria, 456</Text>
                        <Text style={styles.dadosTexto}>Telefone: 41 90321-9645</Text>
                        <Text style={styles.dadosTexto}>Email: leozinhodograu@gmail.com</Text>
                    </View>
                </View>
            </View>
            {/*linha divisoria*/}
            <View style={styles.linha} />
            {/*view das vacinas*/}          
            <View style={styles.view_das_info}>
                {/*nome bonitin*/}  
                <View style={styles.Titulo_div}>
                    <Icon source="needle" size={18} color={colors.verde} />
                    <Text style={styles.titulo_conf}>Vacinas</Text>
                </View>
                {/*cards da vacina*/}
                <View style={styles.vacinasLista}>
                    <View style={styles.vacina_card}>
                        <Text style={styles.vacina_nome}>Polivalente</Text>
                        <View style={styles.statusSelo_verde}>
                            <View style={styles.pontovac_verde} />
                            <Text style={styles.statusTexto}>Em dia</Text>
                        </View>
                    </View>
                    <View style={styles.vacina_card}>
                        <Text style={styles.vacina_nome}>Antirrábica</Text>
                        <View style={styles.statusSelo_vemelho}>
                            <View style={styles.pontovac_vermelho} />
                            <Text style={styles.statusTexto}>Atrasada</Text>
                        </View>
                    </View>
                </View>
                {/*link dos detalhes*/}
                <Link href="./vacinas_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text><Icon source="chevron-right" size={14} color={colors.roxo_escuro}/>
                    </Pressable>
                </Link>
            </View>
            {/*linha divisoria*/}
            <View style={styles.linha}/>
            {/*view dos exames*/} 
            <View style={styles.view_das_info}>
                {/*nome bonitin*/}
                <View style={styles.Titulo_div}> 
                    <Icon source="flask-outline" size={18} color={colors.verde} /> 
                    <Text style={styles.titulo_conf}>Exames</Text>
                </View>
                {/*card dos exames*/}
                <View style={styles.dados_card_exame}>
                    <Text style={styles.titulo_card_exame}>Hemograma completo</Text>
                    <Text style={styles.dados_exame}>dr. Carlos Silva</Text>
                    <Text style={styles.dados_exame}>22/02/2222</Text>
                </View>
                {/*link dos detalhes*/}
                <Link href="./exames_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text>
                        <Icon source="chevron-right" size={14} color={colors.roxo_escuro} />
                    </Pressable>
                </Link>
            </View>
            {/*linha divisoria*/}
            <View style={styles.linha}/>
            {/*view das notas*/} 
            <View style={styles.view_das_info}>
                {/*nome bonitin*/}
                <View style={styles.Titulo_div}>
                    <Icon source="note-text-outline" size={18} color={colors.verde}/>
                    <Text style={styles.titulo_conf}>Notas</Text>
                </View>
                {/*card das notas*/}
                <View style={styles.dados_card_exame}>
                    <Text style={styles.dados_exame}>dr. Carlos Silva</Text>
                    <Text style={styles.titulo_card_exame}>Informação</Text>
                </View>
                {/*link dos detalhes*/}
                <Link href="./notas_tutor" asChild>
                    <Pressable style={styles.botaodetalhes}>
                        <Text style={styles.texto_botao_detalhes}>detalhes</Text>
                        <Icon source="chevron-right" size={14} color={colors.roxo_escuro}/>
                    </Pressable>
                </Link>
            </View>
        </View>
        </ScrollView>
        {/*view para dar espaço na tela - 5*/}
        <View style={styles.espaco_5}/>
    </View>
  );
}