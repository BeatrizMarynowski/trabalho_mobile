import { StyleSheet} from 'react-native';

export const colors = {
  roxo_fundodatela: "#ae98cc",
  roxo_escuro: "#271033",    
  roxo_medio: "#3d2154",     
  roxo_claro: "#54326e",
  roxo_bem_claro: "#dfbcfc", 
  branco: "#ffffff",
  preto: "#030303",
  verde: "#3ecf8e",         
  verdeFundo: "#183642",   
  alerta: "#e05757",        
  alertafundo: "#e0575733",
  amarelo: "#e0c357",
  amarelofundo: "#e0c35733",
};


export const styles = StyleSheet.create({
  /*  PADRÃO TODAS (maioria) AS TELAS */ 

    view_principal:{
    flex: 1,
    alignItems:"center", 
    backgroundColor: colors.roxo_fundodatela
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

  
  /*INDEX*/
  
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
  imagem_pata: {
    width:"50%", 
    height:"50%", 
    objectFit: "contain",
  },
  texto_conecte: {
    textAlign:"center", 
    gap:"2%", 
    padding:"2%"
  },
  posicao_seta:{
        position:"absolute",
        top:"30%",
        left:"5%",
        zIndex:5
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





/*FICHA ANIMAL VISUALIZAÇÃO TUTOR*/
  
  view_secundaria_largura: {
    width:"100%",
    
  },
   view_secundaria_centraliza: {
    alignItems: "center",
    
  },

  view_ficha: {
    width: "90%",
    backgroundColor: colors.roxo_escuro,
    borderRadius: 24,
    overflow: "hidden",
    alignSelf:"center"
  },

  compartilha: {
    width: "90%",
    height: "43%",
    backgroundColor: colors.roxo_escuro,
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
    backgroundColor:colors.roxo_claro,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: colors.verde,
  },
  
  cabecalho: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.roxo_medio,
    padding: 17,
    gap: 14,
  },
  
  foto_animal: {
    width: 70,
    height: 70,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: colors.verde,
  },


  nomePet: {
    color: colors.branco,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 7,
  
  },
  nomeDono: {
    color: colors.branco,
    opacity: 0.75,
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
    backgroundColor: colors.roxo_medio,
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
    backgroundColor: colors.roxo_medio,
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
    backgroundColor: colors.roxo_claro,
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
    color: colors.roxo_escuro,
    fontWeight: "bold",
    fontSize: 12,
  },

  container: {
    flex: 1,
  },







  /* exames*/ 
  dados_card_exame: {
    width: "100%",
    backgroundColor: colors.roxo_claro,
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
    backgroundColor: colors.roxo_escuro,
    borderRadius: 16,
    alignSelf:  "center",
    padding: 8,

 },

 Titulo_nome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,

    backgroundColor: colors.roxo_bem_claro,
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
    color: colors.roxo_claro
  },
  botao_animal:{
    width:340,
    height:100,
    alignItems:'center',
    backgroundColor: colors.roxo_medio, 
    borderRadius:30,
    flexDirection:'row',
    marginBottom:10
  },
  view_botao:{
    width:"30%",
    height:"100%",
    backgroundColor: colors.roxo_medio,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    alignItems: "center",
    justifyContent: "center"
  },
  view_animal:{
    width:"70%",
    height:"100%",
    color: colors.roxo_medio,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  titulo_ola: {
  color: colors.preto,
  fontSize: 15
},

 caixa_ola: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
    backgroundColor: colors.roxo_bem_claro,
    borderRadius: 16,
    alignSelf:  "center",
    padding: 8,
    marginTop: 20,

 },

 //index
   pressable_l:{
     width:"75%",
     height:"40%",
     backgroundColor: colors.roxo_claro,
     borderRadius: 20,
     alignItems: "center",
     justifyContent: "center"
   },
   pressable_c:{
     width:"75%",
     height:"40%",
     backgroundColor: colors.roxo_bem_claro,
     borderRadius: 20,
     alignItems: "center",
     justifyContent: "center"
   },
   view_metade:{
     width:"100%",
     height:"50%",
     alignItems:"center"
   },
 
   //login
   view_fundo:{
     width:"80%",
     height:"50%",
     alignItems:"center",
     justifyContent:"space-evenly",
     padding:"5%",
     backgroundColor:colors.roxo_escuro,
     borderRadius:24
   },
   view_fundo2:{
     width:"80%",
     height:"60%",
     alignItems:"center",
     justifyContent:"space-evenly",
     padding:"5%",
     backgroundColor:colors.roxo_escuro,
     borderRadius:24
   },
   //login
   b_tutor:{
     width:250,
     height:70,
     backgroundColor:colors.roxo_bem_claro,
     borderRadius: 20,
     alignItems: "center",
     justifyContent: "center"
   },
 
    b_vet:{
     width:250,
     height:70,
     backgroundColor:colors.roxo_claro,
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
     backgroundColor:colors.roxo_escuro,
     borderRadius:"5%"
   },
   //cadastro
 
   view_c:{
     width:"80%",height:"65%",
     flexDirection:"column",
     alignItems:"center", 
     justifyContent:"space-evenly",
     backgroundColor:colors.roxo_escuro,
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
    backgroundColor: colors.roxo_bem_claro,
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


quadrinho_vizu_cabe: {
  backgroundColor: colors.roxo_medio, 
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
  backgroundColor: colors.roxo_medio, 
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
  color: colors.roxo_escuro,
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
  backgroundColor: colors.roxo_medio,
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
  backgroundColor: colors.roxo_claro,
  padding: 17,
  gap: 14,
},

dados_div_animal_dono_criacao: {
  flex: 1,
  backgroundColor: colors.roxo_claro,
  borderRadius: 16,
  padding: 12,
  gap: 4,
},
});