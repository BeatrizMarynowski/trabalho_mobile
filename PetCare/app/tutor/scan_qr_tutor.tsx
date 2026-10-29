import React, { useState } from 'react';
import { StyleSheet,View,Alert,Pressable,Linking} from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../style';

export default function ScannerTutor() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleBarcodeScanned = async ({ data }: { data: string }) => {
        if (scanned || loading) return;

        setScanned(true);
        setLoading(true);

        const petId = data;
        const db = getFirestore();
        const auth = getAuth();
        const tutorLogado = auth.currentUser;

        if (!tutorLogado) {
            Alert.alert(
                'Erro',
                'Você precisa estar logado para vincular um pet!'
            );
            setScanned(false);
            setLoading(false);
            return;
        }

        try {
            const petRef = doc(db, 'ficha_pet', petId);

            await updateDoc(petRef, {
                tutorId: tutorLogado.uid,
            });

            Alert.alert('Sucesso!', 'Pet vinculado à sua conta!');
            router.replace('./menu_tutor');
        } catch (error) {
            console.error('Erro ao vincular pet:', error);
            Alert.alert(
                'Erro',
                'QR Code inválido ou erro no servidor.'
            );
            setScanned(false);
        } finally {
            setLoading(false);
        }
    };

    // Ainda carregando o estado da permissão
    if (!permission) {
        return (
            <View style={styles.centralizado}>
                <ActivityIndicator
                    size="large"
                    color={colors.verde}
                />
            </View>
        );
    }

    // Permissão não concedida
    if (!permission.granted) {
        const podePedir = permission.canAskAgain;

        return (
            <View style={styles.centralizado}>
                <MaterialCommunityIcons
                    name="camera-outline"
                    size={48}
                    color={colors.rosaEscuro}
                />

                <Text style={styles.titulo}>
                    Precisamos da sua câmera!
                </Text>

                <Text style={styles.subtitulo}>{podePedir ? 'Permita o acesso à câmera para escanear o QR Code do pet.':
                'O acesso à câmera foi bloqueado. Ative a permissão nas configurações do celular.'}</Text>

                <Pressable
                    style={styles.botao}
                    onPress={() =>
                        podePedir
                            ? requestPermission()
                            : Linking.openSettings()
                    }
                >
                    <Text style={styles.textoBotao}>
                        {podePedir ? 'Permitir câmera' : 'Abrir configurações'}
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.cabecalho}>
                <Pressable
                    style={styles.voltar}
                    onPress={() => router.back()}
                >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={26}
                        color={colors.rosaEscuro}
                    />
                </Pressable>

                <MaterialCommunityIcons
                    name="paw"
                    size={38}
                    color={colors.cinza}
                />

                <Text style={styles.titulo}>
                    Escaneie o QR Code do pet
                </Text>

                <Text style={styles.subtitulo}>
                    Posicione o código dentro da moldura
                </Text>
            </View>

            {/* Câmera */}
            <View style={styles.areaCamera}>
                <CameraView
                    style={styles.camera}
                    facing="back"
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
                    onBarcodeScanned={
                        scanned ? undefined : handleBarcodeScanned
                    }
                />

                {/* Moldura */}
                <View style={styles.moldura}>
                    <View style={[styles.canto, styles.superiorEsquerdo]} />
                    <View style={[styles.canto, styles.superiorDireito]} />
                    <View style={[styles.canto, styles.inferiorEsquerdo]} />
                    <View style={[styles.canto, styles.inferiorDireito]} />
                </View>

                {/* Carregamento */}
                {loading && (
                    <View style={styles.overlay}>
                        <View style={styles.cardLoading}>
                            <ActivityIndicator
                                size="large"
                                color={colors.verde}
                            />

                            <Text style={styles.textoLoading}>
                                Vinculando pet...
                            </Text>
                        </View>
                    </View>
                )}
            </View>

            {/* Rodapé */}
          
          

                {scanned && !loading && (
                    <Pressable
                        style={styles.botao}
                        onPress={() => setScanned(false)}
                    >
                        <Text style={styles.textoBotao}>
                            Escanear novamente
                        </Text>
                    </Pressable>
                )}
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fundodatela,
    },

    centralizado: {
        flex: 1,
        backgroundColor: colors.fundodatela,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },

    cabecalho: {
        alignItems: 'center',
        backgroundColor: colors.fundodatela,
        paddingTop: 55,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    voltar: {
        position: 'absolute',
        top: 48,
        left: 18,
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: colors.bem_claro,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },

    titulo: {
        fontFamily: 'Fredoka_600SemiBold',
        fontSize: 23,
        color: colors.cinza,
        textAlign: 'center',
        marginTop: 8,
    },

    subtitulo: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        color: colors.cinza,
        marginTop: 4,
        textAlign: 'center',
    },

    areaCamera: {
        flex: 1,
        backgroundColor: colors.preto,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    camera: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    moldura: {
        width: 250,
        height: 250,
    },

    canto: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderColor: colors.fundodatela,
        borderWidth: 4,
    },

    superiorEsquerdo: {
        top: 0,
        left: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopLeftRadius: 22,
    },

    superiorDireito: {
        top: 0,
        right: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderTopRightRadius: 22,
    },

    inferiorEsquerdo: {
        bottom: 0,
        left: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomLeftRadius: 22,
    },

    inferiorDireito: {
        bottom: 0,
        right: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomRightRadius: 22,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(3,3,3,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },

    cardLoading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        backgroundColor: colors.rosaClaro,
        borderRadius: 25,
        padding: 22,
        marginHorizontal: 20,
    },

    textoLoading: {
        fontFamily: 'Fredoka_600SemiBold',
        fontSize: 19,
        color: colors.cinza,
    },

    rodape: {
        backgroundColor: colors.fundodatela,
        padding: 20,
        alignItems: 'center',
        gap: 12,
    },

    textoRodape: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        color: colors.cinza,
        textAlign: 'center',
    },

    botao: {
        backgroundColor: colors.rosaEscuro,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginTop: 16,
    },

    textoBotao: {
        fontFamily: 'Fredoka_600SemiBold',
        fontSize: 16,
        color: colors.branco,
    },
});