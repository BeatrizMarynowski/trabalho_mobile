import { Stack } from "expo-router";
import { useFonts, Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Fredoka_600SemiBold, Nunito_400Regular });
  if (!fontsLoaded) return null;
  return (
      <Stack>
        {/*app*/}
        <Stack.Screen name="index" options={{headerShown: false}} />
        {/*entrada*/}
          {/*login*/}
          <Stack.Screen name="entrada/login" options={{headerShown: false}} />
          <Stack.Screen name="entrada/login_tutor" options={{headerShown: false}} />
          <Stack.Screen name="entrada/login_veterinario" options={{headerShown: false}} />
          {/*cadastro*/}
          <Stack.Screen name="entrada/cadastro" options={{headerShown: false}} />
          <Stack.Screen name="entrada/cadastro_tutor" options={{headerShown: false}} />
          <Stack.Screen name="entrada/cadastro_veterinario" options={{headerShown: false}} />
        {/*tutor*/}
          <Stack.Screen name="tutor/menu_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/scan_qr_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/ficha_animal_visualizacao_tutor" options={{headerShown: false}} />

          <Stack.Screen name="tutor/vacinas_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/exames_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/notas_tutor" options={{headerShown: false}} />
        {/*veterinario*/}
          <Stack.Screen name="veterinario/menu_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/ficha_animal_visualizacao_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/ficha_animal_criacao_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/compartilhar_ficha_veterinario" options={{headerShown: false}} />

          <Stack.Screen name="veterinario/vacinas_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/exames_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/notas_veterinario" options={{headerShown: false}} />
      </Stack>
  );
}