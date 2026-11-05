import React, { useState } from 'react';
import { StyleSheet,View,Alert,Pressable,Linking} from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { colors, styles } from '../../style';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
        <View style={styles.container_qr}>
            {/* Cabeçalho */}
            <View style={styles.cabecalho_qr}>
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
