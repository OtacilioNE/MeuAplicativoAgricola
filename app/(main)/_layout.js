import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { PlantacoesProvider } from '../../context/PlantacoesContext'; // <-- Importar o Cérebro

export default function MainAppLayout() {
  return (
    // 1. O Provedor de Contexto "abraça" todo o layout das abas.
    // Isto garante que ambas as abas partilham o mesmo estado.
    <PlantacoesProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#27AE60', // Cor verde-agrícola
          tabBarInactiveTintColor: '#777',
          tabBarStyle: { paddingBottom: 5, height: 55 },
          tabBarLabelStyle: { fontSize: 12 },
          headerStyle: {
            backgroundColor: '#27AE60',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index" // Esta é a rota app/(main)/index.js
          options={{
            title: 'Plantações',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="list-alt" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="registar" // Esta é a rota app/(main)/registar.js
          options={{
            title: 'Registrar',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="plus-circle" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </PlantacoesProvider>
  );
}