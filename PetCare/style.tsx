import { StyleSheet } from "react-native";

/* ========================================================================
   CORES
   ======================================================================== */

export const colors = {
  // Base
  branco: "#ffffff",
  preto: "#030303",
  cinza: "#4A5759",
  fundodatela: "#E4EBD6",

  // Verdes
  medio: "#6E8060", // cabeçalhos e caixas dentro dos cartões (verde_cinza)
  claro: "#A3B18A", // cards internos e botões (verde sálvia)
  verde: "#3ecf8e",
  verdeFundo: "#183642",

  // Status
  alerta: "#e05757",
  alertafundo: "#e0575733",
  amarelo: "#e0c357",
  amarelofundo: "#e0c35733",

  // Rosas
  bem_claro: "#FBC4D5",
  rosa: "#E8B4C3",
  rosaClaro: "#F8E8EC",
  rosaEscuro: "#B96F89",
  rosaFundo: "#F3DDE4",
  rosaCampo: "#FBEFF2",
  rosaCard: "#FFF9FA",
  rosaBotao: "#DB7C9C",

  // Roxos (tela do veterinário)
  roxo_fundodatela: "#ae98cc",
  roxo_escuro: "#271033",
};

/* ========================================================================
   HELPERS E BASES REUTILIZADAS
   ======================================================================== */

const sombra = (color: string, height: number, opacity: number, radius: number) => ({
  shadowColor: color,
  shadowOffset: { width: 0, height },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

const imagemPataBase = {
  height: "100%",
  resizeMode: "contain",
  alignSelf: "center",
  opacity: 0.8,
} as const;

const seloBase = {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  borderRadius: 999,
  paddingHorizontal: 10,
  paddingVertical: 3,
} as const;

const pontoBase = {
  width: 8,
  height: 8,
  borderRadius: 4,
} as const;

const textoBrancoNegrito = {
  color: colors.branco,
  fontWeight: "bold",
} as const;

const botaoIndexBase = {
  width: "80%",
  height: "35%",
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  elevation: 4,
  ...sombra(colors.cinza, 4, 0.25, 6),
} as const;

const botaoPerfilBase = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: 14,
  padding: 14,
  borderRadius: 20,
} as const;

const quadroBotaoBase = {
  width: 76,
  height: 76,
  borderRadius: 22,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
} as const;

const campoFichaBase = {
  backgroundColor: colors.rosaClaro,
  borderRadius: 22,
} as const;

const seletorBase = {
  backgroundColor: colors.rosaClaro,
  borderWidth: 1,
  borderColor: colors.rosa,
  borderRadius: 999,
  alignItems: "center",
  justifyContent: "center",
} as const;

/* ========================================================================
   ESTILOS
   ======================================================================== */

export const styles = StyleSheet.create({
  /* ---------- Padrão (maioria das telas) ---------- */

  view_principal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.fundodatela,
  },
  container: {
    flex: 1,
  },
  view_secundaria_largura: {
    width: "100%",
  },

  /* ---------- Seta de voltar ---------- */

  imagem_seta: {
    width: 25,
    height: 25,
  },
  seta_voltar: {
    position: "absolute",
    top: "6%",
    left: "5%",
  },
  posicao_seta: {
    position: "absolute",
    top: "50%",
    left: "8%",
    zIndex: 5,
  },
  posicao_seta2: {
    position: "absolute",
    top: "70%",
    left: "8%",
    zIndex: 5,
  },

  /* ---------- Espaçamentos ---------- */

  espaco_5: {
    width: "100%",
    height: "5%",
  },
  espaco_10: {
    width: "100%",
    height: "10%",
  },
  espaco_topo_ficha: {
    width: "100%",
    height: 60,
  },

  /* ---------- Index ---------- */

  view_20: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    padding: "10%",
  },
  view_25: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    padding: "10%",
  },
  view_metade: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  index_titulo: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 26,
    color: colors.cinza,
    textAlign: "center",
    marginBottom: 4,
    paddingHorizontal: 24,
  },
  texto_conecte: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: colors.cinza,
    textAlign: "center",
    opacity: 0.8,
    paddingHorizontal: 32,
  },
  fonteFredoka: {
    fontFamily: "Fredoka_600SemiBold",
  },
  pressable_c: {
    ...botaoIndexBase,
    backgroundColor: colors.bem_claro,
    marginTop: 60,
  },
  pressable_l: {
    ...botaoIndexBase,
    backgroundColor: colors.claro,
    marginTop: 7,
  },

  /* ---------- Imagens decorativas ---------- */

  imagem_pets: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    opacity: 0.7,
  },
  imagem_pata: {
    ...imagemPataBase,
    width: "70%",
  },
  imagem_pata2: {
    ...imagemPataBase,
    width: "70%",
    marginTop: 20,
  },
  imagem_pata_cadastro: {
    ...imagemPataBase,
    width: "80%",
    marginTop: 40,
  },

  /* ---------- Entrada: cadastro e login ---------- */

  cadastro_card: {
    width: "85%",
    height: "60%",
    padding: "10%",
    gap: "2%",
    alignItems: "center",
    backgroundColor: colors.cinza,
    borderRadius: 32,
  },
  bemvindo_titulo: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    lineHeight: 35,
    color: colors.branco,
    textAlign: "center",
  },
  bemvindo_linha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  bemvindo_pet: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    lineHeight: 30,
    color: colors.claro,
  },
  bemvindo_sub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    color: colors.branco,
    textAlign: "center",
  },
  botao_cad_tut: {
    ...botaoPerfilBase,
    backgroundColor: colors.bem_claro,
    marginTop: 40,
  },
  botao_cad_vet: {
    ...botaoPerfilBase,
    backgroundColor: colors.claro,
    marginTop: 15,
  },
  botao_perfil_titulo: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 17,
    color: colors.cinza,
  },
  botao_perfil_sub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: colors.cinza,
  },
  link_login: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 14,
    color: colors.branco,
    textDecorationLine: "underline",
    textDecorationColor: colors.branco,
    marginTop: 6,
  },

  /* ---------- Formulários (login, cadastro, esqueceu a senha) ---------- */

  form_card: {
    width: "85%",
    backgroundColor: colors.bem_claro,
    borderRadius: 32,
    overflow: "hidden",
  },
  form_cabecalho: {
    backgroundColor: colors.medio,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  form_titulo_linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  form_titulo: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    lineHeight: 36,
    color: colors.branco,
    textAlign: "center",
  },
  form_titulo_destaque: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    lineHeight: 36,
    color: colors.bem_claro,
  },
  form_sub: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: colors.branco,
    textAlign: "center",
  },
  form_campos: {
    padding: 18,
    gap: 12,
    alignItems: "center",
  },
  form_link: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: colors.cinza,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  campo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.rosaCampo,
    borderRadius: 24,
    padding: 8,
  },
  campo_icone: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: colors.bem_claro,
    alignItems: "center",
    justifyContent: "center",
  },
  campo_input: {
    flex: 1,
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    color: colors.cinza,
  },
  form_botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.rosaBotao,
    borderRadius: 998,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 8,
  },
  form_botao_texto: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 18,
    color: colors.branco,
  },
  form_botao_texto_email_rec: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 16.1,
    color: colors.branco,
  },

  /* ---------- Menu (tutor e veterinário) ---------- */

  caixa_ola: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.fundodatela,
  },
  caixa_ola_rosa: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 30,
    backgroundColor: "transparent",
  },
  titulo_ola: {
    color: colors.cinza,
    fontSize: 16,
    fontWeight: "bold",
  },
  botao_animal: {
    width: "100%",
    minHeight: 112,
    backgroundColor: colors.branco,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 14,
    elevation: 3,
    ...sombra(colors.cinza, 3, 0.1, 6),
  },
  view_botao: {
    ...quadroBotaoBase,
    backgroundColor: colors.bem_claro,
  },
  view_botao_sem_rosa: {
    ...quadroBotaoBase,
  },
  view_animal: {
    flex: 1,
    minHeight: 76,
    paddingLeft: 14,
    justifyContent: "center",
    gap: 4,
  },

  /* ---------- Ficha do animal: visualização ---------- */

  view_ficha: {
    width: "90%",
    backgroundColor: colors.cinza,
    borderRadius: 24,
    overflow: "hidden",
    alignSelf: "center",
  },
  view_das_info: {
    width: "100%",
    padding: 16,
    gap: 10,
  },
  foto_animal: {
    width: 70,
    height: 70,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: colors.bem_claro,
  },
  nomePet: {
    color: colors.cinza,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  nomeDono: {
    color: colors.cinza,
    opacity: 0.75,
    fontSize: 13,
  },
  dados_animal_e_dono: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  dados_div_animal_dono: {
    flex: 1,
    backgroundColor: colors.medio,
    borderRadius: 16,
    padding: 12,
    gap: 4,
  },
  titulo_verde_pequeno: {
    color: colors.verde,
    fontWeight: "bold",
    marginBottom: 4,
  },
  dadosTexto: {
    color: colors.branco,
    opacity: 0.9,
    fontSize: 13,
  },
  linha: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medio,
  },

  /* ---------- QR Code (compartilhar ficha) ---------- */

  compartilha: {
    width: "90%",
    height: "43%",
    backgroundColor: colors.cinza,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  view_do_qr: {
    width: "100%",
    height: "100%",
    padding: 16,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  qr_tamanho: {
    width: "70%",
    height: "70%",
    backgroundColor: colors.claro,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: colors.verde,
  },

  /* ---------- Vacinas, exames e notas (tutor e veterinário) ---------- */

  Titulo_div: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  titulo_conf: {
    color: colors.verde,
    fontWeight: "bold",
    fontSize: 16,
  },
  titulo_vacinas_pagina: {
    color: colors.verde,
    fontWeight: "bold",
    fontSize: 18,
  },
  Titulo_vacina: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
    width: "32%",
    backgroundColor: colors.cinza,
    borderRadius: 16,
    alignSelf: "center",
    padding: 8,
  },
  vacinasLista: {
    flexDirection: "row",
    gap: 10,
  },
  vacina_card: {
    flex: 1,
    backgroundColor: colors.claro,
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    gap: 6,
  },
  vacina_nome: {
    ...textoBrancoNegrito,
  },
  dados_card_exame: {
    width: "100%",
    backgroundColor: colors.claro,
    borderRadius: 16,
    padding: 12,
    gap: 2,
    alignSelf: "center",
  },
  titulo_card_exame: {
    ...textoBrancoNegrito,
  },
  dados_exame: {
    color: colors.branco,
    opacity: 0.7,
    fontSize: 12,
  },

  /* ---------- Selos de status ---------- */

  statusSelo_verde: {
    ...seloBase,
    backgroundColor: colors.verdeFundo,
  },
  statusSelo_vemelho: {
    ...seloBase,
    backgroundColor: colors.alertafundo,
  },
  statusSelo_amarelo: {
    ...seloBase,
    backgroundColor: colors.amarelofundo,
  },
  pontovac_verde: {
    ...pontoBase,
    backgroundColor: colors.verde,
  },
  pontovac_vermelho: {
    ...pontoBase,
    backgroundColor: colors.alerta,
  },
  pontovac_amarelo: {
    ...pontoBase,
    backgroundColor: colors.amarelo,
  },
  statusTexto: {
    color: colors.branco,
    fontWeight: "bold",
    fontSize: 12,
  },

  /* ---------- Botão de detalhes ---------- */

  botaodetalhes: {
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 2,
    backgroundColor: colors.verde,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 5,
  },
  texto_botao_detalhes: {
    color: colors.cinza,
    fontWeight: "bold",
    fontSize: 12,
  },

  /* ---------- Ficha do animal: criação (veterinário) ---------- */

  view_ficha_criacao: {
    width: "90%",
    backgroundColor: colors.rosaFundo,
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
  },
  cabecalho: {
    width: "100%",
    backgroundColor: colors.rosaEscuro,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cabecalho_titulo_linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  cabecalho_titulo: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 24,
    color: colors.branco,
  },
  cabecalho_campos: {
    width: "100%",
    gap: 12,
  },
  cabecalho_legenda: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    color: colors.branco,
    marginBottom: 4,
  },
  campo_cabecalho: {
    backgroundColor: colors.rosaClaro,
    borderRadius: 20,
  },
  container_secoes_ficha: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 14,
    paddingTop: 18,
    gap: 18,
  },
  card_ficha_novo: {
    width: "100%",
    backgroundColor: colors.rosaCard,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.rosa,
    elevation: 2,
    ...sombra(colors.rosaEscuro, 2, 0.1, 5),
  },
  titulo_secao_ficha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 10,
  },
  texto_titulo_secao_ficha: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 20,
    color: colors.rosaEscuro,
  },
  linha_2: {
    width: "90%",
    height: 1,
    backgroundColor: colors.rosa,
    alignSelf: "center",
    marginTop: 12,
  },
  linha_campos: {
    flexDirection: "row",
    gap: 10,
  },

  /* ---------- Campos da ficha ---------- */

  campo_ficha_rosa: {
    ...campoFichaBase,
    width: "100%",
    marginBottom: 14,
    fontSize: 16,
  },
  campo_ficha_metade: {
    ...campoFichaBase,
    flex: 1,
    marginBottom: 14,
    fontSize: 16,
  },
  campo_ficha_multilinha_m: {
    ...campoFichaBase,
    width: "100%",
    minHeight: 120,
    marginBottom: 4,
    fontSize: 12,
  },

  /* ---------- Seletores de opções ---------- */

  seletor_container: {
    width: "100%",
    marginBottom: 16,
    gap: 10,
  },
  seletor_label: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.rosaEscuro,
  },
  seletor_opcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },
  seletor_opcao: {
    ...seletorBase,
    flex: 1,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  seletor_opcao_ativa: {
    backgroundColor: colors.rosaEscuro,
    borderColor: colors.rosaEscuro,
    elevation: 2,
    ...sombra(colors.rosaEscuro, 2, 0.25, 4),
  },
  seletor_conteudo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  seletor_texto: {
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.cinza,
  },
  seletor_texto_ativo: {
    color: colors.branco,
  },

  /* ---------- Botão principal (criar ficha) ---------- */

  botao_principal: {
    backgroundColor: colors.rosaEscuro,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 22,
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  botao_principal_conteudo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  texto_botao_principal: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 18,
    color: colors.branco,
  },
});
