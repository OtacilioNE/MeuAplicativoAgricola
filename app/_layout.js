import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Configura o "Stack" (pilha de telas)
    <Stack>
      {/* Define a tela "index" como nossa primeira tela (Login).
        headerShown: false esconde o cabeçalho.
      */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      
      {/* Define a tela "main" como a tela do app.
        Dá a ela um título no cabeçalho.
      */}
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}