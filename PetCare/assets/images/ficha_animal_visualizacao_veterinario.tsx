import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, Pressable, ScrollView, View } from "react-native";
import { Icon, Text } from 'react-native-paper';
import { colors, styles } from '../../style';

import { getFirestore, doc, getDoc } from "firebase/firestore"; 

/* combinações de estilos que já existem (nada novo no style.js) */
const linhaDado = [styles.linha_campos, { marginBottom: 12, alignItems: "flex-start" as const }];
const valorDado = [styles.botao_perfil_sub, { flex: 1, textAlign: "right" as const }];
const caixaTexto = [styles.campo_ficha_rosa, { padding: 14, marginBottom: 0 }];
const botaoDetalhes = [styles.botaodetalhes, { backgroundColor: colors.rosaEscuro, marginTop: 12 }];
const textoDetalhes = [styles.texto_botao_detalhes, { color: colors.branco }];

export default function Index() {
  const { petId } = useLocalSearchParams<{ petId: string }>();
  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarFichaDoPet = async () => {
      if (!petId) return;
      const db = getFirestore();
      try {
        const docRef = doc(db, "ficha_pet", petId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPet(docSnap.data());
        } else {
          console.log("Ficha não encontrada!");
        }
      } catch (error) {
        console.error("Erro ao carregar dados do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarFichaDoPet();
  }, [petId]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.fundodatela }}>
        <ActivityIndicator size="large" color={colors.rosaEscuro} />
      </View>
    );
  }

  if (!pet) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.fundodatela }}>
        <Text style={{ color: colors.cinza }}>Ficha do pet não encontrada.</Text>
      </View>
    );
  }

  return (
    /*view principal*/
    <View style={styles.view_principal}>

        {/* Espaço superior */}
        <View style={styles.espaco_topo_ficha} />

        {/*view da ficha*/}
        <ScrollView
          style={styles.view_secundaria_largura}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        >
        <View style={styles.view_ficha_criacao}>

            {/* Cabeçalho */}
            <View style={styles.cabecalho}>

                <View style={styles.cabecalho_titulo_linha}>
                    <Link href="./menu_veterinario" asChild>
                        <Pressable hitSlop={12}>
                            <Icon source="arrow-left" size={30} color={colors.branco} />
                        </Pressable>
                    </Link>

                    <Text style={styles.cabecalho_titulo}>Ficha do pet</Text>

                    {/* editar (ainda sem ação) */}
                    <Pressable hitSlop={12} style={{ marginLeft: "auto" }}>
                        <Icon source="pencil-outline" size={26} color={colors.branco} />
                    </Pressable>
                </View>

                {/*foto e nome do pet*/}
                <View style={[styles.cabecalho_titulo_linha, { marginBottom: 0 }]}>
                    <Image source={require("../../assets/images/rodolfo.png")} style={styles.foto_animal}/>
                    <View>
                        <Text style={styles.cabecalho_titulo}>{pet.nomepet}</Text>
                        <Text style={styles.cabecalho_legenda}>Dono: {pet.nometutor}</Text>
                    </View>
                </View>

            </View>

            <View style={[styles.container_secoes_ficha, { paddingBottom: 20 }]}>

                {/* Dados do animal */}
                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="paw" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Dados do animal</Text>
                    </View>

                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Espécie</Text>
                        <Text style={valorDado}>{pet.especie}</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Raça</Text>
                        <Text style={valorDado}>{pet.raca}</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Idade</Text>
                        <Text style={valorDado}>{pet.idade}</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Peso</Text>
                        <Text style={valorDado}>{pet.peso} kg</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Sexo</Text>
                        <Text style={valorDado}>{pet.sexo}</Text>
                    </View>
                    <View style={[linhaDado, { marginBottom: 0 }]}>
                        <Text style={styles.seletor_label}>Castrado</Text>
                        <Text style={valorDado}>{pet.castrado}</Text>
                    </View>

                </View>

                {/* Dados do tutor */}
                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="account-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Dados do tutor</Text>
                    </View>

                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>CPF</Text>
                        <Text style={valorDado}>{pet.cpf}</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Endereço</Text>
                        <Text style={valorDado}>{pet.endereco}</Text>
                    </View>
                    <View style={linhaDado}>
                        <Text style={styles.seletor_label}>Telefone</Text>
                        <Text style={valorDado}>{pet.telefone}</Text>
                    </View>
                    <View style={[linhaDado, { marginBottom: 0 }]}>
                        <Text style={styles.seletor_label}>E-mail</Text>
                        <Text style={valorDado}>{pet.email}</Text>
                    </View>

                </View>

                <View style={styles.linha_2} />

                {/*view das vacinas*/}
                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="needle" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Vacinas</Text>
                    </View>

                    <View style={caixaTexto}>
                        <Text style={styles.botao_perfil_sub}>
                            {pet.vacinas || "Nenhuma vacina registrada."}
                        </Text>
                    </View>

                    <Link href={`./vacinas_veterinario?petId=${petId}`} asChild>
                        <Pressable style={botaoDetalhes}>
                            <Text style={textoDetalhes}>detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>

                </View>

                {/*view dos exames*/}
                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="flask-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Exames</Text>
                    </View>

                    <View style={caixaTexto}>
                        <Text style={styles.botao_perfil_sub}>
                            {pet.exames || "Nenhum exame registrado."}
                        </Text>
                    </View>

                    <Link href={`./exames_veterinario?petId=${petId}`} asChild>
                        <Pressable style={botaoDetalhes}>
                            <Text style={textoDetalhes}>detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>

                </View>

                {/*view das notas*/}
                <View style={styles.card_ficha_novo}>

                    <View style={styles.titulo_secao_ficha}>
                        <Icon source="note-text-outline" size={22} color={colors.rosaEscuro} />
                        <Text style={styles.texto_titulo_secao_ficha}>Notas</Text>
                    </View>

                    <View style={caixaTexto}>
                        <Text style={styles.botao_perfil_sub}>
                            {pet.notas || "Sem observações."}
                        </Text>
                    </View>

                    <Link href={`./notas_veterinario?petId=${petId}`} asChild>
                        <Pressable style={botaoDetalhes}>
                            <Text style={textoDetalhes}>detalhes</Text>
                            <Icon source="chevron-right" size={14} color={colors.branco} />
                        </Pressable>
                    </Link>

                </View>

            </View>
        </View>
        </ScrollView>
    </View>
  );
}
