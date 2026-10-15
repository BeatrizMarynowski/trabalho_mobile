import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera'; // 1. Componentes do Expo
import { router } from 'expo-router';
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // 2. Banco de dados [1]
import { getAuth } from 'firebase/auth'; // 3. Autenticação [1]
import { colors } from '../style';

export default function ScannerTutor() {
  const [permission, requestPermission] = useCameraPermissions(); // 4. Hook de permissão
  const [scanned, setScanned] = useState(false); // Trava para ler apenas 1 vez por escaneada
  const [loading, setLoading] = useState(false);

  if (!permission) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.verde} />
      </View>
    );
  }

  // Se o usuário ainda não permitiu o uso da câmera
  if (!permission.granted) {
    return (
      <View>
        <Text style={{ marginBottom: 16 }}>Precisamos de permissão para usar sua câmera</Text>
        <Button onPress={requestPermission} title="Permitir Câmera" />
      </View>
    );
  }

  // Função disparada assim que o QR Code entra no foco da câmera
  const handleBarcodeScanned = async ({ data }: { data: string }) => {
    if (scanned || loading) return;
    setScanned(true); // Trava o scanner
    setLoading(true);

    const petId = data; // O conteúdo lido do QR Code é o ID do pet [1]
    const db = getFirestore();
    const auth = getAuth();
    const tutorLogado = auth.currentUser;

    if (!tutorLogado) {
      Alert.alert("Erro", "Você precisa estar logado para vincular um pet!");
      setScanned(false);
      setLoading(false);
      return;
    }

    try {
      // 5. Atualiza o documento no Firestore inserindo o 'tutorId' [1]
      const petRef = doc(db, "ficha_pet", petId);
      await updateDoc(petRef, {
        tutorId: tutorLogado.uid
      });

      Alert.alert("Sucesso!", "Pet vinculado à sua conta!");
      router.replace("./menu_tutor"); // Retorna o tutor ao menu principal (o pet novo aparecerá na lista!)

    } catch (error) {
      console.error("Erro ao vincular pet:", error);
      Alert.alert("Erro", "QR Code inválido ou erro no servidor.");
      setScanned(false); // Destrava caso queira tentar escanear de novo
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* 6. CameraView configurada especificamente para QR Codes */}
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"], // Foca apenas em ler QR Codes
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned} //
      />
      
      {loading && (
        <View>
          <ActivityIndicator size="large" color={colors.verde} />
          <Text style={{ color: '#fff', marginTop: 10 }}>Vinculando Pet...</Text>
        </View>
      )}
    </View>
  );
}