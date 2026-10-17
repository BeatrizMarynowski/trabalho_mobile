import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { colors } from '../../style';

export default function ScannerTutor() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!permission) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.verde} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ marginBottom: 16 }}>Precisamos de permissão para usar sua câmera</Text>
        <Button onPress={requestPermission} title="Permitir Câmera" />
      </View>
    );
  }


  const handleBarcodeScanned = async ({ data }: { data: string }) => {
    if (scanned || loading) return;
    setScanned(true);
    setLoading(true);

    const petId = data;
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
      const petRef = doc(db, "ficha_pet", petId);
      await updateDoc(petRef, {
        tutorId: tutorLogado.uid
      });

      Alert.alert("Sucesso!", "Pet vinculado à sua conta!");
      router.replace("./menu_tutor");

    } catch (error) {
      console.error("Erro ao vincular pet:", error);
      Alert.alert("Erro", "QR Code inválido ou erro no servidor.");
      setScanned(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
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