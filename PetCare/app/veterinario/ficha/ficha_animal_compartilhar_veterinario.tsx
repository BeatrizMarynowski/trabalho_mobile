import { Link, useLocalSearchParams } from "expo-router";
import { ImageBackground, View } from "react-native";
import { Text, Icon } from 'react-native-paper';
import { colors, styles } from "../../../style";

import QRCode from 'react-native-qrcode-svg';
export default function Index() {

const { petId, petNome } = useLocalSearchParams<{ petId: string; petNome: string }>();
const idDoPet = petId;
const nomeDoPet = petNome;

return (
/*view principal*/
    <ImageBackground
            source={require("../../../assets/images/fundo.png")}
            style={{ flex: 1 }}
            resizeMode="cover"
          >
      
        <Link href="../menu_veterinario" style={styles.posicao_seta}>
          <Icon source="arrow-left" size={35} color={colors.cinza} />
        </Link>

        <View style={{width:"100%", height:"100%",alignItems:"center",justifyContent:"center"}}>
            <View style={styles.compartilha}>
                {/*view do qrcode*/}
                <View style={styles.view_do_qr}>
                <Text style={styles.qr_titulo}>Ficha digital do pet</Text>
                <Text style={styles.qr_sub}>Escaneie para ver vacinas, exames e histórico</Text>
                <View style={styles.qr_tamanho}>
                    <QRCode value={idDoPet} size={220} backgroundColor="transparent" />
                </View>
       
                </View>
            </View>
        </View>
     </ImageBackground>
  );
}