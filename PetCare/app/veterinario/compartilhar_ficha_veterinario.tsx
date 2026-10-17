import { Link, useLocalSearchParams } from "expo-router";
import { Image, View } from "react-native";
import { Text } from 'react-native-paper';
import { styles } from '../../style';

import QRCode from 'react-native-qrcode-svg';
export default function Index() {

const { petId, petNome } = useLocalSearchParams<{ petId: string; petNome: string }>();
const idDoPet = petId;
const nomeDoPet = petNome;

return (
/*view principal*/
    <View style={styles.view_principal}>
        {/*seta que volta para o menu*/}
        <Link href="./menu_veterinario" style={styles.seta_voltar}>
            <Image source={require('../../assets/images/seta_v.png')} style={styles.imagem_seta}/>
        </Link>

        <View style={{width:"100%", height:"100%",alignItems:"center",justifyContent:"center"}}>
            <View style={styles.compartilha}>
                {/*view do qrcode*/}
                <View style={styles.view_do_qr}>
                    <Text style={styles.nomePet}>{nomeDoPet}</Text>
                    <View style={styles.qr_tamanho}>
                        <QRCode 
                          value={idDoPet}
                          size={150}
                          backgroundColor="transparent"
                        />
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}