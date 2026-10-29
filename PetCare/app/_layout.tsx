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
          <Stack.Screen name="entrada/esqueceu" options={{headerShown: false}} />

          {/*login*/}
          <Stack.Screen name="entrada/login/login" options={{headerShown: false}} />
          <Stack.Screen name="entrada/login/login_tutor" options={{headerShown: false}} />
          <Stack.Screen name="entrada/login/login_veterinario" options={{headerShown: false}} />

          {/*cadastro*/}
          <Stack.Screen name="entrada/cadastro/cadastro" options={{headerShown: false}} />
          <Stack.Screen name="entrada/cadastro/cadastro_tutor" options={{headerShown: false}} />
          <Stack.Screen name="entrada/cadastro/cadastro_veterinario" options={{headerShown: false}} />

        {/*tutor*/}
          <Stack.Screen name="tutor/menu_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/scan_qr_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/ficha_animal_visualizacao_tutor" options={{headerShown: false}} />

          <Stack.Screen name="tutor/vacinas_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/exames_tutor" options={{headerShown: false}} />
          <Stack.Screen name="tutor/notas_tutor" options={{headerShown: false}} />

        {/*veterinario*/}
          <Stack.Screen name="veterinario/menu_veterinario" options={{headerShown: false}} />

          {/*exames*/}
          <Stack.Screen name="veterinario/exames/exames_criar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/exames/exames_detalhes_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/exames/exames_editar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/exames/exames_veterinario" options={{headerShown: false}} />

          {/*fichas*/}
          <Stack.Screen name="veterinario/ficha/ficha_animal_compartilhar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/ficha/ficha_animal_criacao_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/ficha/ficha_animal_editar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/ficha/ficha_animal_visualizacao_veterinario" options={{headerShown: false}} />

          {/*notas*/}
          <Stack.Screen name="veterinario/notas/notas_criar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/notas/notas_detalhes_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/notas/notas_editar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/notas/notas_veterinario" options={{headerShown: false}} />
          
          {/*vacinas*/}
          <Stack.Screen name="veterinario/vacinas/vacinas_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/vacinas/vacinas_criar_veterinario" options={{headerShown: false}} />
          <Stack.Screen name="veterinario/vacinas/vacinas_editar_veterinario" options={{headerShown: false}} />

      </Stack>
  );
}