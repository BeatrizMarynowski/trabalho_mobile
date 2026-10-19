import { StyleSheet} from 'react-native';


export const colors = {
 fundodatela: "#E4EBD6", 
  cinza: "#4A5759",       
  medio: "#6E8060",        // cabeçalhos e caixas dentro dos cartões (verde_cinza)
  claro: "#A3B18A",        // cards internos e botões (verde sálvia)
  bem_claro: "#FBC4D5", 

  branco: "#ffffff",
  preto: "#030303",
  verde: "#3ecf8e",         
  verdeFundo: "#183642",   
  alerta: "#e05757",        
  alertafundo: "#e0575733",
  amarelo: "#e0c357",
  amarelofundo: "#e0c35733",

  rosa: "#E8B4C3",
  rosaClaro: "#F8E8EC",
  rosaEscuro: "#B96F89",
  rosaFundo: "#F3DDE4",

  roxo_fundodatela: "#ae98cc",
  roxo_escuro: "#271033",    
  roxo_medio: "#3d2154",     
  roxo_claro: "#54326e",
  roxo_bem_claro: "#dfbcfc", 
};


export const styles = StyleSheet.create({
  /*  PADRÃO TODAS (maioria) AS TELAS */ 

    view_principal:{
    flex: 1,
    alignItems:"center", 
    backgroundColor: colors.fundodatela
    },

  /* Configuração da Seta */

    imagem_seta:{
        width:25,
        height:25
  }, 

    seta_voltar: {
      position: "absolute",
      top: "6%",
      left: "5%",
    
  },
   posicao_seta:{
        position:"absolute",
        top:"50%",
        left:"8%",
        zIndex:5
  },
    posicao_seta2:{
        position:"absolute",
        top:"70%",
        left:"8%",
        zIndex:5
  },

  
  /*INDEX*/
  view_20: {
    width:"100%",
    height:"20%",
    alignItems:"center",
    padding:"10%"
  },
  
  view_25: {
    width:"100%",
    height:"25%",
    alignItems:"center",
    padding:"10%"
  },
  view_30: {
    width:"100%",
    height:"30%",
    alignItems:"center",
    padding:"10%"
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
    textAlign: "center",
    color: colors.cinza,
    opacity: 0.8,
    fontSize: 16,
    paddingHorizontal: 32,
  },

 
  /*espacos de tela*/
  espaco_5:{
    width:"100%",
    height:"5%"
  },
  espaco_10: {
    width: "100%",
    height: "10%",
  },
  imagem_pets: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
     opacity: 0.7,
    
  },
  imagem_pata: {
    width: "70%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
     opacity: 0.8,
  },

    imagem_pata2: {
    marginTop: 20,
    width: "70%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
     opacity: 0.8,

    
  },
  imagem_pata_cadastro: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
     opacity: 0.8,
     marginTop: 40,

  },


/*FICHA ANIMAL VISUALIZAÇÃO TUTOR*/
  
  view_secundaria_largura: {
    width:"100%",
    
  },
   view_secundaria_centraliza: {
    alignItems: "center",
    
  },

  view_ficha: {
    width: "90%",
    backgroundColor: colors.cinza,
    borderRadius: 24,
    overflow: "hidden",
    alignSelf:"center"
  },

  compartilha: {
    width: "90%",
    height: "43%",
    backgroundColor: colors.cinza,
    borderRadius: 24,
    justifyContent:"center",
    alignItems:"center"
  },
  view_do_qr: {
    width: "100%",
    height: "100%",
    padding: 16,
    gap: 10,
    justifyContent:"center",
    alignItems:"center"
  },

  qrcode: {
    width:"100%",
    height:"100%",
    objectFit: "contain",
  },

  qr_tamanho: {
    width:"70%",
    height:"70%",
    backgroundColor:colors.claro,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: colors.verde,
  },
  
  cabecalho: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.medio,
    padding: 17,
    gap: 14,
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

    


  view_das_info: {
    width: "100%",
    padding: 16,
    gap: 10,
  },
 
  

  /* dados do animal dono*/
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

  /* vacinas*/

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
    color: colors.branco,
    fontWeight: "bold",
  },

  statusSelo_verde: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.verdeFundo
  },
  pontovac_verde: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.verde
  },

  statusSelo_vemelho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.alertafundo
  },
  pontovac_vermelho: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.alerta
  },

  statusSelo_amarelo: {
  flexDirection: "row",
  alignItems: "center",
  gap: 4,
  borderRadius: 999,
  paddingHorizontal: 10,
  paddingVertical: 3,
  backgroundColor: colors.amarelofundo
},
pontovac_amarelo: {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: colors.amarelo
},

  statusTexto: {
    color: colors.branco,
    fontWeight: "bold",
    fontSize: 12,
  },
 
  /*botão detalhes*/

    dados_exame: {
    color: colors.branco,
    opacity: 0.7,
    fontSize: 12,
  },

  botaodetalhes: {
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 2,
    backgroundColor: colors.verde,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 5
  },
  texto_botao_detalhes: {
    color: colors.cinza,
    fontWeight: "bold",
    fontSize: 12,
  },

  container: {
    flex: 1,
  },







  /* exames*/ 
  dados_card_exame: {
    width: "100%",
    backgroundColor: colors.claro,
    borderRadius: 16,
    padding: 12,
    gap: 2,
    alignSelf:"center"
  },
  titulo_card_exame: {
    color: colors.branco,
    fontWeight: "bold",
  },
  // TELA VACINAS (VET E TUTOR)


preco_vacina: {
  color: colors.verde,
  fontWeight: "bold",
  marginTop: 4,
},

titulo_vacinas_pagina: {
  color: colors.verde,
  fontWeight: "bold",
  fontSize: 18
},

 Titulo_vacina: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,


    width: "32%",
    backgroundColor: colors.cinza,
    borderRadius: 16,
    alignSelf:  "center",
    padding: 8,

 },

 Titulo_nome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,

    backgroundColor: colors.bem_claro,
    borderRadius: 16,
    alignSelf:  "center",
    padding: 8,

 },

 titulo_nome_pagina: {
  color: colors.preto,
  fontSize: 18
},

 //menu
  nome_tutor:{
    width:"100%",
    height:"5%",
    alignItems:'center',
    color: colors.claro
  },
 
botao_animal: {
  width: "100%",
  minHeight: 112,
  backgroundColor: "#FFFFFF",
  borderRadius: 24,
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  marginBottom: 14,
  elevation: 3,
  shadowColor: "#4A5759",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.10,
  shadowRadius: 6,
},

view_botao: {
  width: 76,
  height: 76,
  borderRadius: 22,
  backgroundColor: colors.bem_claro,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
},
view_botao_sem_rosa: {
  width: 76,
  height: 76,
  borderRadius: 22,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
},

view_animal: {
  flex: 1,
  minHeight: 76,
  paddingLeft: 14,
  justifyContent: "center",
  gap: 4,
},

  titulo_ola: {
 color: colors.cinza,
  fontSize: 16,
  fontWeight: "bold",

},

 caixa_ola: {
     width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  paddingHorizontal: 16,
  paddingVertical: 30,
  backgroundColor: colors.fundodatela,
  alignSelf: "center",
  marginTop: 0,
  marginBottom: 0,

 },
  caixa_ola_rosa: {
  width: "100%",
   
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  paddingHorizontal: 12,
  paddingVertical: 30,
  backgroundColor: "transparent",
  alignSelf: "center",
  marginTop: 0,
  marginBottom: 0,

 },


 //index
   pressable_c: {
    width: "80%",
    height: "35%",
    backgroundColor: colors.bem_claro,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    elevation: 4,
    shadowColor: colors.cinza,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  
   
  },
  pressable_l: {
    width: "80%",
    height: "35%",
    backgroundColor: colors.claro,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: colors.cinza,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
     marginTop: 7,
    
  },
  fonteFredoka: {
    fontFamily: "Fredoka_600SemiBold",
  },

     view_metade: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
 
   //login
   view_fundo:{
     width:"75%",
     height:"60%",
     alignItems:"center",
     justifyContent:"space-evenly",
     padding:"6%",
     backgroundColor:colors.cinza,
     borderRadius:24
   },
   view_fundo2:{
     width:"80%",
     height:"60%",
     alignItems:"center",
     justifyContent:"space-evenly",
     padding:"5%",
     backgroundColor:colors.cinza,
     borderRadius:24
   },
   //login
   b_tutor:{
     width:250,
     height:70,
     backgroundColor:colors.bem_claro,
     borderRadius: 20,
     alignItems: "center",
     justifyContent: "center"
   },
 
    b_vet:{
     width:250,
     height:70,
     backgroundColor:colors.claro,
     borderRadius: 20,
     alignItems: "center",
     justifyContent: "center"
   },
   titulo:{
     textAlign: "center",
     color: "#ffffff"
   },
   view_l:{
     width:"80%",
     height:"45%",
     flexDirection:"column",
     alignItems:"center",
     justifyContent:"space-evenly",
     backgroundColor:colors.cinza,
     borderRadius:"5%"
   },

   form_link: {
  fontFamily: "Nunito_400Regular",
  fontSize: 14,
  color: colors.cinza,
  textDecorationLine: "underline",
  textAlign: "center",
},
   //cadastro


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
campo: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  backgroundColor: "#FBEFF2",
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
  backgroundColor: "#DB7C9C",
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

   cadastro_card: {
  width: "85%",
  height:"60%",
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
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  padding: 14,
  borderRadius: 20,
  backgroundColor:  colors.bem_claro,
  marginTop: 40,
  gap: 14
},
botao_cad_vet: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: 14,
  padding: 14,
  borderRadius: 20,
  backgroundColor: colors.claro,
   marginTop: 15
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
  marginTop: 6,
  textDecorationColor: colors.branco,

},



   view_c:{
     width:"80%",height:"65%",
     flexDirection:"column",
     alignItems:"center", 
     justifyContent:"space-evenly",
     backgroundColor:colors.cinza,
     borderRadius:"5%"
   },
   espaco_3:{
    width:"100%",
    height:"3%"
  },
  espaco_7:{
    width:"100%",
    height:"7%"
  },
  //login

  press:{
    width:"30%",
    height:"7%",
    backgroundColor: colors.bem_claro,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  text_imput:{
    width:"90%",
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    borderBottomLeftRadius:14,
    borderBottomRightRadius:14
  },
  // FICHA CRIAÇÃO

tela: {
    flex: 1,
    backgroundColor: colors.fundodatela,
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 14,
  },

  voltar: {
    padding: 4,
  },

  topoTexto: {
    flex: 1,
    gap: 4,
  },

  tituloPrincipal: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 25,
    color: colors.cinza,
  },

  subtitulo: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: colors.cinza,
  },

  scroll: {
    flex: 1,
  },

  conteudo: {
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 35,
    gap: 18,
  },

  identificacao: {
    backgroundColor: colors.medio,
    padding: 16,
    borderRadius: 24,
    gap: 14,
  },

  identificacaoTitulo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 2,
  },

  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.fundodatela,
    borderWidth: 3,
    borderColor: colors.rosa,
    alignItems: "center",
    justifyContent: "center",
  },

  identificacaoTexto: {
    flex: 1,
    gap: 4,
  },

  textoIdentificacao: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 20,
    color: "#FFFFFF",
  },

  ajuda: {
    fontFamily: "Nunito_400Regular",
    fontSize: 13,
    color: "#FFFFFF",
  },

  secao: {
    backgroundColor: "#F9FAF3",
    borderRadius: 24,
    padding: 16,
    gap: 18,
    elevation: 2,
    shadowColor: colors.cinza,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  secaoTitulo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconeSecao: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: colors.medio,
    alignItems: "center",
    justifyContent: "center",
  },

  a_titulo: {
    flex: 1,
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 20,
    color: colors.cinza,
  },

  listaCampos: {
    gap: 14,
  },

  a_campo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.rosaClaro,
    borderRadius: 18,
    padding: 8,
  },

  campoConteudo: {
    flex: 1,
  },

  input: {
    backgroundColor: colors.rosaClaro,
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    minHeight: 58,
  },

  multiline: {
    minHeight: 95,
    paddingTop: 12,
  },

  rodape: {
    textAlign: "center",
    fontFamily: "Nunito_400Regular",
    color: colors.cinza,
    fontSize: 13,
    marginTop: 2,
  },

  botaoArea: {
    alignItems: "center",
    marginTop: 2,
  },

  botao: {
    overflow: "hidden",
    width: "100%",
    textAlign: "center",
    backgroundColor: colors.rosa,
    color: colors.cinza,
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 18,
    paddingVertical: 17,
    borderRadius: 999,
    elevation: 3,
  },



quadrinho_vizu_cabe: {
  backgroundColor: colors.medio, 
  width: 230, 
  height: 43,
  fontSize: 12,
  marginBottom: 10,
  paddingHorizontal: 8,
  borderTopLeftRadius: 14, 
  borderTopRightRadius: 14, 
  borderBottomLeftRadius: 14,
  borderBottomRightRadius: 14,

},

quadrinho_vizu: {
  backgroundColor: colors.medio, 
  width: "100%", 
  height: 43,
  fontSize: 12,
  marginBottom: 10,
  paddingHorizontal: 8,
  borderTopLeftRadius: 14, 
  borderTopRightRadius: 14, 
  borderBottomLeftRadius: 14,
  borderBottomRightRadius: 14,


},

// botão criar ficha
botao_principal: {
  width: "40%",
  alignSelf: "center",
  backgroundColor: colors.verde,
  borderRadius: 999,
  paddingVertical: 8,
  alignItems: "center",
  marginTop: 16,
  marginBottom: 25,
},
texto_botao_principal: {
  color: colors.cinza,
  fontWeight: "bold",
  fontSize: 15,
},

  icone_mais: {
  width: 28,
  height: 28,
},

circulo_foto_vazia: {
  width: 70,
  height: 70,
  borderRadius: 35,
  borderWidth: 3,
  borderColor: colors.verde,
  backgroundColor: colors.medio,
  alignItems: "center",
  justifyContent: "center",
},

titulo_animal_dono: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,

},


cabecalho_criacao: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colors.claro,
  padding: 17,
  gap: 14,
},

dados_div_animal_dono_criacao: {
  flex: 1,
  backgroundColor: colors.claro,
  borderRadius: 16,
  padding: 12,
  gap: 4,
},
});