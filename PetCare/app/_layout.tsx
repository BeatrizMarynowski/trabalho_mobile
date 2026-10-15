import { Stack } from "expo-router";
import { useFonts, Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Fredoka_600SemiBold, Nunito_400Regular });   // ← linha alterada
  if (!fontsLoaded) return null;
  return (
      <Stack>
        {/*dos dois*/}
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="cadastro" options={{headerShown: false}} />
        {/*do tutor*/}
            <Stack.Screen name="login_tutor" options={{headerShown: false}} />
            <Stack.Screen name="cadastro_tutor" options={{headerShown: false}} />
            <Stack.Screen name="menu_tutor" options={{headerShown: false}} />
            <Stack.Screen name="scan_qr_tutor" options={{headerShown: false}} />
            <Stack.Screen name="ficha_animal_visualizacao_tutor" options={{headerShown: false}} />
            <Stack.Screen name="vacinas_tutor" options={{headerShown: false}} />
            <Stack.Screen name="exames_tutor" options={{headerShown: false}} />
            <Stack.Screen name="notas_tutor" options={{headerShown: false}} />
        {/*do veterinario*/}
    <Stack.Screen name="login_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="cadastro_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="menu_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="ficha_animal_visualizacao_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="vacinas_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="exames_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="notas_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="ficha_animal_criacao_veterinario" options={{headerShown: false}} />
    <Stack.Screen name="compartilhar_ficha_veterinario" options={{headerShown: false}} />
      </Stack>
  );
}