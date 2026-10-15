import { Link } from "expo-router";
import { Image, View } from "react-native";
import { Text } from 'react-native-paper';
import { styles } from '../style';

export default function Index() {
return (
/*view principal*/
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
        <Link href="./menu_veterinario" style={styles.seta_voltar}>
            <Image source={require('../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>
        <View style={{width:"100%", height:"100%",alignItems:"center",justifyContent:"center"}}>
            <View style={styles.compartilha}>
                {/*view do qrcode*/}
                <View style={styles.view_do_qr}>
                    <Text style={styles.nomePet}>Rodolfo</Text>
                    <View style={styles.qr_tamanho}>
                        <Image source={require("../assets/images/qrcode.png")} style={styles.qrcode}/>
                    </View>
                    <Text style={styles.nomePet}>linkexemploblabla.mandaraousuario</Text>
                </View>
            </View>
        </View>
    </View>
  );
}